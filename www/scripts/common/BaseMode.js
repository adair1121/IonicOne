define([],function(){
  "use strict";
  // var ctx = window.option.ctx || 'http://'+window.location.host;
  // var static_url = window.option.static_url || 'http://www.jiaoping.com';
  //  var optionBase = {
  //    CTX:ctx,
  //    STATIC_URL:static_url
  //  }
  //  var HTTP_INTERFACE = {
  //    GET_SLIDER_DATA:ctx+'/carousel',
  //    GET_APP_INFO:ctx+'/app/appinfo'
  //  }
  //  var ROUTE_PATH = {
  //    SENIOR:'senior',
  //    JUNIOR:'junior',
  //    PRIMARY:'primary',
  //    PRESCHOOL:'preschool',
  //    ALL:'all'
  //  }
  var  formatTime = function(time,limit){
    var date=new Date(time);
    if (!time){return '';}
    var y = date.getFullYear();
    var month = date.getMonth()+1;
    var d = date.getDate();
    var h = date.getHours();
    var min = date.getMinutes();
    var s = date.getSeconds();
    if(limit){
      return [y,(month<10?('0'+month):month),(d<10?('0'+d):d)].join('-');
    }
    return y+'-'+(month<10?('0'+month):month)+'-'+(d<10?('0'+d):d)+" "+(h<10?('0'+h):h)+":"+(min<10?('0'+min):min)+":"+(s<10?('0'+s):s);
  };
   return{
     // optionBase:optionBase,
     // ROUTE_PATH:ROUTE_PATH,
     // HTTP_INTERFACE:HTTP_INTERFACE,
     formatTime:formatTime
   }
})
