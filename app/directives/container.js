/**
 * Created by arnoldkrumins on 22/05/15.
 */
app.directive('container',function(){

    return{
        restrict:'EA',
        scope:{
                selecteditems:'=',
                names:'=',
                selected:'=',
                categories:'=',
                approvedcategories:'=',
                rejectedcategories:'='
        },
        controller:function($scope){


            $scope.approveReject = function(list,category){

                if (angular.isUndefined(list)) {list = [];}

                $scope.$apply(function(){

                    if(category.ParentId === null){

                        list.push(category);
                        var parentIdx = _.findIndex($scope.categories, { 'Id': category.Id });
                        $scope.categories[parentIdx].Selected = true;

                        angular.forEach(_.pluck(_.filter(scope.categories, { 'ParentId': category.Id}),'Id'), function(value) {
                            var idx =_.findIndex($scope.categories, { 'Id': value });
                            list.push($scope.categories[idx]);
                            $scope.categories[idx].Selected = true;
                        });

                    }
                    else{
                        $scope.categories.splice($scope.categories.indexOf(category),1);
                        list.push(category);
                    }

                });

            };

            $scope.approveRejectRemove = function(list,category){

                $scope.$apply(function(){

                    if (category.ParentId === null) {

                        var parentIdx = _.findIndex($scope.categories, { 'Id': category.Id });
                        scope.categories[parentIdx].Selected = false;
                        list.splice(list.indexOf(category), 1);

                        angular.forEach(_.pluck(_.filter(list, { 'ParentId': category.Id}), 'Id'), function (value) {
                            list.splice(_.findIndex(list, { 'Id': value }), 1);
                            $scope.categories[_.findIndex($scope.categories, { 'Id': value })].Selected = false;
                        });

                    }
                    else {
                        list.splice(_.findIndex(list, { 'Id': category.Id }), 1);
                        $scope.categories[_.findIndex($scope.categories, { 'Id': category.Id })].Selected = false;
                    }

                });

            }

            $scope.moveAll = function(list){
                $scope.$apply(function () {
                    angular.forEach($scope.categories, function (value) {
                        value.Selected = true;
                        list.push(value);
                    });
                });
            };

            $scope.resetLists = function(){
                $scope.rejected = [];
                $scope.approved = [];
            };

            $scope.CategoryCount = function(){
                return _.filter($scope.categories, { 'Selected': false}).length;
            };



        }
    }

})