/**
 * Created by arnold.krumins on 07/05/2015.
 */
app.directive('publisersList',function(){

    return{
        restrict:'EA',
        scope:{ publishers:'=publisersList'},
        template:'<select ' +
                  'ng-model="publishers.Selected" ng-selected="{{Selected}}"'+
                  'ng-options="publisher.Text group by publisher.sub for publisher in publishers track by publisher.Value">' +
                   '</select>',
        link: function(scope, element, attrs){

            var s = scope.publishers;

        }
    }

})