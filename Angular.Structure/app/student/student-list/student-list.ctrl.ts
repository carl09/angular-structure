module App.Student {
    "use strict";

    class StudentListController {
        static $inject = ["$log", "app.core.kendoService", "$location", "toastr"];

        gridOptions: kendo.ui.GridOptions;
        studentGrid: kendo.ui.Grid;

        studentCode = "";
        firstName = "";
        lastname = "";

        constructor(private $log: ng.ILogService, kendoService: Core.KendoService, private $location: ng.ILocationService, private toastr: ngtoaster.IToasterService) {
            $log.debug("Opened Products Controller");

            var cols: Array<kendo.ui.GridColumn> = [
                {
                    field: "studentCode",
                    title: "Student Code",
                    template: "<a href='javascript:void(0)' ng-click='vm.openStudent(#=studentId#)' title='View Student Details'>#=studentCode#</a>"
                },
                {
                    field: "firstName",
                    title: "First Name"
                },
                {
                    field: "lastName",
                    title: "Last Name"
                }
            ];

            this.gridOptions = kendoService.getDefaultGridOptions(cols);
            this.gridOptions.dataSource = kendoService.createDataSource("/api/student/kendo", () => this.getCritera());
        }

        getCritera(): Angular.Structure.Service.ViewModels.StudentCriteria {
            return {
                studentCode: this.studentCode,
                firstName: this.firstName,
                lastName: this.lastname
            };
        }

        openStudent(studentId: number): void {
            this.$location.url(`/student/${studentId}`);
        }

        search() {
            this.$log.debug("search Clicked");
            this.studentGrid.dataSource.read();
        }

        reset() {
            this.$log.debug("reset called");

            this.studentCode = null;
            this.firstName = null;

            this.studentGrid.dataSource.read();
        }

        add() {
            this.toastr.error("Sorry not working yet");
        }
    }

    angular.module("app.student").controller("app.student.studentListController", StudentListController);
}