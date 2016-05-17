module App.Main {
    "use strict";

    class AboutController {
        static $inject = ["$log"];

        constructor(private $log: ng.ILogService) {
            $log.debug("Opened About Controller");
        }
    }

    angular.module("app.main").controller("app.main.aboutController", AboutController);
}