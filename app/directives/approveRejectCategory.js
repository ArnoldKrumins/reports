/**
 * Created by akrumins on 15/05/2015.
 */
app.directive('approveRejectCategory',['$rootScope', function($rootScope){

    return{
        restrict:'EA',
        scope:{category:'=approveRejectCategory', key:'@'},
        template:'<span class="category-name" ng-class="{\'indent\':category.ParentId !== null,\'category-header\':category.ParentId === null}" >{{ category.Category }}</span>\
                      <span class="category-buttons">\
                           <button><i class="fa fa-times"></i></button>\
                    </span>',
        link:function(scope,element,__){

           element.find('button').bind('click',function(){
                $rootScope.$broadcast(scope.key + '-remove',scope.category);
            });

        }

    }

}])