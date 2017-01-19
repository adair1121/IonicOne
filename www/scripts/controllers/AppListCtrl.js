define(['app'],function (app) {
  "use strict";

  function ctrl($scope,$rootScope,AppListService,$state,$stateParams){
    // ModalService.initModal($scope);
    // $scope.pageTitle = $stateParams.type;
    $rootScope.showIcon = false;
    switch($stateParams.type){
      case "高中":
        $scope.pageTitle = "高中应用";
        break;
      case "初中":
        $scope.pageTitle = "初中应用";
        break;
      case "小学":
        $scope.pageTitle = "小学应用";
        break;
      case "学前":
        $scope.pageTitle = "学前应用";
        break;
      case "综合":
        $scope.pageTitle = "综合应用";
        break;
    }
    $scope.items = [];
    $scope.kindList = [];
    //加载更多
    $scope.loadMore = function () {
      if($scope.noMore == true){
        return ;
      }
      AppListService.getData()
        .then(function (data) {
          if(data.length == 0){
            $scope.noMore = true;
          }
          Array.prototype.push.apply($scope.kindList, data);
        }).finally(function () {
        // Stop the ion-refresher from spinning
        $scope.$broadcast('scroll.infiniteScrollComplete');
      });
    };
    $scope.itemClick = function(params){
      var event = params.event;
      if(event.target.nodeName != 'A'){
        $state.go('appDetail',{aid:params.aid,state:params.state});
      }
    };

    $scope.openApp = function(){
      alert('open app')
    }

    // $scope.popUp = function(){
    //   $scope.showAlert({title:'服务器累了，让它休息一会吧~~'})
    // }
  }
  ctrl.$inject = ["$scope","$rootScope","AppListService","$state","$stateParams"];
  app.registerController("AppListCtrl",ctrl);
  // return ctrl;
})
