/**
 * Created by arnoldkrumins on 12/09/15.
 */
app.controller('ForecastController',['$scope','$timeout','forecastingDataService' ,function($scope,$timeout,forecastingDataService){

$scope.forecastData = [];


$scope.init = function(){

    $scope.get();
}


$scope.get = function(){

    $timeout(function(){
        var data = forecastingDataService.get();
        $scope.forecastData = data.Datas;
    },4);

}


}]);