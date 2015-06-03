/**
 * Created by arnoldkrumins on 14/05/15.
 */
app.directive('categories',function(){

    return{
        restrict:'EA',
//        require:'^container',
        scope:{categories:'=categories', approved:'=',rejected:'='},
        template:'\
            <h4>Automatic approval of advertiser categories</h4>\
            <tabset>\
            <tab>\
                <tab-heading>\
                    Available  <span class="badge">{{ CategoryCount() }}</span>\
                </tab-heading>\
                <div class="categories-container" >\
                    <div class="category-search"><i class="fa fa-search"></i><input ng-model="searchText" type="search" class="form-control" placeholder="Search"></div>\
                        <ul>\
                            <li class="even"><div approve-reject-all approve="disableApproveAll" reject="disableRejectAll" ></div></li>\
                            <li ng-repeat="category in categories  | filter:searchText" ng-hide="category.Selected" ng-class-odd="\'odd\'" ng-class-even="\'even\'"  >\
                               <div category="category"></div>\
                            </li>\
                        </ul>\
                    </div>\
                </tab>\
                <tab>\
                    <tab-heading>\
                    Approved  <span class="badge">{{ approved.length }}</span>\
                    </tab-heading>\
                    <div approved-rejected-categories="approved" key="approve" ></div>\
                </tab>\
                <tab heading="Rejected Categories">\
                    <tab-heading>\
                        Rejected  <span class="badge">{{ rejected.length }}</span>\
                    </tab-heading>\
                   <div approved-rejected-categories="rejected" key="reject" ></div>\
                </tab>\
            </tabset>',
        link:function(scope,__,__,ctrl){


            /* Event Listeners */
            scope.$on("approve", function (e ,category) {
                scope.approveReject(scope.approved,category);
            });

            scope.$on("reject", function (e ,category) {
                scope.approveReject(scope.rejected,category);
            });

            scope.$on("approve-remove", function (e ,category) {
                scope.approveRejectRemove(scope.approved,category);
            });

            scope.$on("reject-remove", function (e ,category) {
                scope.approveRejectRemove(scope.rejected,category);
            });

            scope.$on("approve-all", function () {
                scope.resetLists();
                scope.moveAll(scope.approved);
            });

            scope.$on("reject-all", function () {
                scope.resetLists();
                scope.moveAll(scope.rejected);
            });

            scope.$on("reset-all", function () {

                scope.$apply(function () {

                    angular.forEach(scope.categories, function (value) {
                        value.Selected = false;
                    });
                    scope.resetLists();
                });
            });




            /* Methods */
            scope.approveReject = function(list,category){

                if (angular.isUndefined(list)) {list = [];}

                scope.$apply(function(){

                    if(category.ParentId === null){

                        list.push(category);
                        var parentIdx = _.findIndex(scope.categories, { 'Id': category.Id });
                        scope.categories[parentIdx].Selected = true;

                        angular.forEach(_.pluck(_.filter(scope.categories, { 'ParentId': category.Id}),'Id'), function(value) {
                            var idx =_.findIndex(scope.categories, { 'Id': value });
                            list.push(scope.categories[idx]);
                            scope.categories[idx].Selected = true;
                        });

                    }
                    else{
                        scope.categories.splice(scope.categories.indexOf(category),1);
                        list.push(category);
                    }

                });

            };

            scope.approveRejectRemove = function(list,category){

                scope.$apply(function(){

                    if (category.ParentId === null) {

                        var parentIdx = _.findIndex(scope.categories, { 'Id': category.Id });
                        scope.categories[parentIdx].Selected = false;
                        list.splice(list.indexOf(category), 1);

                        angular.forEach(_.pluck(_.filter(list, { 'ParentId': category.Id}), 'Id'), function (value) {
                            list.splice(_.findIndex(list, { 'Id': value }), 1);
                            scope.categories[_.findIndex(scope.categories, { 'Id': value })].Selected = false;
                        });

                    }
                    else {
                        list.splice(_.findIndex(list, { 'Id': category.Id }), 1);
                        scope.categories[_.findIndex(scope.categories, { 'Id': category.Id })].Selected = false;
                    }

                });

            }

            scope.moveAll = function(list){
                scope.$apply(function () {
                    angular.forEach(scope.categories, function (value) {
                        value.Selected = true;
                        list.push(value);
                    });
                });
            };

            scope.resetLists = function(){
                scope.rejected = [];
                scope.approved = [];
            };

            scope.CategoryCount = function(){
                return _.filter(scope.categories, { 'Selected': false}).length;
            };

        }

    }

});