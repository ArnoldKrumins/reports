/**
 * Created by akrumins on 15/05/2015.
 */
app.directive('category',['$rootScope','$timeout', function($rootScope,$timeout){

    return{
        restrict:'EA',
        scope:true,
        scope:{category:'=category'},
        template:'<span class="category-name" ng-class="{\'indent\':category.ParentId !== null,\'category-header\':category.ParentId === null,\'selected\':category.Selected}"  >{{ category.Category }}</span>\
                      <span class="category-buttons">\
                           <button ng-disabled="category.Selected" ng-click="approve()"><i class="fa fa-thumbs-o-up"></i></button>\
                           <button ng-disabled="category.Selected" ng-click="reject()"><i class="fa fa-thumbs-o-down"></i></button>\
                    </span>',
        controller:function($scope,$element){

           $scope.Disable = function(cat){
                return cat.Seleted;
            }

            $scope.approve = function(){
                $timeout(function(){
                    $rootScope.$broadcast('approve',$scope.category);
                },0);

            }

            $scope.reject = function(){
                $timeout(function(){
                    $rootScope.$broadcast('reject',$scope.category);
                },0);
            }




        }

    }

}])