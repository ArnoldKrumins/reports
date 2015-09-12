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
                               '<p>{{ formatNumber(forecast.avails) }}</p>' +
                                '<p>{{ formatNumber(forecast.sold) }}</p>' +
                                '<p>{{ formatNumber(forecast.revenue) }}</p>' +
                            '</div>' +
                            '</div>' +
                        '</li>' +
                    '</ul>',
        link:function(scope,element,attrs){

            scope.formatNumber = function(value){
                return parseInt(value);

            }


        }





    }

});