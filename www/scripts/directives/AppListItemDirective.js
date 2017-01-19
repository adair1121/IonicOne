define([],function(){
  'use strict';
  var direc = function(){
    var obj = {
      restrict:'E',
      template:'<div class="item item-thumbnail-left item-button-right" ng-click="itemClick({aid:item.id,event:$event,state:item.btnType});"><img  style="width: 50px;height: 50px;" image-lazy-src={{item.icon}} alt=""  ><h2 class="app-title"><span  ng-bind="item.name"></span><em></em></h2><p  class="app-desc" >{{item.intro}}</p><a ng-if="item.btnType===1" class="down-load" href="item.downUrl" >下载</a><a ng-if="item.btnType===2" class="down-load" href="item.downUrl" >更新</a><a ng-if="item.btnType===3" class="down-load" ng-click="openApp()">打开</a></div>',
      replace:true
    }
    return obj;
  }
  return direc;
})
