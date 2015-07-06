app.controller('ReportController',['$scope','$timeout','fakeDataService','notificationService' ,function($scope,$timeout,fakeDataService,notificationService){

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


    $scope.disableApproveAll = false;
    $scope.disableRejectAll = false;

    $scope.selectAll= false;

    $scope.init = function(){

        $scope.data = fakeDataService.getComponents();
        $scope.advertiserdata = fakeDataService.getAdvertiserCategories();
        $scope.publishers = fakeDataService.getPublishers();
        $scope.categories = _.forEach(fakeDataService.getCategories().data, function(o) {
            _.assign(o, { 'Selected': false });
        });

        notificationService.success('title','message');


        $scope.getBannerFormats();
        $scope.getRtbBannerFormats();
        $scope.getAllRtbBannerFormats();

    }

    $scope.getPublisherValue = function () {

        console.log('publisher');
    }


       $scope.steps = [
        { step:1,description:'TARGETING', active:true, selected:true, complete:false},
        { step:2,description:'BIDS', active:true, selected:false, complete:false },
        { step:3,description:'MATERIAL', active:true, selected:false, complete:false },
        { step:4,description:'CAMPAIGN', active:true, selected:false, complete:false },
        { step:5,description:'BUDGETS', active:true, selected:false, complete:false }
    ];










}]);





