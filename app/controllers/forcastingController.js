/**
 * Created by arnoldkrumins on 12/09/15.
 */
app.controller('ForecastController',['$scope','$timeout','forecastingDataService' ,function($scope,$timeout,forecastingDataService){

$scope.forecastData =[];
$scope.forecastDataGrouped = {};
$scope.calendar = [];

$scope.forecast = {
    sDate: "2015-05-04 00:00:00",
    eDate: "2015-06-15 00:00:00",
    range:[
        {year:2015, month:5},
        {year:2015, month:6}
    ]

}


$scope.months = function(sDate,eDate){

    var d1 = new Date(sDate);
    var d2 = new Date(eDate);
    var y1=d1.getFullYear();
    var y2=d2.getFullYear();
    var m1=d1.getMonth();
    var m2=d2.getMonth();

    return (y2 - y1) * 12 + (m2 - m1) + 1;

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

    $scope.get();
    var monthsCount = $scope.months($scope.forecast.sDate,$scope.forecast.eDate);


}


$scope.get = function(){

    $timeout(function(){
        var data = forecastingDataService.get();
        $scope.forecastData = _.forEach(data.Datas,function(fd){
            var d = new Date(fd.group);
            _.assign(fd, { 'Date': d.toDateString() });
            _.assign(fd, { 'Day': d.getDate() });
            _.assign(fd, { 'Month': d.getMonth() });
            _.assign(fd, { 'Year': d.getFullYear() });
            _.assign(fd, { 'MonthName': monthName[d.getMonth()] });

        })

        var cal = new Calendar();

        _.forEach($scope.forecast.range,function(range){

            var cdata = cal.monthDays(range.year,range.month);

            $scope.calendar.push(
                {
                    MonthName: monthName[range.month],
                    Month: range.month,
                    Year: range.year,
                    weeks: cdata,
                    fdata: _.filter($scope.forecastData,{'Month': range.month,'Year':range.year})
                }
            );


        });



    },4);

}


}]);