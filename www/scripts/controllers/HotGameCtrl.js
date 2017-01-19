define(['app'],function (app) {
  "use strict";

  function ctrl($scope,$rootScope,HotGameService,$ionicSlideBoxDelegate,$state){
    $scope.banner = [];
    // ModalService.initModal($scope);
    // PopUpServices.initPopUp($scope);
    $scope.homeTitle = "";
    $rootScope.showIcon = true;
    HotGameService.getHotGameBanner().then(function(data){
      if(!data || data.length ===0){
        return;
      }else{
        $scope.banner = data;
        $ionicSlideBoxDelegate.update();
      }
    })
    $scope.navClick = function(type){
      $state.go('appList',{type:type})
    };
  }
  ctrl.$inject = ["$scope","$rootScope","HotGameService","$ionicSlideBoxDelegate","$state"];
  app.registerController("HotGameCtrl",ctrl);
  // return ctrl;
})
