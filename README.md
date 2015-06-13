# angular-instagram-feed
Simple angular directive to display a user's Instagram feed


##Quickstart
Replace `<CLIENT ID>` and `<USER ID>` with your Instgram App's client ID and the Intagram user's ID (respectively). 

You can look up the number user ID of an instagram user with the following API request: `https://api.instagram.com/v1/users/search?q=<USER NAME>&client_id=<CLIENT ID>` where <UESR NAME> is the Instagram handle for the user whose feed you want to show.

```
<script src="angular.js"></script>
<script src="angular-instagram-feed.js"></script>
```

```
<instagram-feed 
    userid="<USER ID>"
    clientid="<CLIENT ID>"> 
</instagram-feed>
```

The inserted markup will be unstyled, so you can write whatever css you like using the following classes:
`.ig-feed-wrap` will be added to the root element (containing the img/video nodes).
`.ig-media` will be added to every child media element.
`.ig-media--img` will also be added to images.
`.ig-media--video` will also be added to videos.
`.ig-more-btn` will be added to the "more" link that appears when there are more than 20 images to show

Here's a quick and dirty example (written in SASS):

```
.ig-feed-wrap {

    max-width:900px;
    display:flex;
    flex-direction:row; 
    flex-wrap:wrap;
    justify-content:space-between; 
    align-items:flex-start;
    align-content:space-between;

    padding-top: 3em; 

    @media all (max-width : 740px ) {
        justify-content:space-around;
    }

    .ig-media {
        max-width:200px;
        height:auto;
        margin-bottom:3em;
    }

    .more-ig-btn {
        width:100%;
        text-align:center;
        margin-bottom:3em;
    }
}

```
