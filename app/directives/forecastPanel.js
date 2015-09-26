/**
 * Created by arnoldkrumins on 20/09/15.
 */
app.directive('forecastPanel',function(){

    return{
        restrict:'EA',
        scope:{ fvm:'=', day:'=' },
        template:'<div class="f-data" ng-hide="day === 0 || avails == 0">' +
                    '<table>' +
                         '<tbody>' +
                            '<tr><th>Avail:&nbsp;</th><td>{{ formatNumber(avails).toString() | number }}</td></tr>' +
                            '<tr><th>Sold:&nbsp;</th><td>{{ formatNumber(sold).toString() | number }}</td></tr>' +
                            '<tr><th>Rev:&nbsp;</th><td><strong>{{ revenue | currency }}&nbsp;{{ \'(\'.concat(status(avails,sold),\'%\',\')\') }}</strong></td></tr>' +
                         '</tbody>' +
                    '</table>' +

                    '<div class="f-indicator" ng-hide="day === 0 || avails == 0" ng-class="{\'good\' : status(avails,sold) >= 40,\'ok\' : status(avails,sold) <40,\'bad\' : status(avails,sold) <20 }"></div>',
        link:function(scope,element,attrs){

            scope.avails = attrs['avails'];
            scope.sold = attrs['sold'];
            scope.revenue = attrs['revenue'];

            scope.formatNumber = function(value){
                return parseInt(value);
            }

            scope.status = function(avails,sold){
                return parseInt(((parseInt(sold) / parseInt(avails)) * 100));
            }

        }


    }
});