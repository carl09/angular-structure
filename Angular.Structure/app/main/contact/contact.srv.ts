module App.Main {
    
    export class ContactService {
        static $inject = ["$http", "$q"];

        constructor(private $http: ng.IHttpService, private $q: ng.IQService) {
            
        }

        sendMessage(name: string, email: string, message: string): ng.IPromise<boolean> {

            var deffer = this.$q.defer();

            this.$http.post("/api/contact/", {
                name: name,
                email: email,
                message: message
            }).then(resp => {
                deffer.resolve(resp);
            }).catch(e => {
                deffer.reject(e);
            });

            return deffer.promise;

        }

    }

    angular.module("app.main").service("app.main.contactService", ContactService);

}