define([],function(){
  'use strict';

  var factory = function($http,$timeout,$q,AjaxService,$ionicLoading){
    function getData(){
      var deferred = $q.defer();
      AjaxService.action.getAppDetail("http://121.41.121.8:88/appmarket/app/appinfo",{appId:'1375'});
      $timeout(function () {
        // success response!
        var data = AjaxService.getter.appInfo;
        deferred.resolve(data);
        $ionicLoading.hide();
      }, 1000);

      return deferred.promise;

    }
    return {
      getData:getData
    }
  }
  factory.$inject = ["$http","$timeout","$q","AjaxService","$ionicLoading"];
  return factory;
})
