<p align="center"><a href="https://projects.spope.fr/messager/example/index.html" target="_blank"><img width="100" height="100" src="https://raw.githubusercontent.com/Spope/Messager.js/master/example/icon.png"></a></p>

# Messager

Messager is a **lightweight** (1kb Gzipped) dependancy free wrapper for postMessage API. Messager allow you to send event to and from an iframe, cross domain or not

## Installation

Just include the minified version of MiniMasonry.js on your website :


```html
<script src="messager/build/messager.min.js"></script>
```

## Usage
Messager should be instanciated on both iframe and parent page.

On the host website :

```javascript
var iframe = document.getElementById('myFrame');
var messager = new Messager({
    remoteWindow: iframe.contentWindow,
    local: "http://hostaddress.com/",
    remote: "http://iframeaddress.com/"
});
```

On the iframe's website :

```javascript
var messager = new Messager({
    remoteWindow: window.parent,
    local: "http://iframeaddress.com/",
    remote: "http://hostaddress.com/"
});
```

Then, from the iframe or the host website, you can send event like this :

```javascript
messager.send('eventName', {param: 'value'});
```

And listening to this event like that :

```javascript
Then, from the iframe or the host website, you can send event like this :
```

The callback function will receveive the given parameters as argument.

## Parameters

Here is the list of available parameters :

Name | Default value | Description
-----|---------------|------------
local|null|Hostname of the current website (iframe hostname or parent hostname). **Required**
remote|null|Hostname of the remote website (iframe hostname or parent hostname). **Required**
remoteWindow|null|Window object of the remote website. **Required**
window|window|Window object of the local website.

## API

Here is the list of available APIs :

Name|Description
----|-----------
send('eventName', parameters)|Function to send event and parameters to the iframe / host.
on('eventName', callback)|Callback to execute on the iframe or host to execute when receiving an event.

## Example

[See website](https://projects.spope.fr/messager/example/index.html)

## License

MIT

Made by [Spope](https://spope.fr/)
