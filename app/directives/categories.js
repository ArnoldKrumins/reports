/**
 * Created by arnoldkrumins on 14/05/15.
 */
app.directive('categories',function(){

    return{
        restrict:'EA',
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
                            <li ng-repeat="category in categories  | filter:searchText" ng-class-odd="\'odd\'" ng-class-even="\'even\'"  >\
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
        link:function(scope,element,attrs){





            scope.$on("approve", function (e ,category) {

                if (angular.isUndefined(scope.approved)) {scope.approved = [];}

                scope.$apply(function(){

                    if(category.ParentId === null){ /* Selected a parent node. Move + children. */

                        scope.approved.push(category);
                        var parentIdx = _.findIndex(scope.categories, { 'Id': category.Id });
                        scope.categories[parentIdx].Selected = true;

                        angular.forEach(_.pluck(_.filter(scope.categories, { 'ParentId': category.Id}),'Id'), function(value) {

                            var idx =_.findIndex(scope.categories, { 'Id': value });
                            scope.approved.push(scope.categories[idx]);
                            scope.categories[idx].Selected = true;

                        });

                    }
                    else{
                        scope.categories.splice(scope.categories.indexOf(category),1);
                        scope.approved.push(category);
                    }

                });

                console.log('approve');
            });


            scope.$on("reject", function (e ,category) {


                if (angular.isUndefined(scope.rejected)) {scope.rejected = [];}

                scope.$apply(function(){

                    if(category.ParentId === null){ /* Selected a parent node. Move + children. */

                        scope.rejected.push(category);
                        var parentIdx = _.findIndex(scope.categories, { 'Id': category.Id });
                        scope.categories[parentIdx].Selected = true;

                        angular.forEach(_.pluck(_.filter(scope.categories, { 'ParentId': category.Id}),'Id'), function(value) {

                            var idx =_.findIndex(scope.categories, { 'Id': value });
                            scope.rejected.push(scope.categories[idx]);
                            scope.categories[idx].Selected = true;

                        });

                    }
                    else{
                        scope.categories.splice(scope.categories.indexOf(category),1);
                        scope.rejected.push(category);
                    }

                });
                console.log('reject');
            });




            scope.$on("approve-remove", function (e ,category) {

                scope.$apply(function(){

                    if (category.ParentId === null) { /* Selected a parent node. Move + children. */

                        var parentIdx = _.findIndex(scope.categories, { 'Id': category.Id });
                        scope.categories[parentIdx].Selected = false;
                        scope.approved.splice(scope.approved.indexOf(category), 1);

                        angular.forEach(_.pluck(_.filter(scope.approved, { 'ParentId': category.Id}), 'Id'), function (value) {

                            scope.approved.splice(_.findIndex(scope.approved, { 'Id': value }), 1);
                            scope.categories[_.findIndex(scope.categories, { 'Id': value })].Selected = false;

                        });

                    }
                    else {
                        scope.approved.splice(_.findIndex(scope.approved, { 'Id': category.Id }), 1);
                        scope.categories[_.findIndex(scope.categories, { 'Id': category.Id })].Selected = false;
                    }

                });
            });



            scope.$on("reject-remove", function (e ,category) {

                scope.$apply(function () {

                    if (category.ParentId === null) { /* Selected a parent node. Move + children. */

                        var parentIdx = _.findIndex(scope.categories, { 'Id': category.Id });
                        scope.categories[parentIdx].Selected = false;
                        scope.rejected.splice(scope.rejected.indexOf(category), 1);

                        angular.forEach(_.pluck(_.filter(scope.rejected, { 'ParentId': category.Id}), 'Id'), function (value) {

                            scope.rejected.splice(_.findIndex(scope.rejected, { 'Id': value }), 1);
                            scope.categories[_.findIndex(scope.categories, { 'Id': value })].Selected = false;

                        });

                    }
                    else {
                        scope.rejected.splice(_.findIndex(scope.rejected, { 'Id': category.Id }), 1);
                        scope.categories[_.findIndex(scope.categories, { 'Id': category.Id })].Selected = false;
                    }

                });
            });

            scope.$on("approve-all", function (e ,category) {
                console.log('approve all');
                scope.rejected = [];
                moveAll(scope.approved);
            });

            scope.$on("reject-all", function (e ,category) {
                console.log('reject all');
                scope.approved = [];
                moveAll(scope.rejected);
            });

            scope.$on("reset-all", function (e ,category) {

                scope.$apply(function () {

                    angular.forEach(scope.categories, function (value) {
                        value.Selected = false;
                    });

                    scope.rejected = [];
                    scope.approved = [];
                });

            });


            var moveAll = function(list){

                scope.$apply(function () {
                    angular.forEach(scope.categories, function (value) {
                        value.Selected = true;
                        list.push(value);
                    });
                });
            };


            scope.CategoryCount = function(){

                return _.filter(scope.categories, { 'Selected': false}).length;

            };

        }

    }

});