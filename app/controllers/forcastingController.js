/**
 * Created by arnoldkrumins on 12/09/15.
 */
app.controller('ForecastController',['$scope','$timeout','forecastingDataService' ,function($scope,$timeout,forecastingDataService){

$scope.forecastData = [];


    var weekday = new Array(7);
    weekday[0]=  "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

$scope.init = function(){

    $scope.get();
}


$scope.get = function(){

    $timeout(function(){
        var data = forecastingDataService.get();
        $scope.forecastData = _.forEach(data.Datas,function(fd){
            var d = new Date(fd.group);
            _.assign(fd, { 'Date': d.toDateString() });
            _.assign(fd, { 'Day': d.getDate() });

        })
        $scope.forecastData = data.Datas;

    },4);

}


}]);