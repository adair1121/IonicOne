/**
 * Created by zxxk on 2017/1/16.
 */
define(['../common/jpx'],function(JPX){

  var factory = function($http,$ionicLoading){
      var action = JPX.action({
        doHttp:function(dispatch,url,data){
          console.log("In action,the doHttp() called.",url,data);
          var time = setTimeout(function(){
            clearTimeout(time);
            data['res'] = "ajax done.";
            dispatch('doHttpHandler',data);
          },1000);
        },
        getBannerData : function(dispatch,url,data){
          $ionicLoading.show();
          $http.post(url).success(function (response) {
            var canUse = response.resCode && response.resCode === 200 && response.data
            if(canUse){
              var resData = response.data.sliderList;
              dispatch('getBannerDataRes',resData);
            }
          })
        },
        getAppDetail:function(dispatch,url,data){
          $ionicLoading.show();
          $http({
            method:'POST',
            url:url,
            data:data,
            headers:{ 'Content-Type': 'application/x-www-form-urlencoded' },
            transformRequest: function(obj) {
              var str = [];
              for (var p in obj) {
                str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
              }
              return str.join("&");
            }
          }).success(function(response){
            var canUse = response.resCode && response.resCode === 200 && response.data && response.data.appInfo;
            if(canUse){
              var resData = response.data.appInfo;
              console.log(resData)
              dispatch('getAppDetailRes',resData);
            }
          })
        }
      });
      JPX.store({
        state:{
          backMsg:"",
          bannerData:[],
          appInfo:{}
        },
        mutations:{
          doHttpHandler:function(state,data){
            console.log("In doHttpHandler(),get back data===>",data);
            state.backMsg = data.res;
          },
          getBannerDataRes:function(state,data){
            state.bannerData = data
          },
          getAppDetailRes:function(state,data){
            state.appInfo = data;
          }
        }
      });
      var getter = JPX.getter({
        backMsg:function(state){
          return state.backMsg;
        },
        bannerData:function(state){
          return state.bannerData;
        },
        appInfo:function(state){
          return state.appInfo;
        }
      });
      return {
        action : action,
        getter:getter
      }
    }
  factory.$inject = ["$http","$ionicLoading"]
  return factory;
})
