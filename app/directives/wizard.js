/**
 * Created by akrumins on 09/06/2015.
 */
app.directive('wizard',function(){
    return{
        restrict:'EA',
        scope:{ steps:'=wizard'},
        template:'<div id="wizard">' +
                    '<ul>' +
                            '<li ng-repeat="step in steps" ng-class="{\'active\': step.selected, \'complete\': step.complete }" ng-click="hit($index)">' +
                                '<span class="step">' +
                                        '{{ step.step }}' +
                                '</span>' +
                                '<span class="title">{{ step.description }}</span>' +
                            '</li>' +
                    '</ul>' +
                '</div>',
        link:function(scope, element,attrs){

            scope.hit = function(index){

               //var stepCount = scope.steps.length;

                angular.forEach(scope.steps,function(step){

                        if(step.selected){
                            step.complete = true;
                        }
                        step.selected = false;
                });

                scope.steps[index].selected = true;
            }



        }
    }

})