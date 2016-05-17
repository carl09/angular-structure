module App.Widgets {
"use strict";

    function listPageActionBar() : ng.IDirective {
        return {
            restrict: "E",
            templateUrl: "/app/widgets/list-page-action-bar/list-page-action-bar.tpl.html",
            transclude: true,
            scope: {
                
            },
            replace: false
            
        };
    }

    angular.module("app.widgets").directive("listPageActionBar", listPageActionBar);
}