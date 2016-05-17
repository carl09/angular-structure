module App.Main {
    "use strict";

    class HomeController {
        static $inject = ["$log"];

        constructor(private $log: ng.ILogService){
            $log.debug("Opened Home Controller");
        }
    }

    angular.module("app.main").controller("app.main.homeController", HomeController);
}