define([],function(){
  'use strict';
  var direc = function(){
    var obj = {
      restrict:'E',
      template:'<ion-slide ng-repeat="item in banner" style="width:100%;" on-slide-changed="slideHasChanged($index)"><div class="box"><a href="{{item.url}}" style="display: block;width: 100%;height: 140px;" title="{{item.title}}"><img image-lazy-src="{{item.imgURL}}" style="height:100%;width:100%;position: relative;"></a> </div> </ion-slide>',
      replace:true,
    }
    return obj;
  }
  return direc;
})
