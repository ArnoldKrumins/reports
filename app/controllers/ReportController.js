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


    $scope.select = function(value){

     return null;

    }

    $scope.formats = [
        {PublisherBannerFormatId:330,Width:200,Height:300,MinWidth:200,MinHeight:300,Selected:false,RtbFormats:[{Id:10,Width:200,Height:200,Enabled:true,UnsoldUrl:''}]},
        {PublisherBannerFormatId:331,Width:200,Height:500,MinWidth:200,MinHeight:500,Selected:false,RtbFormats:[{Id:11,Width:200,Height:200,Enabled:true,UnsoldUrl:''}]},
        {PublisherBannerFormatId:332,Width:200,Height:100,MinWidth:200,MinHeight:100,Selected:false,RtbFormats:[{Id:12,Width:200,Height:200,Enabled:true,UnsoldUrl:''}]},
        {PublisherBannerFormatId:333,Width:300,Height:200,MinWidth:300,MinHeight:200,Selected:false,RtbFormats:[{Id:13,Width:300,Height:200,Enabled:true,UnsoldUrl:''}]},
        {PublisherBannerFormatId:334,Width:400,Height:600,MinWidth:400,MinHeight:600,Selected:false,RtbFormats:[{Id:14,Width:400,Height:200,Enabled:true,UnsoldUrl:''}]},
        {PublisherBannerFormatId:335,Width:300,Height:700,MinWidth:300,MinHeight:700,Selected:false,RtbFormats:[{Id:15,Width:300,Height:200,Enabled:true,UnsoldUrl:''}]},
        {PublisherBannerFormatId:336,Width:300,Height:400,MinWidth:300,MinHeight:400,Selected:false,RtbFormats:[{Id:16,Width:300,Height:200,Enabled:true,UnsoldUrl:''}]},
        {PublisherBannerFormatId:337,Width:400,Height:200,MinWidth:400,MinHeight:200,Selected:false,RtbFormats:[{Id:17,Width:400,Height:200,Enabled:true,UnsoldUrl:''}]},
        {PublisherBannerFormatId:338,Width:400,Height:100,MinWidth:400,MinHeight:100,Selected:false,RtbFormats:[{Id:18,Width:400,Height:200,Enabled:true,UnsoldUrl:''}]},
        {PublisherBannerFormatId:339,Width:400,Height:900,MinWidth:400,MinHeight:900,Selected:false,RtbFormats:[{Id:19,Width:400,Height:200,Enabled:true,UnsoldUrl:''}]},
        {PublisherBannerFormatId:340,Width:500,Height:600,MinWidth:500,MinHeight:600,Selected:false,RtbFormats:[{Id:20,Width:500,Height:200,Enabled:true,UnsoldUrl:''}]},
        {PublisherBannerFormatId:341,Width:500,Height:700,MinWidth:500,MinHeight:700,Selected:false,RtbFormats:[{Id:21,Width:500,Height:200,Enabled:true,UnsoldUrl:''}]},
        {PublisherBannerFormatId:342,Width:200,Height:300,MinWidth:200,MinHeight:300,Selected:false,RtbFormats:[{Id:22,Width:200,Height:200,Enabled:true,UnsoldUrl:''}]},
        {PublisherBannerFormatId:343,Width:500,Height:200,MinWidth:500,MinHeight:200,Selected:false,RtbFormats:[{Id:23,Width:500,Height:200,Enabled:true,UnsoldUrl:''}]},
        {PublisherBannerFormatId:344,Width:500,Height:100,MinWidth:500,MinHeight:100,Selected:false,RtbFormats:[{Id:24,Width:500,Height:200,Enabled:true,UnsoldUrl:''}]},
        {PublisherBannerFormatId:345,Width:250,Height:500,MinWidth:500,MinHeight:500,Selected:false,RtbFormats:[{Id:25,Width:300,Height:200,Enabled:true,UnsoldUrl:''}]},
        {PublisherBannerFormatId:346,Width:270,Height:200,MinWidth:500,MinHeight:200,Selected:false,RtbFormats:[{Id:23,Width:500,Height:200,Enabled:true,UnsoldUrl:''}]},
        {PublisherBannerFormatId:347,Width:280,Height:100,MinWidth:500,MinHeight:100,Selected:false,RtbFormats:[{Id:24,Width:500,Height:200,Enabled:true,UnsoldUrl:''}]},
        {PublisherBannerFormatId:348,Width:325,Height:500,MinWidth:500,MinHeight:500,Selected:false,RtbFormats:[{Id:25,Width:300,Height:200,Enabled:true,UnsoldUrl:''}]},
        {PublisherBannerFormatId:349,Width:1000,Height:500,MinWidth:500,MinHeight:200,Selected:false,RtbFormats:[{Id:26,Width:500,Height:200,Enabled:true,UnsoldUrl:''}]},
        {PublisherBannerFormatId:350,Width:1200,Height:600,MinWidth:500,MinHeight:100,Selected:false,RtbFormats:[{Id:27,Width:500,Height:200,Enabled:true,UnsoldUrl:''}]},
        {PublisherBannerFormatId:351,Width:1200,Height:300,MinWidth:500,MinHeight:500,Selected:false,RtbFormats:[{Id:28,Width:300,Height:200,Enabled:true,UnsoldUrl:''}]}
    ];


    $scope.Rtbformats =[
        {"Id":38,"Width":200,"Height":200,"Enabled":false},
        {"Id":14,"Width":88,"Height":31,"Enabled":true},
        {"Id":13,"Width":120,"Height":60,"Enabled":true},
        {"Id":17,"Width":120,"Height":600,"Enabled":true},
        {"Id":30,"Width":125,"Height":125,"Enabled":false},
        {"Id":50,"Width":140,"Height":350,"Enabled":false},
        {"Id":10,"Width":160,"Height":600,"Enabled":true},
        {"Id":9,"Width":180,"Height":150,"Enabled":false},
        {"Id":38,"Width":200,"Height":200,"Enabled":false},
        {"Id":49,"Width":200,"Height":900,"Enabled":false},
        {"Id":21,"Width":250,"Height":250,"Enabled":true},
        {"Id":18,"Width":250,"Height":360,"Enabled":true},
        {"Id":39,"Width":250,"Height":480,"Enabled":false},
        {"Id":27,"Width":250,"Height":800,"Enabled":true},
        {"Id":43,"Width":300,"Height":50,"Enabled":true},
        {"Id":41,"Width":300,"Height":60,"Enabled":true},
        {"Id":5,"Width":300,"Height":250,"Enabled":true},
        {"Id":33,"Width":300,"Height":300,"Enabled":false},
        {"Id":2,"Width":300,"Height":600,"Enabled":true},
        {"Id":3,"Width":300,"Height":1050,"Enabled":true},
        {"Id":35,"Width":320,"Height":50,"Enabled":true},
        {"Id":44,"Width":320,"Height":80,"Enabled":true},
        {"Id":40,"Width":320,"Height":320,"Enabled":true},
        {"Id":11,"Width":728,"Height":90,"Enabled":true},
        {"Id":31,"Width":750,"Height":100,"Enabled":false},
        {"Id":15,"Width":750,"Height":200,"Enabled":true}
    ];

}]);





