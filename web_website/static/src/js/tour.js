// Copyright 2018 Ivan Yelizariev <https://it-projects.info/team/yelizariev>
// License MIT (https://opensource.org/licenses/MIT).
odoo.define("web_website.tour", function(require) {
    "use strict";

    var tour = require("web_tour.tour");
    var base = require("web_editor.base");

    tour.register(
        "web_website.tour",
        {
            url: "/web",
            test: true,
            wait_for: base.ready(),
        },
        [
            {
                content: "Toggle Website Switcher",
                trigger: ".navbar-right .o_switch_website_menu > a",
            },
            {
                content: "Click Website localhost",
                trigger: ".o_switch_website_menu a[data-website-id=1]",
            },
            {
                content: "Wait when page is reloaded",
                trigger: ".o_switch_website_menu > a:contains(Website localhost)",
            },
        ]
    );
});
