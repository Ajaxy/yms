myApp.modules.define('B', ['A', 'util.defineClass'], function (provide, A, defineClass) {
    provide(defineClass(function B (content) {
        A.call(this, content);
    }, A, {
        getContent: function () {
            return this._content;
        }
    }));
});