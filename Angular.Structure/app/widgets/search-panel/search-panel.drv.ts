module App.Widgets {
    "use strict";

    interface ISearchPanelScope extends ng.IScope
    {
        filter: Function;
        reset: Function;
    }

    class SearchPanelController {
        static $inject = ["$log", "$scope"];

        constructor(private $log: ng.ILogService, private $scope: ISearchPanelScope) {
            
        }

        filter() {
            this.$log.debug("filter Clicked");
            this.$scope.filter();
        }

        reset() {
            this.$log.debug("reset clicked");
            this.$scope.reset();
        }
    }

    function searchPanel(): ng.IDirective {
        return {
            restrict: "E",
            templateUrl: "/app/widgets/search-panel/search-panel.tpl.html",
            transclude: true,
            scope: {
                filter: "&",
                reset: "&"
            },
            controller: SearchPanelController,
            controllerAs: "vm",
            replace: false,
            link: ($scope, element, attributes) => {
                $(element).find(".arrow-button").click(() => {
                    toggle();
                });

                $(element).find(".panel-heading").click(() => {
                    toggle();
                });

                $(element).find(".btn-primary").click(() => {
                    toggle();
                });

                $(element).find(".btn-default").click(() => {
                    $(element).find("form").trigger("reset");
                });
            }

        };

        function toggle() {
            console.log("clicked");
            if ($("#arrow").hasClass("glyphicon-chevron-up")) {
                $("#arrow").addClass("glyphicon-chevron-down");
                $("#arrow").removeClass("glyphicon-chevron-up");
                $(".panel-body").slideDown();
            } else {
                $("#arrow").addClass("glyphicon-chevron-up");
                $("#arrow").removeClass("glyphicon-chevron-down");
                $(".panel-body").slideUp();
            }
        }
    }

    angular.module("app.widgets").directive("searchPanel", searchPanel);
}