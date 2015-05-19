/**
 * Created by arnold.krumins on 01/05/2015.
 */
app.directive('item',['$rootScope',function($rootScope){

    return{
        restrict:'A',
        scope:{item:'=item'},
        link:function(scope,element,__){

            element.bind('click',function(){
                angular.element(this.querySelector('.selected-item')).toggleClass("fa-circle-o fa-dot-circle-o");
                TweenMax.to(element, 0.1, {scaleX:0.95, scaleY:0.95, force3D:true, yoyo:true, repeat:1, ease:Power1.easeInOut});
                $rootScope.$broadcast('item-selected',scope.item);
            });

        }
    }

}]);