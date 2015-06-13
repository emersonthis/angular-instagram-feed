emersonthis.directive('instagramFeed', ['$http', '$compile', function($http, $compile){

    function link(scope, element) {

        scope.moreIgToSee = false;
        scope.moreIgUrl = null;
        scope.showMoreIg = function(event){
            
            angular.element(event.target).remove();

            /* This is hacky but it works...
            We override the name of the callback return by the API to what Angular wants */
            $http.jsonp(scope.moreIgUrl+"&callback=JSON_CALLBACK")
            .success(
                function(data, status, headers, config){
                    insertFeed(data);
                }
            )
            .error(
                function(data,status,headers,config){
                    console.warn("showMoreIg failes: "+status);
                }
            );

            event.preventDefault();

        };

        function insertFeed(data) {

            for(var i=0; i<data.data.length; i++) {
                media = data.data[i];
                imgSrc = media.images.low_resolution.url;
                videoSrc = (media.videos) ? media.videos.low_bandwidth.url : false;
                if (!videoSrc) {
                    element.append( '<img class="ig-media ig-media--img" src="'+imgSrc+'" />' );
                } else {
                    element.append('<video controls class="ig-media ig-media--video"><source src="'+videoSrc+'" type="video/mp4">Your browser does not support the video tag... which sucks!</video>');
                }
            }

            //if more pages, add link
            if (data.pagination.next_url) {
                scope.moreIgToSee = true;
                scope.moreIgUrl = data.pagination.next_url;

                element.append('<a class="more-ig-btn" href="#" ng-show="moreIgToSee" ng-click="showMoreIg($event)">More!</a>');
            }

            $compile(element.contents())(scope.$new());


        }
        
        element.addClass('ig-feed-wrap');

        $http.jsonp("https://api.instagram.com/v1/users/"+scope.userId+"/media/recent/?client_id="+scope.clientId+"&callback=JSON_CALLBACK")
            .success(
                function(data, status, headers, config){

                    insertFeed(data);
                }
            )
            .error(
                function(data, status, headers, config){

                }
            );

    }

    return {
        retrict: "E",
        link: link,
        scope: {
            clientId : '@clientid',
            userId : '=userid'
        }
    };

}]);
