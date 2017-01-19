define([],function(){
  'use strict';

  var factory = function($http,$timeout,$q){
    function getData(){
      var deferred = $q.defer();
      var obj = {"data":{"kindList":[{"title":"高考必背", "kindId":123, "appList":[{"name":"捕鱼", "id":"456", "icon":"http://test.lbwan.com/res/upload/images/hallgame/icon/pyico.png", "intro":"百度高考很难用", "download":"http://www.jiaoping.com", "btnType":1}, {"name":"大侠归来", "id":"123", "icon":"http://test.lbwan.com/res/upload/images/game/icon/p19v7rkhr61p6fqvuo451t6ru8lf.png", "intro":"百度高考很难用", "download":"http://www.jiaoping.com", "btnType":2}, {"name":"摩尔战绩", "id":"423", "icon":"http://test.lbwan.com/res/upload/hall/access/2icon.png", "intro":"百度高考很难用", "download":"http://www.jiaoping.com", "btnType":3}, {"name":"愚公移山", "id":"546", "icon":"http://test.lbwan.com/res/upload/hall/access/1icon.png", "intro":"百度高考很难用", "download":"http://www.jiaoping.com", "btnType":2}, {"name":"战争学院", "id":"111", "icon":"http://test.lbwan.com/res/upload/images/hallgame/icon/zzxy_icon.png", "intro":"百度高考很难用", "download":"http://www.jiaoping.com", "btnType":3}]}, {"title":"高考作文", "kindId":234, "appList":[{"name":"罗斯魔音", "id":"222", "icon":"http://test.lbwan.com/res/upload/images/game/icon/p19qsbm9uiud25s516ksovebmdd.png", "intro":"百度高考很难用", "download":"http://www.jiaoping.com", "btnType":2}, {"name":"猪猪侠", "id":"365", "icon":"http://test.lbwan.com/res/upload/images/game/icon/p19v7rkhr61p6fqvuo451t6ru8lf.png", "intro":"百度高考很难用", "download":"http://www.jiaoping.com", "btnType":3}, {"name":"疯狂斗牛场", "id":"365", "icon":"http://test.lbwan.com/res/upload/images/game/icon/p19s18nueat6j4iekd82ppvnkd.png", "intro":"百度高考很难用", "download":"http://www.jiaoping.com", "btnType":1}, {"name":"泵跑吧,女生", "id":"489", "icon":"http://test.lbwan.com/res/upload/images/game/icon/p19sfqu0171gb51epm1c6l1crkincd.png", "intro":"百度高考很难用", "download":"http://www.jiaoping.com", "btnType":3}, {"name":"我欲封天", "id":"4578", "icon":"http://test.lbwan.com/res/upload/images/game/icon/p19t29q4r4at2jjk1g267gmr68d.png", "intro":"百度高考很难用", "download":"http://www.jiaoping.com", "btnType":2}]}, {"title":"高考志愿", "kindId":789, "appList":[{"name":"多了斗牛", "id":"5462", "icon":"http://test.lbwan.com/res/upload/images/game/icon/p19sspi126nvq1iuqjgj1thu7kcd.png", "intro":"百度高考很难用", "download":"http://www.jiaoping.com", "btnType":1}, {"name":"消你妹", "id":"7982", "icon":"http://test.lbwan.com/res/upload/images/game/icon/p19tn1q2bjkid1bubq2c1i841mmme.png", "intro":"百度高考很难用", "download":"http://www.jiaoping.com", "btnType":2}, {"name":"召唤师学院", "id":"423", "icon":"http://test.lbwan.com/res/upload/images/game/icon/p19vpq65of9r113f91eni1rbj1sq5f.png", "intro":"百度高考很难用", "download":"http://www.jiaoping.com", "btnType":2}, {"name":"勇闯侏罗纪", "id":"8554", "icon":"http://test.lbwan.com/res/upload/images/game/icon/p1a2ttd9e81iajhl51k3s147j1hc8f.png", "intro":"百度高考很难用", "download":"http://www.jiaoping.com", "btnType":3}, {"name":"大富翁", "id":"111", "icon":"http://test.lbwan.com/res/upload/images/game/icon/p1a1bops8m1s6f14rf1tfhkbnb3f.png", "intro":"百度高考很难用", "download":"http://www.jiaoping.com", "btnType":1}]}]}}

      var data = obj.data.kindList;
      // var url = "./list.json"
      // $http.jsonp(url).success(function (response) {
      //   console.log(response)
      //   // data = response.data.kindList;
      // }).error(function (error) {
      //   console.log("this is error:"+error);
      // });

      $timeout(function () {
        // success response!
        deferred.resolve(data);
      }, 1000);
      return deferred.promise;
    }
    return {
      getData:getData
    }
  }
  factory.$inject = ["$http","$timeout","$q"];
  return factory;
})
