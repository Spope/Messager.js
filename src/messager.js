var Messager = function(params){

    var obj = {
        _bindList: {},
        _window: null,
        _remoteWindow: null,
        _local: null,
        _remote: null,

        init: function(params) {
            if(typeof params.remoteWindow === "undefined" || typeof params.local === "undefined" || typeof params.remote === "undefined") {
                throw 'Missing Parameters';
            }

            this._window = window;
            if (params.localWindow) {
                this._window = params.localWindow;
            }

            this._remoteWindow = params.remoteWindow;
            this._local = params.local;
            this._remote = params.remote;

            if(this._window.addEventListener) {
                //Other Browsers
                this._window.addEventListener('message', this._dispatch.bind(this), false);
            } else {
                //IE Binding
                this._window.attachEvent('onmessage', this._dispatch);
            }
        },

        bind: function(name, callback) {
            this._bindList[name] = callback;
        },

        _dispatch: function(e) {
            if(e.origin != this._remote) {
                //Bad message origin
                return;
            }

            var message = {data: null};
            if (e.data) {
                message = JSON.parse(e.data);
            }

            if(typeof this._bindList[message.type] == 'function') {
                this._bindList[message.type].apply(this._window, [message.data]);
            }
        },


        send: function(type, data) {
            if(!data) {data = {};}
            var obj = {};
            obj.data = data;
            obj.type = type;

            this._remoteWindow.postMessage(JSON.stringify(obj), this._remote);
        }
    };

    obj.init(params);

    return obj;
};
