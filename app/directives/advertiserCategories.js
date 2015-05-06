/**
 * Created by akrumins on 05/05/2015.
 */
app.directive('advertiserCategories',function(){
    return{
        restrict:'AE',
        scope:{ categories:'=advertiserCategories',selectedCategories:'=',title:'@',selectedTitle:'@'},
        template:' <div class="advertiser-categories col-sm-12 col-md-12 col-lg-12">' +
                     '<h4>{{ title }}</h4>' +
                     ' <div class="categories col-md-6">' +
                        '<p>Available Categories</p>' +
                        '<select size="10" multiple class="form-control">' +
                            '<option ng-model="selectedcategories" ng-repeat="category in categories" value="{{category.value }}">{{ category.name }}</option>' +
                        '</select>' +
                    '</div>' +

                    '<div class="category-buttons">' +
                        '<p><button type="button" class="btn btn-primary"><i class="fa fa-angle-double-right"></i></button></p>' +
                        '<p><button type="button" id="moveone" class="btn btn-primary"><i class="fa fa-angle-right"></i></button></p>' +
                        '<p><button type="button" class="btn btn-primary"><i class="fa fa-angle-left"></i></button></p>' +
                        '<button type="button" class="btn btn-primary"><i class="fa fa-angle-double-left"></i></button>' +
                    '</div>' +

                    ' <div class="categories-selected col-md-6">' +
                        '<p>{{ selectedTitle }}</p>' +
                        '<select size="10" multiple class="form-control">' +
                            '<option ng-repeat="category in categories" value="{{category.value }}">{{ category.name }}</option>' +
                        '</select>' +
                    '</div>' +

                 '</div>'
        ,
        link:function(scope,element,attrs){


            angular.element(document.querySelector('#moveone')).bind('click',function(){
               var s = scope.selectedcategories;

            })


        }
    }

});