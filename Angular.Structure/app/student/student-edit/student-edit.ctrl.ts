module App.Student {

    class StudentEditController {
        static $inject = ["$log", "$state", "app.student.studentService", "toastr"];

        student: Angular.Structure.Service.ViewModels.StudentDetailItem;
        studentId: number;

        constructor(private $log: ng.ILogService, private $state: angular.ui.IStateService, private studentService: StudentService, private toastr: ngtoaster.IToasterService) {
            $log.debug("Opened Student Edit Controller");

            $log.debug(`Student Id: ${this.$state.params["id"]}`);

            this.student = null;
            this.studentId = this.$state.params["id"];
            this.studentService.getStudent(this.studentId)
                .then(stu => {
                    this.student = stu;
                    this.$log.debug(stu);
                }).catch(e => {
                    this.$log.error(e);
                    this.toastr.error("Error loading Student");
                });

        }

        save() {
            this.toastr.error("Sorry not yet working");
        }

    }

    angular.module("app.student").controller("app.student.studentEditController", StudentEditController);
}