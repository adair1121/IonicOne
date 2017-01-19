define([],function(){
  'use strict';
  var factory = function ($ionicPopup) {
    var opt = {};
    function applyOption(option){
      opt = option;
      opt.title = option.title&&typeof option.title==='string'?option.title:'提示标题';
      opt.sureHandler = option.sureHandler?option.sureHandler:null;
      opt.cancleHandler = option.cancleHandler?option.cancleHandler:null;
    }
    function initPopUp($scope){
      //  confirm 对话框
      /**
       * @param option
       * {title,template,sureHandler,cancleHandler}
       */
      $scope.showConfirm = function(option) {
        applyOption(option);
        var confirmPopup = $ionicPopup.confirm({
          title: opt.title,
          // template: opt.template
        });
        confirmPopup.then(function(res) {
          if(res) {
            if(opt.sureHandler != null){
              opt.sureHandler();
            }
          } else {
            if(opt.cancleHandler !=null){
              opt.cancleHandler();
            }
          }
        });
      };

      /**
       * alert（警告） 对话框
       * @param option
       * {title,template,callback}
       */
      $scope.showAlert = function(option) {
        applyOption(option)
        var alertPopup = $ionicPopup.alert({
          title: opt.title
          // template: opt.template
        });
        alertPopup.then(function(res) {
          if(opt.cancleHandler){
            opt.cancleHandler();
          }
        });
      };
    }
    return {
      initPopUp:initPopUp
    }
  }
  factory.$inject = ["$ionicPopup"];
  return factory
})
