/**
 * Created by arnold.krumins on 30/04/2015.
 */
app.controller('ReportController',['$scope','fakeDataService' ,function($scope,fakeDataService){

    $scope.data = [];
    $scope.selectedcomponents =[];

   $scope.init = function(){

       $scope.data =  fakeDataService.getComponents();
   }

    $scope.getComponents = function(){
        $scope.data =  fakeDataService.getComponents();
    }



}]);