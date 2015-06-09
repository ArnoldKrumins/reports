/**
 * Created by akrumins on 09/06/2015.
 */
app.directive('wizard',function(){
    return{
        restrict:'EA',
        scope:{ steps:'=wizard'},
        template:'<div id="wizard">' +
                    '<ul>' +
                            '<li ng-repeat="step in steps">' +
                                '<span class="step">' +
                                        '<i class="fa fa-check"></i>' +
                                '</span>' +
                                '<span class="title">{{ step.description}}</span>' +
                            '</li>' +
                    '</ul>' +
                '</div>',
        link:function(scope, element,attrs){

        }
    }

})