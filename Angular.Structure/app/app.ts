(() => {

    angular.module("app", [
        "ui.router",

        "app.main",
        "app.student"

    ]).config(config);

    config.$inject = ["$urlRouterProvider"];

    function config($urlRouterProvider: angular.ui.IUrlRouterProvider) {
        $urlRouterProvider.otherwise("/");
    }
})()