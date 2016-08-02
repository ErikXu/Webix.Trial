define(["locale"], function (_) {
    var collection = new webix.DataCollection({
        data: [
            { id: 1, title: _("stock"), year: 1994, votes: 678790, rating: 9.2, rank: 1 },
            { id: 2, title: _("stock"), year: 1972, votes: 511495, rating: 9.2, rank: 2 },
            { id: 3, title: _("stock"), year: 1974, votes: 319352, rating: 9.0, rank: 3 },
            { id: 4, title: _("stock"), year: 1966, votes: 213030, rating: 8.9, rank: 4 },
            { id: 5, title: _("stock"), year: 1964, votes: 533848, rating: 8.9, rank: 5 },
            { id: 6, title: _("stock"), year: 1957, votes: 164558, rating: 8.9, rank: 6 }
        ]
    });

    var ui = {
        view: "datatable", autoConfig: true
    };

    return {
        $ui: ui,
        $oninit: function (view) {
            view.parse(collection);
        }
    };

});
