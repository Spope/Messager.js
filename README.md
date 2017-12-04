Description
===

This class allow communication between cross domain Iframe. It has no dependancy and use [window.postMessage](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage) API.

Usage
===

Download the script and create an instance on the parent page :

```javascript
    var frame = document.getElementById('myFrame');
    var params = {
        localWindow: window,
        remoteWindow: frame.contentWindow,
        local: "http://localaddresse.com/",
        remote: "http://remoteaddresse.com/"
    };
    var com = new Messager(params);
```
    
and an instance into the iFrame page :

```javascript
    var params = {
        localWindow: window,
        remoteWindow: window.parent,
        local: window.local,
        remote: window.remote
    };
    var com = new Messager(params);
```

Then, from the Iframe or the website including it, you can send an event like this :

```javascript
    com.send('eventName', {param: 'value'});
```
    
And listening to this event like that :

```javascript
    com.on('eventName', callback);
```
