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
                    Available  <span class="badge">{{ categories.length }}</span>\
                </tab-heading>\
                <div class="categories-container" >\
                    <div class="category-search"><i class="fa fa-search"></i><input ng-model="searchText" type="search" class="form-control" placeholder="Search"></div>\
                        <ul>\
                            <li ng-repeat="category in categories track by $index | filter:searchText" ng-class-odd="\'odd\'" ng-class-even="\'even\'"  >\
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

            //goes to approve list
            scope.$on("approve", function (e ,category) {

                if (angular.isUndefined(scope.approved)) {scope.approved = [];}

                scope.$apply(function(){

                    if(category.ParentId === null){ /* Selected a parent node. Move + children. */

                        scope.approved.push(category);
                        scope.categories.splice(scope.categories.indexOf(category),1);

                        angular.forEach(_.pluck(_.filter(scope.categories, { 'ParentId': category.Id}),'Id'), function(value, key) {

                            var idx =_.findIndex(scope.categories, { 'Id': value });
                            scope.approved.push(scope.categories[idx]);
                            //scope.categories.splice(scope.categories[idx],1);
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
                    scope.categories.splice(scope.categories.indexOf(category),1);
                    scope.rejected.push(category);
                });

                console.log('reject');
            });


            scope.$on("approve-remove", function (e ,category) {
                console.log('approve remove');
            });

            scope.$on("reject-remove", function (e ,category) {
                console.log('reject remove');
            });

        }

    }

});