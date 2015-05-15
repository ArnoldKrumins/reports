/**
 * Created by akrumins on 15/05/2015.
 */
app.directive('approvedRejectedCategories',function(){

    return{
        restrict:'EA',
        scope:{categories:'=approvedRejectedCategories',key:'@'},
        template:'<div class="categories-container">\
                        <ul>\
                            <li ng-repeat="category in categories" ng-class-odd="\'odd\'" ng-class-even="\'even\'">\
                               <div approve-reject-category="category" key="{{ key }}" ></div>\
                            </li>\
                        </ul>\
                   </div>',
        link:function(scope,element,__){

           // element.find('button').bind('click',function(){
           //     $rootScope.$broadcast(scope.key,scope.category);
           // });

        }
    }

});