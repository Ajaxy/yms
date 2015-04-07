myApp.modules.define('A', ['util.defineClass'], function (provide, defineClass) {
    provide(defineClass(function A (content) {
        this._content = content;
    }));
});