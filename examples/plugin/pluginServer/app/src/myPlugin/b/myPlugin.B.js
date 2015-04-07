myApp.modules.define('myPlugin.B', ['myPlugin.A', 'util.defineClass'], function (provide, MyPluginA, defineClass) {
    provide(defineClass(function MyPluginB (content, postfix) {
        MyPluginA.call(this, content, postfix);
    }, MyPluginA, {
        getContent: function () {
            return this._content + ' ' + this._postfix;
        }
    }));
});