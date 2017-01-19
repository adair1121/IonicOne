define([],function(){
  'use strict';

  var factory = function($http,$timeout,$q,AjaxService,$ionicLoading){
    function getHotGameBanner(){
      var deferred = $q.defer();
      AjaxService.action.getBannerData("http://121.41.121.8:88/appmarket/carousel",{});
      $timeout(function () {
        // success response!
        var data = AjaxService.getter.bannerData;
        deferred.resolve(data);
        $ionicLoading.hide();
      }, 1000);

      return deferred.promise;
      // var deferred = $q.defer();
      // var data = [];
      // var url = "./data.json";
      // $http.post(url).success(function (response) {
      //   var resData = response.listData;
      //   for(var key = 0;key < resData.length;key++){
      //     data.push(resData[key].img);
      //   }
      //   deferred.resolve(data);
      // }).error(function (error) {
      //   console.log("this is error:"+error);
      // });
      //
      // return deferred.promise;
    }
    return {
      getHotGameBanner:getHotGameBanner
    }
  }
  factory.$inject = ["$http","$timeout","$q","AjaxService","$ionicLoading"];
  return factory;
})
