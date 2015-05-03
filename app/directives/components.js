/**
 * Created by arnold.krumins on 30/04/2015.
 */
app.directive('components',function(){

   return{
     restrict:'EA',
       replace:false,
      scope:{ items:'='},
      template:'<ul>' +
          '<li ng-repeat="item in items" item="item" >' +
             '<div class="advertiser">' +
               '<i class="fa fa-circle-o"></i>' +
               '<h5><i class="fa fa-newspaper-o"></i> {{ item.name }} </h5>' +
//                    '<div class="stats">' +
//                        '<h5><i class="fa fa-bar-chart"></i>Setting One  <span>{{ item.settingone }}%</span></h5>'+
//                        '<h5><i class="fa fa-bar-chart"></i>Setting Two  <span>{{ item.settingtwo }}%</span></h5>'+
//                    '</div>' +
             '</div>' +
           '</li>' +
          '</ul>',
      link: function(scope,element, attrs){

      }
   }
});