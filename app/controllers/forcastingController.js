/**
 * Created by arnoldkrumins on 12/09/15.
 */
app.controller('ForecastController',['$scope','$timeout','forecastingDataService' ,function($scope,$timeout,forecastingDataService){


$scope.chartData = [
    {
        "day": 8,
        "avails": "14422464.7441586",
        "sold": "5347.59538159409"
    },
    {
        "day": 9,
        "avails": "19032091.9630928",
        "sold": "5347.59538159409"
    },
    {
        "day": 10,
        "avails": "16106957.2893605",
        "sold": "16089.7848181856"
    },
    {
        "day": 11,
        "avails": "18272733.4189063",
        "sold": "5347.59538159409"
    },
    {
        "day": 14,
        "avails": "10174619.2347779",
        "sold": "5271.82343770879"
    },
    {
        "day": 15,
        "avails": "10838868.9879293",
        "sold": "5271.82343770879"
    },
    {
        "day": 16,
        "avails": "14423708.9255717",
        "sold": "15815.4703131264"
    },
    {
        "day": 17,
        "avails": "11935408.2629729",
        "sold": "5271.82343770879"
    },
    {
        "day": 18,
        "avails": "13142655.8302083",
        "sold": "5271.82343770879"
    },
    {
        "day": 20,
        "avails": "11308061.2738854",
        "sold": "5271.82343770879"
    },
    {
        "day": 21,
        "avails": "8012896.01816945",
        "sold": "5303.04170626712"
    },
    {
        "day": 23,
        "avails": "11523509.6277186",
        "sold": "10606.0834125342"
    },
    {
        "day": 24,
        "avails": "9524262.90445569",
        "sold": "10606.0834125342"
    },
    {
        "day": 29,
        "avails": "6869335.19514024",
        "sold": "10625.4218022275"
    },
    {
        "day": 30,
        "avails": "9642570.28552162",
        "sold": "15938.1327033412"
    }
];



$scope.forecastData =[];
$scope.forecastDataGrouped = {};
$scope.calendar = [];
$scope.busy = false;


/* Forecast Parameter object */
$scope.forecastParams = {
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
        $scope.forecastData.length = 0;
        var data = forecastingDataService.get($scope.forecastParams).then(function (data) {
            if (true) { // data.success

                $scope.forecastParams.range.length = 0;
                $scope.forecastData.length = 0;
                $scope.calendar.length = 0;

                $scope.forecastData = _.forEach(data.Datas,function(fd){
                    var d = new Date(fd.group.substr(0,10));
                    _.assign(fd, { 'Date': d.toDateString() });
                    _.assign(fd, { 'Day': d.getDate() });
                    _.assign(fd, { 'Month': d.getMonth()+1 });
                    _.assign(fd, { 'Year': d.getFullYear() });
                    _.assign(fd, { 'MonthName': monthName[d.getMonth()] });
                    if(_.filter($scope.forecastParams.range,{'month':fd.Month,'year': fd.Year}).length === 0){
                        $scope.forecastParams.range.push({month: fd.Month,year:fd.Year})
                    }

                });


                var cal = new Calendar();

                _.forEach($scope.forecastParams.range,function(range){

                    var cdata = cal.monthDays(range.year,range.month-1);

                    $scope.calendar.push(
                        {
                            MonthName: monthName[range.month-1],
                            Month: range.month,
                            Year: range.year,
                            weeks: cdata,
                            chartid: 'chart'.concat(monthName[range.month-1]),
                            fdata: _.filter($scope.forecastData,{'Month': range.month,'Year':range.year}),
                            chartdata: _.map(_.filter($scope.forecastData,{'Month': range.month,'Year':range.year}),function(data){
                                return { day:data.Day, avails:data.avails, sold:data.sold};
                            })
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