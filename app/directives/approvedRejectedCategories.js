/**
 * Created by akrumins on 15/05/2015.
 */
app.directive('approvedRejectedCategories',function(){

    return{
        restrict:'EA',
        scope:{categories:'=approvedRejectedCategories',key:'@'},
        template:'<div class="categories-container">\
                        <div class="category-search">\
                            <i class="fa fa-search"></i><input ng-model="searchText" type="search" class="form-control" placeholder="Search">\
                        </div>\
                            <ul>\
                               <li ng-repeat="category in categories | filter:searchText" ng-class-odd="\'odd\'" ng-class-even="\'even\'">\
                                   <div approve-reject-category="category" key="{{ key }}" ></div>\
                               </li>\
                            </ul>\
                        </div>\
                   </div>'

    }

});