define(function(require){
  'use strict';
  var directives = angular.module('starter.directives',[]);
  directives.directive('banner',require('directives/BannerDirective'));
  directives.directive('appListItem',require('directives/AppListItemDirective'));
})
