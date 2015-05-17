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
    $scope.approve = 'approve';
    $scope.reject = 'reject';


    $scope.init = function(){

        $scope.data = fakeDataService.getComponents();
        $scope.advertiserdata = fakeDataService.getAdvertiserCategories();
        $scope.publishers = fakeDataService.getPublishers();
        $scope.categories = _.forEach(fakeDataService.getCategories().data, function(o) {
            _.assign(o, { 'Selected': false });
        });

    }

    $scope.getPublisherValue = function () {

        console.log('publisher');
    }



}]);

