module App.Student {

    export class StudentService {
        static $inject = ["$http", "$q"];

        constructor(private $http: ng.IHttpService, private $q: ng.IQService) {

        }

        getStudent(studentId: number): ng.IPromise<Angular.Structure.Service.ViewModels.StudentDetailItem> {
            var defer = this.$q.defer();

            this.$http.get(`/api/student/${studentId}`)
                .then(resp => {
                    defer.resolve(resp.data);
                }).catch(e => {
                    defer.reject(e);
                });

            return defer.promise;
        }

    }

    angular.module("app.student").service("app.student.studentService", StudentService);

}