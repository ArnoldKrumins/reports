/**
 * Created by arnoldkrumins on 12/09/15.
 */
app.directive('forecastCalendar',function(){

    return{
        resrict:'EA',
        replace:true,
        scope:{ forecastData:'=forecastCalendar'},
        template: '<ul>' +
                        '<li ng-repeat="forecast in forecastData">' +
                          '<div>' +
                            '<h5>{{ forecast.Date  }}</h5>' +
                            '<h1>{{ forecast.Day  }}</h1>' +
                            '<div class="f-data">' +
                               '<p>{{ formatNumber(forecast.avails).toString().concat(\'&nbsp;K\') }}</p>' +
                                '<p>{{ formatNumber(forecast.sold).toString().concat(\'&nbsp;K\') }}</p>' +
                                '<p>{{ forecast.revenue | currency }}&nbsp;{{ \'(\'.concat(status(forecast.avails,forecast.sold),\'%\',\')\') }}</p>' +
                            '</div>' +
                            '<div class="f-indicator" ng-class="{\'good\' : status(forecast.avails,forecast.sold) >= 40,\'ok\' : status(forecast.avails,forecast.sold) <40,\'bad\' : status(forecast.avails,forecast.sold) <20 }"></div>' +
                            '</div>' +
                        '</li>' +
                    '</ul>',
        link:function(scope,element,attrs){

            scope.formatNumber = function(value){
                return parseInt(value);
            }

            scope.status = function(avails,sold){
                return parseInt(((parseInt(sold) / parseInt(avails)) * 100));
            }

            scope.statusClass = function(avails,sold){
                var val = parseInt(((parseInt(sold) / parseInt(avails)) * 100));

                if(val >=40) return true;
                if(val <40) return false;
            }
        }



    }

});