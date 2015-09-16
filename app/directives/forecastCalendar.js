/**
 * Created by arnoldkrumins on 12/09/15.
 */
app.directive('forecastCalendar',function(){

    return{
        restrict:'EA',
        replace:true,
        scope:{ forecastData:'=forecastCalendar'},
        template: '<ul>' +
                        '<li ng-repeat="forecast in forecastData">' +
                          '<div>' +
                            '<h5><span class="f-day">{{ forecast.Date.toString().substr(0,3) }}</span><span class="f-date-part">{{ forecast.Date.substr(3,forecast.Date.length) }}</span></h5>' +
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

            scope.create = function(){

                var cal = new Calendar();               // weeks start on Monday by default
                var m = cal.monthDates(2015,8,            // January is 0 in JS Date
                    function(d) {return (' '+d.getDate()).slice(-2)}
                    //function(w) {return w.join(' | ')}
                );


            }


            scope.formatNumber = function(value){
                return parseInt(value);
            }

            scope.status = function(avails,sold){
                return parseInt(((parseInt(sold) / parseInt(avails)) * 100));
            }


        }

    }

});