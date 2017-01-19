define(['./app'],function(app){
  angular.element(document).ready(function(){
    console.log("bootstrap rady");

    var startApp = function () {
      angular.bootstrap(document,[app.name]);
    }

    var onDeviceReady = function () {
      console.log("on deviceready");

      angular.element().ready(function(){
        startApp();
      });
    }

    if(typeof cordova === "undefined"){
      startApp();
    }else{
      document.addEventListener('deviceready',onDeviceReady,false);
    }
  });
})
