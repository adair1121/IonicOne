define(function(require){
  "use strict";
  var services = angular.module("starter.services",[]);
  services.factory("HotGameService",require('services/HotGameService'));
  services.factory("ModalService",require('services/ModalService'));
  services.factory("PopUpServices",require('services/PopUpServices'));
  services.factory('AppListService',require('services/AppListService'));
  services.factory('AppDetailService',require('services/AppDetailService'));
  services.factory('AjaxService',require('services/AjaxService'));
  return services;
})
