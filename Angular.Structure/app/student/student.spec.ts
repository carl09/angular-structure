/// <reference path="student.d.ts"/>
'use strict';

describe('Student Module', () => {

    var $state: angular.ui.IStateService;
    var $rootScope: ng.IRootScopeService;
    var $location: ng.ILocationService;

    beforeEach(() => {
        angular.mock.module('app.student');
    
        inject((
            _$rootScope_: ng.IRootScopeService,
            _$state_: angular.ui.IStateService,
            $templateCache: ng.ITemplateCacheService,
            _$location_: ng.ILocationService) =>
        {
            $rootScope = _$rootScope_;
            $state = _$state_;
            $location = _$location_;

            $templateCache.put('/app/student/student-list/student-list.tpl.html', '');
            $templateCache.put('/app/student/student-edit/student-edit.tpl.html', '');
        });
    });


    it('Student Edit Page From Url', () => {
        $location.url("/student/edit/15");

        $rootScope.$digest();

        expect($state.current.name).toBe("student-edit");
        expect($state.params["id"]).toBe("15");
    });

});