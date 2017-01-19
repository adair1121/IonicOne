define(['app','../common/BaseMode'],function (app,BaseMode) {
  "use strict";

  function ctrl($scope,$rootScope,$stateParams,AppDetailService){
    $scope.btnType = Number($stateParams.state);
    $rootScope.showIcon = false;
    var oFragmeng = document.createDocumentFragment();
    AppDetailService.getData().then(function(data){
      $scope.appName = data.appName;
      $scope.logoPath = data.logoPath;
      $scope.size = data.size;
      $scope.dTimes = data.dTimes;
      $scope.download = data.download;
      $scope.version = data.version;
      $scope.time = BaseMode.formatTime(data.time,true);

      var p = document.createElement('p');
      p.innerHTML = data.content;
      oFragmeng.appendChild(p)
      document.getElementsByClassName('app-intro')[0].appendChild(oFragmeng);
    })
    $scope.openApp = function(){
      alert("打开app");
    }
  }
  ctrl.$inject = ["$scope","$rootScope",'$stateParams',"AppDetailService"];
  app.registerController("AppDetailCtrl",ctrl);
  // return ctrl;
})
