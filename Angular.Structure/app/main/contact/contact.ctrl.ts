module App.Main {
    "use strict";

    class ContactController {
        static $inject = ["$log", "app.main.contactService", "toastr"];

        name: string = "";
        email: string = "";
        message: string = "";

        constructor(private $log: ng.ILogService, private contactService: ContactService, private toastr: ngtoaster.IToasterService) {
            $log.debug("Opened Contact Controller");
        }

        send() : void {
            this.contactService.sendMessage(this.name, this.email, this.message).then(resp => {
                this.$log.debug(resp);
                this.toastr.success("Message Sent");
            }).catch(() => {
                this.toastr.error("An Error happened");
            });
        }
    }

    angular.module("app.main").controller("app.main.contactController", ContactController);
}