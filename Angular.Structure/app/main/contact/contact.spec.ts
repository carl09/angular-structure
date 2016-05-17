/// <reference path="../main.d.ts"/>
'use strict';

describe('Contact Controller', () => {

    var ctrl: App.Main.ContactController;
    var $rootScope: ng.IRootScopeService;
    var $location: ng.ILocationService;

    //var mockService: ContactServiceMock;

    var output: string;

    var mockService = {
        

        sendMessage(name: string, email: string, message: string) {
            output = name;
        }

    };

    beforeEach(() => {
        angular.mock.module("app.main");

        inject((
            _$rootScope_: ng.IRootScopeService,
            $controller: ng.IControllerService,
            $templateCache: ng.ITemplateCacheService,
            _$location_: ng.ILocationService) => {
            $rootScope = _$rootScope_;
            $location = _$location_;
            ctrl = $controller<App.Main.ContactController>("app.main.contactController", { $log: null, contactService: mockService, toastr: null });
            
                //ctrl = new App.Main.ContactController(null, mockService, null);

            $templateCache.put("app/main/contact/contact.tpl.html", "");

        });
    });


    it("Can send email", () => {

        ctrl.name = "bob";
        expect(ctrl.send());

        spyOn(mockService, 'sendMessage').and.callThrough();

        expect(output).toBe("bob");

    });

});