myApp.modules.define('myPlugin.A', ['A', 'util.defineClass'], function (provide, A, defineClass) {
    provide(defineClass(function MyPluginA (content, postfix) {
        A.call(this, content);

        this._postfix = postfix;
    }, A));
});