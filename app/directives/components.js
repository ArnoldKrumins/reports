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
               '<i id="selected-item" class="fa fa-circle-o"></i>' +
               '<h5><i class="fa fa-newspaper-o"></i> {{ item.name }} </h5>' +
                    '<div class="stats">' +
                        '<h6><i class="fa fa-line-chart"></i>No User Matching Threshold <span>{{ item.settingone }}%</span></h6>'+
                        '<h6><i class="fa fa-line-chart"></i>User Matching  <span>{{ item.settingtwo }}%</span></h6>'+
                        '<h6><i class="fa fa-exchange"></i>Auction Type  <span>{{ item.settingthree }}</span></h6>'+
                        '<h6><i class="fa fa-globe"></i>Geofilter  <span>{{ item.settingfour }}</span></h6>'+
                    '</div>' +
             '</div>' +
           '</li>' +
          '</ul>',
      link: function(scope,element, attrs){

      }
   }
});