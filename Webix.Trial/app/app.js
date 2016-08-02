define([
	"libs/webix-jet/core",
    "libs/webix-jet/plugins/locale",
	"libs/webix-jet/plugins/menu"
], function (core, locale, menu) {

	//configuration
	var app = core.create({
		id:			"cem",
		name:		"CEM",
		version:	"0.1.0",
		debug:		true,
		start:		"/main/stock.index"
	});

	app.use(locale, { lang: "en" });
	app.use(menu);

	return app;
});