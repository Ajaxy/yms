
var ym = {"project":{"namespace":"myApp","jsonpPrefix":"","loadLimit":500},"env":{}};

ym.modules = global['myApp'].modules;

ym.project.initialMap = [
	[
		"myPlugin.A",
		"0a",
		"=A==util.defineClass="
	],
	[
		"myPlugin.B",
		"0b",
		"0a=util.defineClass="
	]
];

function setupAsync (env) {
ym.env = env;

ym.modules.require(['system.ModuleLoader'], function (ModuleLoader) {
    (new ModuleLoader(ym.project.initialMap, ym.env.server)).defineAll();
});

}
