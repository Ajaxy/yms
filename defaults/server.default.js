var yms = require('yms'),
    plg = yms.plugins,
    // You can require your own packages.
    express = yms.express,
    minimist = yms.minimist;

var app = express(),
    args = minimist(process.argv),
    port = args.port || args.p || 3000;

app.get(['/', '/:action(init|index|combine|map)(.js|.xml)?'], handleYms);
app.listen(port);// TODO Add sockets support.
console.log('Server `yms` started on port ' + port + '.');

function handleYms (req, res) {
    var data = {
            req: req,
            res: res,
            src: './build/' + (req.query.mode ? req.query.mode + '/' : '')
        };

    res.set('Content-Type', 'text/javascript');

    switch (req.params.action) {
        case 'combine': return handleCombine(data);
        case 'map': return handleMap(data);
        default: return handleInit(data);
    }
}

function handleInit (data) {
    plg.init.src(data)
        .pipe(plg.init.setupAsync(data))
        .pipe(plg.closure(data))
        .pipe(plg.contents(data))
        .pipe(data.res);
}

function handleCombine (data) {
    plg.combine.src(data)
        .pipe(plg.combine.format(data))
        .pipe(plg.jsonp(data))
        .pipe(plg.contents(data))
        .pipe(data.res);
}

function handleMap (data) {
    plg.map.src(data)
        .pipe(plg.jsonp(data))
        .pipe(plg.contents(data))
        .pipe(data.res);
}