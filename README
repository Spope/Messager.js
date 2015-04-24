Description
===

This class allow communication between cross domain Iframe. It has no dependancy and use [window.postMessage](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage) API.
Compatibility : (see Other section)

Usage
===

Download the script and create an instance :

    var frame = document.getElementById('myFrame');
    var params = {
        localWindow: window,
        remoteWindow: frame.contentWindow,
        local: "http://localaddresse.com/",
        remote: "http://remoteaddresse.com/"
    };
    var com = new Messager(params);

Then, from the Iframe or the website including it, you can send an event like this :

    com.send('eventName', {param: 'value'});
    
And listening to this event like that :

    com.on('eventName', callback);

Other
===
Multiple instances can be called on multiple Iframe on a single page.
Compatibility: Currently testing it.
