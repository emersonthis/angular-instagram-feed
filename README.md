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
