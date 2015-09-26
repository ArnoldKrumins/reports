/**
 * Created by arnoldkrumins on 12/09/15.
 */
app.controller('ForecastController',['$scope','$timeout','forecastingDataService' ,function($scope,$timeout,forecastingDataService){

$scope.forecastData =[];
$scope.forecastDataGrouped = {};
$scope.calendar = [];
$scope.busy = false;


/* Forecast Parameter object */
$scope.forecast = {
    sDate: new Date(),
    eDate: new Date(),
    range:[],
    dailyBudget:0,
    budget:0,
    cpcBid:0,
    cpmBid:0,

}

/* View model for holding the forecast data for each day. */
$scope.fvm = {
    avails:0,
    sold:0,
    revenue:0
}




    var weekday = new Array(7);
    weekday[0]=  "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    var monthName = new Array(11);
    monthName[0]=  "Jan";
    monthName[1] = "Feb";
    monthName[2] = "March";
    monthName[3] = "Apr";
    monthName[4] = "May";
    monthName[5] = "June";
    monthName[6] = "July";
    monthName[7] = "Aug";
    monthName[8] = "Sept";
    monthName[9] = "Oct";
    monthName[10] = "Nov";
    monthName[11] = "Dec";




    $scope.init = function(){

    $scope.runForcast();

}


$scope.runForcast = function(){


    $timeout(function(){
        $scope.busy = true;
        var data = forecastingDataService.get('01/09/2015','30/10/2015').then(function (data) {
            if (true) { // data.success

                $scope.forecastData = _.forEach(data.Datas,function(fd){
                    var d = new Date(fd.group.substr(0,10));
                    _.assign(fd, { 'Date': d.toDateString() });
                    _.assign(fd, { 'Day': d.getDate() });
                    _.assign(fd, { 'Month': d.getMonth()+1 });
                    _.assign(fd, { 'Year': d.getFullYear() });
                    _.assign(fd, { 'MonthName': monthName[d.getMonth()] });
                    if(_.filter($scope.forecast.range,{'month':fd.Month,'year': fd.Year}).length === 0){
                        $scope.forecast.range.push({month: fd.Month,year:fd.Year})
                    }

                });


                var cal = new Calendar();

                _.forEach($scope.forecast.range,function(range){

                    var cdata = cal.monthDays(range.year,range.month-1);

                    $scope.calendar.push(
                        {
                            MonthName: monthName[range.month-1],
                            Month: range.month,
                            Year: range.year,
                            weeks: cdata,
                            fdata: _.filter($scope.forecastData,{'Month': range.month,'Year':range.year})
                        }
                    );


                });


            }
            else {
                $scope.busy = false;
                notificationService.error('Forecasting Service', 'There has been a problem getting data.');
            }

            $scope.busy = false;

        });





    },4);

}


}]);