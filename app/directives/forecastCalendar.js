/**
 * Created by arnoldkrumins on 12/09/15.
 */
app.directive('forecastCalendar',function(){

    var weekday = new Array(7);
    weekday[0]=  "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    return{
        resrict:'EA',
        replace:true,
        scope:{ forecastData:'=forecastCalendar'},
        template: '<ul>' +
                        '<li ng-repeat="forecast in forecastData">' +
                          '<div>' +
                            '<h5>{{ getDayForData(forecast.group)  }}</h5>' +
                            '</div>' +
                        '</li>' +
                    '</ul>',
        link:function(scope,element,attrs){

         scope.getDayForData = function(dateString){

             var d = new Date(dateString);
             return d.toDateString()
             //return weekday[d.getDay()];

         }


        }





    }

});