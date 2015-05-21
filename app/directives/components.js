/**
 * Created by arnold.krumins on 30/04/2015.
 */
app.directive('components' ,['$rootScope','$timeout',function($rootScope,$timeout){

   return{
     restrict:'EA',
       replace:false,
      scope:{ items:'=', selectall:'='},
      template:'\
      <button>{{ selectall ? \'Deselect All\' : \'Select All\' }}</button>\
          <ul>\
          <li ng-repeat="item in items" item="item" >\
             <div class="advertiser">\
               <i class="selected-item fa fa-circle-o"></i>\
                 <h5><i class="fa fa-newspaper-o"></i> {{ item.name }} </h5>\
                    <div class="stats">\
                        <h6><i class="fa fa-line-chart"></i>No User Matching Threshold <span>{{ item.settingone }}%</span></h6>\
                        <h6><i class="fa fa-line-chart"></i>User Matching  <span>{{ item.settingtwo }}%</span></h6>\
                        <h6><i class="fa fa-exchange"></i>Auction Type  <span>{{ item.settingthree }}</span></h6>\
                        <h6><i class="fa fa-globe"></i>Geofilter  <span>{{ item.settingfour }}</span></h6>\
                    </div>\
             </div>\
           </li>\
          </ul>',
      link: function(scope,element, attrs){



          element.find('button').bind('click',function(){

              $timeout(function(){
                  scope.$apply(function(){
                      scope.selectall = !scope.selectall;
                      if(scope.selectall ){
                          $('.selected-item').removeClass("fa-circle-o").addClass("fa-dot-circle-o");
                          $rootScope.$broadcast('select-all-buyers',scope.items)
                      }
                      else{
                          $('.selected-item').removeClass("fa-dot-circle-o").addClass("fa-circle-o");
                          $rootScope.$broadcast('deselect-all-buyers',scope.items);
                      }

                  });

              },0);

          });

      }
   }
}]);