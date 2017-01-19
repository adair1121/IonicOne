// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
define(["services/services",'controllers/controllers','directives/directives'],function(){
    var app = angular.module('starter', ['ionic','starter.controllers','starter.services','starter.directives','ionic-img-lazy-load']);

    app.run(function($ionicPlatform) {
      $ionicPlatform.ready(function() {
        if(window.cordova && window.cordova.plugins.Keyboard) {
          // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
          // for form inputs)
          cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

          // Don't remove this line unless you know what you are doing. It stops the viewport
          // from snapping when text inputs are focused. Ionic handles this internally for
          // a much nicer keyboard experience.
          cordova.plugins.Keyboard.disableScroll(true);
        }
        if(window.StatusBar) {
          StatusBar.styleDefault();
        }
      });
    })
    app.run(function ($location,$rootScope) {
      //路由监听事件
      $rootScope.$on('$stateChangeStart',
        function(event, toState) {
          if(toState.name === 'home'){
            $rootScope.showIcon = true;
          }else{
            $rootScope.showIcon = false;
          }
        })
    })
    .config(function($stateProvider,$urlRouterProvider,$controllerProvider) {
      app.registerController = $controllerProvider.register;
      app.loadControllerJs = function(controllerJs){
        return function ($rootScope,$q) {
          var def = $q.defer();
          var deps = [];
          angular.isArray(controllerJs) ? (deps = controllerJs) : deps.push(controllerJs);
          require(deps,function () {
            $rootScope.$apply(function(){
              def.resolve();
            });
          });
          return def.promise;
        }
      }
      $stateProvider
        // .state('tabs', {
        //   url: "/tab",
        //   abstract: true,
        //   templateUrl: "templates/tab.html"
        // })
        .state('home', {
          url: "/home",
          templateUrl: "templates/content.html",
          controller:"HotGameCtrl",
          resolve:{
            deps:app.loadControllerJs('./controllers/HotGameCtrl')
          }
          // views: {
          //   'home-tab': {
          //     templateUrl: "templates/content.html",
          //     controller:"HotGameCtrl",
          //     resolve:{
          //       deps:app.loadControllerJs('./controllers/HotGameCtrl')
          //     }
          //   }
          // }
        })
        // .state('tabs.contact',{
        //   url:'/contact',
        //   views:{
        //     "contact-tab":{
        //       templateUrl:"templates/contact.html"
        //     }
        //   }
        // })
        // .state('tabs.about',{
        //   url:'/about',
        //   views:{
        //     "about-tab":{
        //       templateUrl:"templates/about.html",
        //     }
        //   }
        // })
        .state('appList',{
          url:'/appList/:type',
          templateUrl: "templates/appList.html",
          controller:"AppListCtrl",
          resolve:{
            deps:app.loadControllerJs('./controllers/AppListCtrl')
          }
        })
        .state('appDetail',{
          url:'/appDetail/:aid/:state',
          templateUrl: "templates/appDetail.html",
          controller:"AppDetailCtrl",
          resolve:{
            deps:app.loadControllerJs('./controllers/AppDetailCtrl')
          }
        })
      $urlRouterProvider.otherwise("/home");
    })

  return app;
})





