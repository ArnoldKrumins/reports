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



app.directive('publisherListTwo', ['$sce', '$compile', function ($sce, $compile) {

    return {

        restrict: 'EA',
        replace:true,
        scope: { publishers: '=publisherListTwo' , fragment:'@', click:'&'},
        template: '<div class="styled-subpublisher-select"><div><div ng-bind-html="fragment"></div></div></div>',
        link: function (scope, element, __) {


            var that = this;

            var _publishers = scope.publishers;
            var _currentlySelectedPublisher = undefined;


            publisherInArray = function (id, array) {
                var found = undefined;
                $.each(array, function (index, data) {
                    if (data.Id === id || (data.PublisherType == 0 && id == -2) || (data.PublisherType == 2 && id == -1)) {
                        found = data;
                        return;
                    }
                });
                return found;
            };



            createSelect = function(publishers) {

                var optGroupStarted = false;

                var items = [];
                angular.forEach(publishers, function (value) {

                    if (value.Value === "$$OPTGROUP$$OPTGROUP$$") {
                        if (optGroupStarted)
                            items.push("</optgroup>");

                        items.push("<optgroup label='" + value.Text + "'>");

                        optGroupStarted = true;
                    } else {
                        var selected = "";
                        if (value.Selected) {
                            selected = " selected=selected ";
                        }
                        items.push("<option value='" + value.Value + "'" + selected + ">" + value.Text + "</option>");
                    }

                }, items);

                return items.join('');
            };


            var getCurrentlySelectedPublisher = function () {
                return _currentlySelectedPublisher;
            };



            change = function (value){

                var publisherId = parseInt(value, 10);
                var publisher = publisherInArray(publisherId, _publishers);
                if (publisher) {
                    _currentlySelectedPublisher = publisher;
                    console.log(publisher);
                }

                // setPublisher();
            }





            scope.$watch(function (scope) { return createSelect(scope.publishers) },
                function (newValue) {
                    scope.fragment =  $sce.trustAsHtml('<select onchange=\'change(value)\'>' + newValue + '</select>');
                });
        }

    }

}]);



