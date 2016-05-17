(() => {

    angular.module("app.main", [
        "ui.router",
        "ngMessages",
        "toastr"
    ]).config(config);

    config.$inject = ["$stateProvider"];

    function config($stateProvider: angular.ui.IStateProvider) {

        $stateProvider
            .state("home",
            {
                url: "/",
                templateUrl: "/app/main/home/home.tpl.html",
                controller: "app.main.homeController",
                controllerAs: "vm"
            })
            .state("about",
            {
                url: "/about",
                templateUrl: "/app/main/about/about.tpl.html",
                controller: "app.main.aboutController",
                controllerAs: "vm"
            })
            .state("contact",
            {
                url: "/contact",
                templateUrl: "/app/main/contact/contact.tpl.html",
                controller: "app.main.contactController",
                controllerAs: "vm"
            });
    }

})()