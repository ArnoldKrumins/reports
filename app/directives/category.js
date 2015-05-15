/**
 * Created by akrumins on 15/05/2015.
 */
app.directive('category',['$rootScope', function($rootScope){

    return{
        restrict:'EA',
        scope:{category:'=category'},
        template:'<span class="category-name" ng-class="{\'indent\':category.ParentId !== null,\'category-header\':category.ParentId === null}" >{{ category.Category }}</span>\
                      <span class="category-buttons">\
                           <button><i class="fa fa-thumbs-o-up"></i></button>\
                           <button><i class="fa fa-thumbs-o-down"></i></button>\
                    </span>',
        link:function(scope,element,__){

            element.bind('click',function(button){
                _.contains(button.target.className, 'up') ? $rootScope.$broadcast('approve',scope.category) : $rootScope.$broadcast('reject',scope.category);
            });

        }

    }

}])