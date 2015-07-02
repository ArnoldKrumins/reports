app.controller('ReportController',['$scope','fakeDataService','notificationService' ,function($scope,fakeDataService,notificationService){

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

    }

    $scope.getPublisherValue = function () {

        console.log('publisher');
    }


    $scope.steps = [
        { step:1,description:'Step One', active:true, selected:true, complete:false},
        { step:2,description:'Step Two', active:true, selected:false, complete:false },
        { step:3,description:'Step Three', active:true, selected:false, complete:false },
        { step:4,description:'Step Four', active:true, selected:false, complete:false },
        { step:5,description:'Step Five', active:true, selected:false, complete:false }
    ];


    $scope.formats = [
        {PublisherBannerFormatId:330,Width:200,Height:300,MinWidth:200,MinHeight:300,RtbFormats:[{Id:10,Width:200,Height:200,Enabled:true,UnsoldUrl:''}]},
        {PublisherBannerFormatId:331,Width:200,Height:500,MinWidth:200,MinHeight:500,RtbFormats:[{Id:11,Width:200,Height:200,Enabled:true,UnsoldUrl:''}]},
        {PublisherBannerFormatId:332,Width:200,Height:100,MinWidth:200,MinHeight:100,RtbFormats:[{Id:12,Width:200,Height:200,Enabled:true,UnsoldUrl:''}]},
        {PublisherBannerFormatId:333,Width:300,Height:200,MinWidth:300,MinHeight:200,RtbFormats:[{Id:13,Width:300,Height:200,Enabled:true,UnsoldUrl:''}]},
        {PublisherBannerFormatId:334,Width:400,Height:600,MinWidth:400,MinHeight:600,RtbFormats:[{Id:14,Width:400,Height:200,Enabled:true,UnsoldUrl:''}]},
        {PublisherBannerFormatId:335,Width:300,Height:700,MinWidth:300,MinHeight:700,RtbFormats:[{Id:15,Width:300,Height:200,Enabled:true,UnsoldUrl:''}]},
        {PublisherBannerFormatId:336,Width:300,Height:400,MinWidth:300,MinHeight:400,RtbFormats:[{Id:16,Width:300,Height:200,Enabled:true,UnsoldUrl:''}]},
        {PublisherBannerFormatId:337,Width:400,Height:200,MinWidth:400,MinHeight:200,RtbFormats:[{Id:17,Width:400,Height:200,Enabled:true,UnsoldUrl:''}]},
        {PublisherBannerFormatId:338,Width:400,Height:100,MinWidth:400,MinHeight:100,RtbFormats:[{Id:18,Width:400,Height:200,Enabled:true,UnsoldUrl:''}]},
        {PublisherBannerFormatId:339,Width:400,Height:900,MinWidth:400,MinHeight:900,RtbFormats:[{Id:19,Width:400,Height:200,Enabled:true,UnsoldUrl:''}]},
        {PublisherBannerFormatId:340,Width:500,Height:600,MinWidth:500,MinHeight:600,RtbFormats:[{Id:20,Width:500,Height:200,Enabled:true,UnsoldUrl:''}]},
        {PublisherBannerFormatId:341,Width:500,Height:700,MinWidth:500,MinHeight:700,RtbFormats:[{Id:21,Width:500,Height:200,Enabled:true,UnsoldUrl:''}]},
        {PublisherBannerFormatId:342,Width:200,Height:300,MinWidth:200,MinHeight:300,RtbFormats:[{Id:22,Width:200,Height:200,Enabled:true,UnsoldUrl:''}]},
        {PublisherBannerFormatId:343,Width:500,Height:200,MinWidth:500,MinHeight:200,RtbFormats:[{Id:23,Width:500,Height:200,Enabled:true,UnsoldUrl:''}]},
        {PublisherBannerFormatId:344,Width:500,Height:100,MinWidth:500,MinHeight:100,RtbFormats:[{Id:24,Width:500,Height:200,Enabled:true,UnsoldUrl:''}]},
        {PublisherBannerFormatId:345,Width:250,Height:500,MinWidth:500,MinHeight:500,RtbFormats:[{Id:25,Width:300,Height:200,Enabled:true,UnsoldUrl:''}]},
        {PublisherBannerFormatId:346,Width:270,Height:200,MinWidth:500,MinHeight:200,RtbFormats:[{Id:23,Width:500,Height:200,Enabled:true,UnsoldUrl:''}]},
        {PublisherBannerFormatId:347,Width:280,Height:100,MinWidth:500,MinHeight:100,RtbFormats:[{Id:24,Width:500,Height:200,Enabled:true,UnsoldUrl:''}]},
        {PublisherBannerFormatId:348,Width:325,Height:500,MinWidth:500,MinHeight:500,RtbFormats:[{Id:25,Width:300,Height:200,Enabled:true,UnsoldUrl:''}]}
    ];

}]);





