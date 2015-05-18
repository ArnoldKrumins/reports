/**
 * Created by akrumins on 18/05/2015.
 */
app.directive('approveRejectAll',['$rootScope','$timeout', function($rootScope,$timeout){

    return{
        restrict:'EA',
        scope:true,
        scope:{ approve:'=',reject:'='},
        template:'>\
                    <span class="category-buttons">\
                           <button ng-click="resetAll()"><i class="fa fa-undo"></i> Reset All</button>\
                           <button ng-click="approveAll()" ng-disabled="approve"><i class="fa fa-thumbs-o-up"></i> Approve All</button>\
                           <button ng-click="rejectAll()" ng-disabled="reject"><i class="fa fa-thumbs-o-down"></i> Reject All</button>\
                    </span>',
        controller:function($scope,$element){


            $scope.approveAll = function(){
                $timeout(function(){
                    $rootScope.$broadcast('approve-all',null);
                    $scope.approve = true;
                    $scope.reject = false;
                },0);

            }

            $scope.rejectAll = function(){
                $timeout(function(){
                    $rootScope.$broadcast('reject-all',null);
                    $scope.approve = false;
                    $scope.reject = true;
                },0);
            }


            $scope.resetAll = function(){
                $timeout(function(){
                    $rootScope.$broadcast('reset-all',null);
                    $scope.approve = false;
                    $scope.reject = false;
                },0);
            }


        }

    }

}])