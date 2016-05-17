module App.Student {

    function studentCodeValidator($http: ng.IHttpService): ng.IDirective {
        return {
            require: "ngModel",
            link: ($scope, element, attributes, ngModel: ng.INgModelController) => {
                var studentId = attributes.studentCodeValidator;

                function setAsLoading(bool : boolean) {
                    ngModel.$setValidity("checking", !bool);
                }

                function setAsAvailable(bool : boolean) {
                    ngModel.$setValidity("inUse", bool);
                }

                ngModel.$parsers.push((value : string) => {

                    if (!value || value.length === 0 || ngModel.$invalid)
                        return null;

                    setAsLoading(true);
                    setAsAvailable(false);

                    $http.get(`/api/student/checkStudentCode/${studentId}?studentcode=${value}`)
                        .success(() => {
                            setAsLoading(false);
                            setAsAvailable(true);
                        })
                        .error(() => {
                            setAsLoading(false);
                            setAsAvailable(false);
                        });

                    return value;
                });
            }
        };
    }

    studentCodeValidator.$inject = ["$http"];

    angular.module("app.student").directive("studentCodeValidator", studentCodeValidator);
}