/**
 * Created by arnold.krumins on 30/04/2015.
 */
app.controller('ReportController',['$scope','fakeDataService' ,function($scope,fakeDataService){

    $scope.data = [];
    $scope.advertiserdata = [];
    $scope.selecteditems =[];
    $scope.selectednames=[];
    $scope.selected = {settingone:'',settingtwo:'',settingthree:'',settingfour:''};
    $scope.selectedcategories =[];
    $scope.publishers = [];
    $scope.htmlfragment = null;

    $scope.categories = [];
    $scope.approvedcategories = [];
    $scope.rejectedcategories = [];


   $scope.init = function(){
       $scope.data =  fakeDataService.getComponents();
       $scope.advertiserdata = fakeDataService.getAdvertiserCategories();
       $scope.publishers = fakeDataService.getPublishers();
       $scope.categories = fakeDataService.getCategories();

   }

    $scope.getPublisherValue = function () {

        console.log('publisher');
    }



}]);