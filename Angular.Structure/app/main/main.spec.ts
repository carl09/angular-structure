/// <reference path="main.d.ts"/>
'use strict';

describe('Main Module', () => {

    var $state: angular.ui.IStateService;
    var $rootScope: ng.IRootScopeService;
    var $location: ng.ILocationService;

    beforeEach(() => {
        angular.mock.module('app.main');
    
        inject((
            _$rootScope_: ng.IRootScopeService,
            _$state_: angular.ui.IStateService,
            $templateCache: ng.ITemplateCacheService,
            _$location_: ng.ILocationService) =>
        {
            $rootScope = _$rootScope_;
            $state = _$state_;
            $location = _$location_;

            $templateCache.put('/app/main/home/home.tpl.html', '');
            $templateCache.put('/app/main/about/about.tpl.html', '');
        });
    });


    it('Open Home Page From State', () => {
        $state.go("home");
        $rootScope.$digest();
        expect($state.current.name).toBe("home");
    });

    //it('Open Edit Page From Url', () => {
    //    $location.url("/product/edit/15");

    //    $rootScope.$digest();

    //    expect($state.current.name).toBe("product-edit");
    //    expect($state.params["id"]).toBe("15");
    //});

    it('Open About Page From State', () => {
        $state.go("about");
        $rootScope.$digest();
        expect($state.current.name).toBe("about");
    });

    it('Open About Page From Url', () => {
        $location.url("/about");
        $rootScope.$digest();
        expect($state.current.name).toBe("about");
    });

});