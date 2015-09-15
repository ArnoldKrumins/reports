/**
 * Created by arnoldkrumins on 15/09/15.
 */
app.directive('endRepeat', ['$timeout','$rootScope', function ($timeout,$rootScope) {

    return {
        restrict: 'A',
        link: function (scope, element, attr) {
            if (scope.$last === true) {

                $rootScope.$broadcast('calendar-created');

            }
        }
    }
}]);