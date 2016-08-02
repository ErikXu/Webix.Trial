define(["libs/webix-jet/plugins/locale", "app", "locale"], function (locale, app, _) {

    var header = {
        type: "header", template: app.config.name
    };

    var menu = {
        view: "menu",
        id: "main:menu",
        width: 180,
        layout: "y",
        select: true,
        template: "<span class='webix_icon #icon#'></span> #value# ",
        data: [
			{ value: _("stock"), id: "stock", href: "#!/main/stock.index", icon: "fa fa-envelope-o" },
			{ value: _("fund"), id: "fund", href: "#!/main/fund.index", icon: "fa fa-briefcase" }
        ]
    };

    var ui = {
        type: "line",
        cols: [
			{ type: "clean", css: "app-left-panel", padding: 10, margin: 20, borderless: true, rows: [header, menu] },
			{ rows: [{ view: "button", id: "my_button", value: _("language"), inputWidth: 100, click: function () { locale.setLang(_("languageKey")); } }, { type: "clean", css: "app-right-panel", padding: 10, rows: [{ $subview: true }] }] }
        ]
    };


    return {
        $ui: ui,
        $menu: "main:menu"
    };
});
