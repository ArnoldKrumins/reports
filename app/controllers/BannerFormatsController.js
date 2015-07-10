/**
 * Created by arnoldkrumins on 06/07/15.
 */
app.controller('BannerFormatsController',['$scope','$timeout' ,function($scope,$timeout){

    $scope.init = function(){

        $scope.getBannerFormats();
        $scope.getRtbBannerFormats();
        $scope.getAllRtbBannerFormats();

    }


    //====================================================
    //BANNERS SECTION - START
    //====================================================
    $scope.selectedBanner = null


    $scope.getBannerFormats = function(){
        $scope.banners = _.groupBy($scope.formats, function(banner) {
             return this.floor(banner.Width/100.0)*100;
        }, Math);
    }

    $scope.getRtbBannerFormats = function(){

        $scope.rtbbanners = _.groupBy(_.forEach(_.filter($scope.Rtbformats, { 'Enabled': true }),function(banner){ banner.Enabled = null }), function(banner) {
            return this.floor(banner.Width/100.0)*100;
        }, Math);
    }


    $scope.getAllRtbBannerFormats = function(){
        $scope.rtbAllbanners = _.groupBy($scope.RtbAllformats, function(banner) {
            return this.floor(banner.Width/100.0)*100;
        }, Math);
    }



    $scope.getSelectedRtbBannerFormats = function(rtbBannersForBanner, bannerWidth){

        $scope.resetRtbBanners();

        _.forEach($scope.Rtbformats,function(banner){
            _.forEach(rtbBannersForBanner, function(rtbBanner){

                if(banner.Width < bannerWidth && !banner.Enabled){
                    banner.Enabled = false;
                }

                if(banner.Width === rtbBanner.Width && banner.Height === rtbBanner.Height){
                    banner.Enabled = rtbBanner.Enabled;
                    return;
                }
            });
        });
    }

    $scope.resetRtbBanners = function(){
        _.forEach($scope.Rtbformats,function(banner){
            banner.Enabled = null;
        });

    }




/*
    $scope.formats = [
        {PublisherBannerFormatId:330,Width:200,Height:300,MinWidth:200,MinHeight:300,RtbFormats:[
            {Id:100,Width:200,Height:200,Enabled:true,UnsoldUrl:''},
            {Id:101,Width:88,Height:31,Enabled:true,UnsoldUrl:''}
        ]},
        {PublisherBannerFormatId:331,Width:200,Height:500,MinWidth:200,MinHeight:500,RtbFormats:[
            {Id:102,Width:120,Height:600,Enabled:true,UnsoldUrl:''},
            {Id:103,Width:120,Height:60,Enabled:true,UnsoldUrl:''},
            {Id:104,Width:88,Height:31,Enabled:true,UnsoldUrl:''}
        ]},
        {PublisherBannerFormatId:332,Width:325,Height:500,MinWidth:200,MinHeight:100,RtbFormats:[
            {Id:105,Width:300,Height:1050,Enabled:true,UnsoldUrl:''},
            {Id:106,Width:300,Height:50,Enabled:true,UnsoldUrl:''},
            {Id:107,Width:250,Height:800,Enabled:true,UnsoldUrl:''},
            {Id:108,Width:250,Height:250,Enabled:true,UnsoldUrl:''},
            {Id:109,Width:160,Height:600,Enabled:true,UnsoldUrl:''},
            {Id:110,Width:120,Height:60,Enabled:true,UnsoldUrl:''}
        ]},
        {PublisherBannerFormatId:333,Width:300,Height:200,MinWidth:300,MinHeight:200,RtbFormats:null},
        {PublisherBannerFormatId:334,Width:400,Height:600,MinWidth:400,MinHeight:600,RtbFormats:[]},
        {PublisherBannerFormatId:335,Width:300,Height:700,MinWidth:300,MinHeight:700,RtbFormats:[]},
        {PublisherBannerFormatId:336,Width:300,Height:400,MinWidth:300,MinHeight:400,RtbFormats:[]},
        {PublisherBannerFormatId:337,Width:400,Height:200,MinWidth:400,MinHeight:200,RtbFormats:[]},
        {PublisherBannerFormatId:338,Width:400,Height:100,MinWidth:400,MinHeight:100,RtbFormats:[]},
        {PublisherBannerFormatId:339,Width:400,Height:900,MinWidth:400,MinHeight:900,RtbFormats:[]},
        {PublisherBannerFormatId:340,Width:500,Height:600,MinWidth:500,MinHeight:600,RtbFormats:[]},
        {PublisherBannerFormatId:341,Width:500,Height:700,MinWidth:500,MinHeight:700,RtbFormats:[]},
        {PublisherBannerFormatId:343,Width:500,Height:200,MinWidth:500,MinHeight:200,RtbFormats:[]},
        {PublisherBannerFormatId:344,Width:500,Height:100,MinWidth:500,MinHeight:100,RtbFormats:[]},
        {PublisherBannerFormatId:345,Width:250,Height:500,MinWidth:500,MinHeight:500,RtbFormats:[]},
        {PublisherBannerFormatId:346,Width:270,Height:200,MinWidth:500,MinHeight:200,RtbFormats:[]},
        {PublisherBannerFormatId:347,Width:280,Height:100,MinWidth:500,MinHeight:100,RtbFormats:[]},
        {PublisherBannerFormatId:348,Width:325,Height:500,MinWidth:500,MinHeight:500,RtbFormats:[]},
        {PublisherBannerFormatId:349,Width:1000,Height:500,MinWidth:1000,MinHeight:200,RtbFormats:[]},
        {PublisherBannerFormatId:350,Width:1200,Height:600,MinWidth:1000,MinHeight:100,RtbFormats:[]},
        {PublisherBannerFormatId:351,Width:1200,Height:300,MinWidth:1000,MinHeight:500,RtbFormats:[]}
    ];
*/

    $scope.formats = [
        {
            "Id": 1268,
            "PublisherBannerFormatId": 1516,
            "Width": 10,
            "Height": 30,
            "MinWidth": null,
            "MinHeight": null,
            "RtbFormats": [],
            "UnsoldUrl": ""
        },
        {
            "Id": 1270,
            "PublisherBannerFormatId": 1518,
            "Width": 100,
            "Height": 100,
            "MinWidth": null,
            "MinHeight": null,
            "RtbFormats": [],
            "UnsoldUrl": ""
        },
        {
            "Id": 1271,
            "PublisherBannerFormatId": 1519,
            "Width": 140,
            "Height": 140,
            "MinWidth": null,
            "MinHeight": null,
            "RtbFormats": [],
            "UnsoldUrl": ""
        },
        {
            "Id": 40,
            "PublisherBannerFormatId": 1034,
            "Width": 200,
            "Height": 300,
            "MinWidth": 200,
            "MinHeight": 300,
            "RtbFormats": [],
            "UnsoldUrl": ""
        },
        {
            "Id": 118,
            "PublisherBannerFormatId": 330,
            "Width": 200,
            "Height": 600,
            "MinWidth": 120,
            "MinHeight": 300,
            "RtbFormats": [
                {
                    "Id": 10,
                    "Width": 160,
                    "Height": 600,
                    "Enabled": false
                }
            ],
            "UnsoldUrl": ""
        },
        {
            "Id": 15,
            "PublisherBannerFormatId": 274,
            "Width": 250,
            "Height": 360,
            "MinWidth": 250,
            "MinHeight": 180,
            "RtbFormats": [],
            "UnsoldUrl": ""
        },
        {
            "Id": 1169,
            "PublisherBannerFormatId": 1417,
            "Width": 250,
            "Height": 600,
            "MinWidth": 250,
            "MinHeight": 250,
            "RtbFormats": [
                {
                    "Id": 18,
                    "Width": 250,
                    "Height": 360,
                    "Enabled": false
                },
                {
                    "Id": 21,
                    "Width": 250,
                    "Height": 250,
                    "Enabled": false
                }
            ],
            "UnsoldUrl": ""
        },
        {
            "Id": 1056,
            "PublisherBannerFormatId": 1313,
            "Width": 250,
            "Height": 800,
            "MinWidth": 250,
            "MinHeight": 250,
            "RtbFormats": [
                {
                    "Id": 18,
                    "Width": 250,
                    "Height": 360,
                    "Enabled": false
                },
                {
                    "Id": 21,
                    "Width": 250,
                    "Height": 250,
                    "Enabled": false
                }
            ],
            "UnsoldUrl": ""
        },
        {
            "Id": 1059,
            "PublisherBannerFormatId": 1316,
            "Width": 300,
            "Height": 60,
            "MinWidth": 300,
            "MinHeight": 50,
            "RtbFormats": [
                {
                    "Id": 43,
                    "Width": 300,
                    "Height": 50,
                    "Enabled": false
                }
            ],
            "UnsoldUrl": ""
        },
        {
            "Id": 1038,
            "PublisherBannerFormatId": 1295,
            "Width": 300,
            "Height": 250,
            "MinWidth": 300,
            "MinHeight": 250,
            "RtbFormats": [
                {
                    "Id": 5,
                    "Width": 300,
                    "Height": 250,
                    "Enabled": false
                },
                {
                    "Id": 21,
                    "Width": 250,
                    "Height": 250,
                    "Enabled": false
                }
            ],
            "UnsoldUrl": ""
        },
        {
            "Id": 915,
            "PublisherBannerFormatId": 1136,
            "Width": 320,
            "Height": 60,
            "MinWidth": 320,
            "MinHeight": 50,
            "RtbFormats": [
                {
                    "Id": 35,
                    "Width": 320,
                    "Height": 50,
                    "Enabled": false
                }
            ],
            "UnsoldUrl": ""
        },
        {
            "Id": 907,
            "PublisherBannerFormatId": 1128,
            "Width": 320,
            "Height": 320,
            "MinWidth": 300,
            "MinHeight": 50,
            "RtbFormats": [
                {
                    "Id": 5,
                    "Width": 300,
                    "Height": 250,
                    "Enabled": false
                },
                {
                    "Id": 35,
                    "Width": 320,
                    "Height": 50,
                    "Enabled": false
                },
                {
                    "Id": 40,
                    "Width": 320,
                    "Height": 320,
                    "Enabled": false
                },
                {
                    "Id": 44,
                    "Width": 320,
                    "Height": 80,
                    "Enabled": false
                }
            ],
            "UnsoldUrl": ""
        },
        {
            "Id": 1054,
            "PublisherBannerFormatId": 1311,
            "Width": 320,
            "Height": 480,
            "MinWidth": 300,
            "MinHeight": 50,
            "RtbFormats": [
                {
                    "Id": 5,
                    "Width": 300,
                    "Height": 250,
                    "Enabled": false
                },
                {
                    "Id": 35,
                    "Width": 320,
                    "Height": 50,
                    "Enabled": false
                },
                {
                    "Id": 40,
                    "Width": 320,
                    "Height": 320,
                    "Enabled": false
                },
                {
                    "Id": 44,
                    "Width": 320,
                    "Height": 80,
                    "Enabled": false
                }
            ],
            "UnsoldUrl": ""
        },
        {
            "Id": 87,
            "PublisherBannerFormatId": 290,
            "Width": 468,
            "Height": 220,
            "MinWidth": 400,
            "MinHeight": 60,
            "RtbFormats": [
                {
                    "Id": 22,
                    "Width": 467,
                    "Height": 120,
                    "Enabled": false
                },
                {
                    "Id": 47,
                    "Width": 468,
                    "Height": 220,
                    "Enabled": false
                }
            ],
            "UnsoldUrl": ""
        },
        {
            "Id": 120,
            "PublisherBannerFormatId": 332,
            "Width": 468,
            "Height": 240,
            "MinWidth": 468,
            "MinHeight": 200,
            "RtbFormats": [
                {
                    "Id": 22,
                    "Width": 467,
                    "Height": 120,
                    "Enabled": false
                },
                {
                    "Id": 47,
                    "Width": 468,
                    "Height": 220,
                    "Enabled": false
                },
                {
                    "Id": 48,
                    "Width": 468,
                    "Height": 240,
                    "Enabled": false
                }
            ],
            "UnsoldUrl": ""
        },
        {
            "Id": 1267,
            "PublisherBannerFormatId": 1515,
            "Width": 550,
            "Height": 550,
            "MinWidth": null,
            "MinHeight": null,
            "RtbFormats": [],
            "UnsoldUrl": ""
        },
        {
            "Id": 559,
            "PublisherBannerFormatId": 778,
            "Width": 620,
            "Height": 250,
            "MinWidth": 468,
            "MinHeight": 200,
            "RtbFormats": [
                {
                    "Id": 47,
                    "Width": 468,
                    "Height": 220,
                    "Enabled": false
                },
                {
                    "Id": 48,
                    "Width": 468,
                    "Height": 240,
                    "Enabled": false
                }
            ],
            "UnsoldUrl": ""
        },
        {
            "Id": 131,
            "PublisherBannerFormatId": 344,
            "Width": 770,
            "Height": 90,
            "MinWidth": 728,
            "MinHeight": 60,
            "RtbFormats": [
                {
                    "Id": 11,
                    "Width": 728,
                    "Height": 90,
                    "Enabled": false
                }
            ],
            "UnsoldUrl": ""
        },
        {
            "Id": 8,
            "PublisherBannerFormatId": 273,
            "Width": 980,
            "Height": 120,
            "MinWidth": 980,
            "MinHeight": 60,
            "RtbFormats": [
                {
                    "Id": 19,
                    "Width": 980,
                    "Height": 120,
                    "Enabled": false
                },
                {
                    "Id": 25,
                    "Width": 970,
                    "Height": 100,
                    "Enabled": false
                }
            ],
            "UnsoldUrl": ""
        },
        {
            "Id": 560,
            "PublisherBannerFormatId": 779,
            "Width": 980,
            "Height": 240,
            "MinWidth": 980,
            "MinHeight": 60,
            "RtbFormats": [
                {
                    "Id": 13,
                    "Width": 120,
                    "Height": 60,
                    "Enabled": false
                },
                {
                    "Id": 41,
                    "Width": 300,
                    "Height": 60,
                    "Enabled": false
                }
            ],
            "UnsoldUrl": ""
        },
        {
            "Id": 1055,
            "PublisherBannerFormatId": 1312,
            "Width": 980,
            "Height": 600,
            "MinWidth": 980,
            "MinHeight": 600,
            "RtbFormats": [
                {
                    "Id": 19,
                    "Width": 980,
                    "Height": 120,
                    "Enabled": false
                }
            ],
            "UnsoldUrl": ""
        },
        {
            "Id": 1269,
            "PublisherBannerFormatId": 1517,
            "Width": 1010,
            "Height": 1010,
            "MinWidth": null,
            "MinHeight": null,
            "RtbFormats": [],
            "UnsoldUrl": ""
        },
        {
            "Id": 1057,
            "PublisherBannerFormatId": 1314,
            "Width": 1250,
            "Height": 600,
            "MinWidth": 980,
            "MinHeight": 120,
            "RtbFormats": [
                {
                    "Id": 19,
                    "Width": 980,
                    "Height": 120,
                    "Enabled": false
                },
                {
                    "Id": 28,
                    "Width": 980,
                    "Height": 240,
                    "Enabled": false
                }
            ],
            "UnsoldUrl": ""
        },
        {
            "Id": 1058,
            "PublisherBannerFormatId": 1315,
            "Width": 1280,
            "Height": 800,
            "MinWidth": 980,
            "MinHeight": 120,
            "RtbFormats": [
                {
                    "Id": 19,
                    "Width": 980,
                    "Height": 120,
                    "Enabled": false
                },
                {
                    "Id": 28,
                    "Width": 980,
                    "Height": 240,
                    "Enabled": false
                }
            ],
            "UnsoldUrl": ""
        },
        {
            "Id": 1266,
            "PublisherBannerFormatId": 1514,
            "Width": 1500,
            "Height": 1500,
            "MinWidth": null,
            "MinHeight": null,
            "RtbFormats": [],
            "UnsoldUrl": ""
        },
        {
            "Id": 1272,
            "PublisherBannerFormatId": 1520,
            "Width": 2000,
            "Height": 2000,
            "MinWidth": null,
            "MinHeight": null,
            "RtbFormats": [],
            "UnsoldUrl": ""
        }
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
        {"Id":38,"Width":200,"Height":200,"Enabled":true},
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



    $scope.RtbAllformats =[
        {"Id":38,"Width":200,"Height":200,"Enabled":false},
        {"Id":14,"Width":88,"Height":31,"Enabled":true},
        {"Id":13,"Width":120,"Height":60,"Enabled":true},
        {"Id":17,"Width":120,"Height":600,"Enabled":true},
        {"Id":30,"Width":125,"Height":125,"Enabled":false},
        {"Id":50,"Width":140,"Height":350,"Enabled":false},
        {"Id":10,"Width":160,"Height":600,"Enabled":true},
        {"Id":9,"Width":180,"Height":150,"Enabled":false},
        {"Id":38,"Width":200,"Height":200,"Enabled":true},
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
        {"Id":32,"Width":1000,"Height":200,"Enabled":true},
        {"Id":33,"Width":1000,"Height":90,"Enabled":true},
        {"Id":34,"Width":1100,"Height":100,"Enabled":false},
        {"Id":35,"Width":1100,"Height":200,"Enabled":true}
    ];
    //====================================================
    //BANNERS SECTION - END
    //====================================================





}]);