/**
 * Created by arnold.krumins on 30/04/2015.
 */
app.controller('ReportController',['$scope','fakeDataService' ,function($scope,fakeDataService){

    $scope.data = [];
    $scope.selecteditems =[];
    $scope.selectednames=[];
    $scope.selected = {settingone:'',settingtwo:'',settingthree:'',settingfour:''};

   $scope.init = function(){

       $scope.data =  fakeDataService.getComponents();
   }

}]);