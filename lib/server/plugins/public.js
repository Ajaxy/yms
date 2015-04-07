module.exports = {
    jsonp: require('./jsonp'),
    contents: require('./contents'),
    closure: require('./closure'),

    init: {
        src: require('./init/src'),
        setupAsync: require('./init/setupAsync')
    },

    combine: {
        src: require('./combine/src'),
        format: require('./combine/format')
    },

    map: {
        src: require('./map/src')
    }

}