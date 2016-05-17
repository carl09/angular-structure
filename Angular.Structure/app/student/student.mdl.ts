(() => {

    angular.module("app.student", [
        "ui.router",
        "ngMessages",
        "toastr",
        "kendo.directives",

        "app.core",
        "app.widgets"

    ]).config(config);

    config.$inject = ["$stateProvider"];

    function config($stateProvider: angular.ui.IStateProvider) {

        $stateProvider
            .state("student-list",
            {
                url: "/students",
                templateUrl: "/app/student/student-list/student-list.tpl.html",
                controller: "app.student.studentListController",
                controllerAs: "vm"
            })
            .state("student-edit",
            {
                url: "/student/{id}",
                templateUrl: "/app/student/student-edit/student-edit.tpl.html",
                controller: "app.student.studentEditController",
                controllerAs: "vm"
            });
    }

})()