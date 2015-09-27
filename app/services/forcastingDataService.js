/**
 * Created by arnoldkrumins on 12/09/15.
 */
app.factory('forecastingDataService',['$q','$timeout',function($q,$timeout){


var data =  {"Datas":[{"avails":"14422464.7441586","group":"2015-09-08 00:00:00","maybeSold":null,"revenue":"7.1299746046699","sold":"5347.59538159409","unsold":"0"},{"avails":"19032091.9630928","group":"2015-09-09 00:00:00","maybeSold":null,"revenue":"7.39953324077412","sold":"5347.59538159409","unsold":"0"},{"avails":"16106957.2893605","group":"2015-09-10 00:00:00","maybeSold":null,"revenue":"22.5484634989236","sold":"16089.7848181856","unsold":"0"},{"avails":"18272733.4189063","group":"2015-09-11 00:00:00","maybeSold":null,"revenue":"7.55179599833616","sold":"5347.59538159409","unsold":"0"},{"avails":"10174619.2347779","group":"2015-09-14 00:00:00","maybeSold":null,"revenue":"7.19526166229933","sold":"5271.82343770879","unsold":"0"},{"avails":"10838868.9879293","group":"2015-09-15 00:00:00","maybeSold":null,"revenue":"7.8659004979204","sold":"5271.82343770879","unsold":"0"},{"avails":"14423708.9255717","group":"2015-09-16 00:00:00","maybeSold":null,"revenue":"21.4648300717967","sold":"15815.4703131264","unsold":"0"},{"avails":"11935408.2629729","group":"2015-09-17 00:00:00","maybeSold":null,"revenue":"7.21457468021878","sold":"5271.82343770879","unsold":"0"},{"avails":"13142655.8302083","group":"2015-09-18 00:00:00","maybeSold":null,"revenue":"16.6538019988263","sold":"5271.82343770879","unsold":"0"},{"avails":"11308061.2738854","group":"2015-09-20 00:00:00","maybeSold":null,"revenue":"7.39534534135314","sold":"5271.82343770879","unsold":"0"},{"avails":"8012896.01816945","group":"2015-09-21 00:00:00","maybeSold":null,"revenue":"8.20120252147571","sold":"5303.04170626712","unsold":"0"},{"avails":"11523509.6277186","group":"2015-09-23 00:00:00","maybeSold":null,"revenue":"15.1104665018528","sold":"10606.0834125342","unsold":"0"},{"avails":"9524262.90445569","group":"2015-09-24 00:00:00","maybeSold":null,"revenue":"14.8915611205251","sold":"10606.0834125342","unsold":"0"},{"avails":"6869335.19514024","group":"2015-09-29 00:00:00","maybeSold":null,"revenue":"14.7334354725679","sold":"10625.4218022275","unsold":"0"},{"avails":"9642570.28552162","group":"2015-09-30 00:00:00","maybeSold":null,"revenue":"22.0790950062647","sold":"15938.1327033412","unsold":"0"},{"avails":"6545259.83017228","group":"2015-10-03 00:00:00","maybeSold":null,"revenue":"7.67645363361425","sold":"5312.71090111374","unsold":"0"},{"avails":"7724681.65021962","group":"2015-10-04 00:00:00","maybeSold":null,"revenue":"18.8681803460525","sold":"10625.4218022275","unsold":"0"},{"avails":"7368638.40004738","group":"2015-10-09 00:00:00","maybeSold":null,"revenue":"14.3239989685817","sold":"10519.1126339004","unsold":"0"},{"avails":"5976295.08971753","group":"2015-10-21 00:00:00","maybeSold":null,"revenue":"7.43119690000105","sold":"5393.76813151391","unsold":"0"},{"avails":"4746515.95573232","group":"2015-10-25 00:00:00","maybeSold":null,"revenue":"11.8760377259865","sold":"5393.76813151391","unsold":"0"},{"avails":"5465847.46006386","group":"2015-10-28 00:00:00","maybeSold":null,"revenue":"7.59003169953068","sold":"5230.47603833866","unsold":"0"},{"avails":"4670815.10223639","group":"2015-10-30 00:00:00","maybeSold":null,"revenue":"6.88809117032921","sold":"5230.47603833866","unsold":"0"},{"avails":"4010369.04240954","group":"2015-11-05 00:00:00","maybeSold":null,"revenue":"11.005466611681","sold":"5297.71339816316","unsold":"0"},{"avails":"4540140.38222586","group":"2015-11-06 00:00:00","maybeSold":null,"revenue":"7.17785662137919","sold":"5297.71339816316","unsold":"0"},{"avails":"3056780.63074016","group":"2015-11-07 00:00:00","maybeSold":null,"revenue":"7.13637401983387","sold":"5297.71339816316","unsold":"0"},{"avails":"2781789.51495908","group":"2015-11-21 00:00:00","maybeSold":null,"revenue":"6.90830427384718","sold":"5258.58131372221","unsold":"0"},{"avails":"2624471.23016469","group":"2015-11-24 00:00:00","maybeSold":null,"revenue":"7.18411142165781","sold":"5312.69479790419","unsold":"0"},{"avails":"2645722.0093563","group":"2015-11-26 00:00:00","maybeSold":null,"revenue":"7.49865438970026","sold":"5312.69479790419","unsold":"0"}],"GroupBy":"day","Type":"calendarviewavails"}


    return{

            get: function(forecastParams ){

                console.log(forecastParams.sDate);
                console.log(forecastParams.eDate);

                var deferred = $q.defer();

                $timeout(function() {
                    deferred.resolve(data);
                }, 2000);

                return deferred.promise;
            }

    }

}]);


/*app.factory('forecastingDataService', ['$http', '$q', '$log', function ($http, $q, $log) {


    var callback ="&callback=JSON_CALLBACK";


    function logError(data, status, headers, config) {
        $log.info(data);
        $log.info(status);
        $log.info(headers);
        $log.info(config);
    }

    function callApiGet(url) {


        var deferred = $q.defer();
        $http.get(url).success(function (data) {
            deferred.resolve(data);
        }).error(function (data, status, headers, config) {
            logError(data, status, headers, config);
            deferred.reject("an error occured while calling Service");
        });

        return deferred.promise;
    }

    function callApiPost(url,value) {

        var deferred = $q.defer();
        $http.post(url, JSON.stringify(value)).success(function (data) {
            deferred.resolve(data);
        }).error(function (data, status, headers, config) {
            logError(data, status, headers, config);
            deferred.reject("an error occured while calling Service");
        });

        return deferred.promise;
    }


    function getOrder(startDate, endDate){

        var order =  {
            "Active": false,
            "Advertiser": {
                "Address": {
                    "City": "1",
                    "Country": "",
                    "Street": "1",
                    "ZipCode": "1"
                },
                "Agency": null,
                "Contacts": null,
                "CorporateIdentificationNumber": "1",
                "CustomFields": {
                    "Limit": null,
                    "Offset": null,
                    "Field": [
                        {
                            "Id": 13624,
                            "Name": "ValidAddress",
                            "Type": "String",
                            "Value": "1"
                        }
                    ]
                },
                "DefaultUserId": null,
                "ExclusionLists": null,
                "Id": 1730414,
                "InclusionLists": null,
                "InvoicingAddress": null,
                "Name": "CASUS FINANSE S.A.",
                "OrderConfirmationMailRecipient": "none",
                "Packages": null,
                "Permissions": null,
                "PhoneNumber": "1"
            },
            "AdvertiserId": 1730414,
            "CPAActivated": false,
            "CampaignName": "Casus_011215",
            "ConfirmationState": "ConfirmedNoPendingChanges",
            "Confirmed": true,
            "ContactPerson": {
                "Email": "spolol@asssspolo.pl",
                "EmailInterval": "none",
                "Id": 13782,
                "MobilePhoneNumber": "1",
                "Name": "1",
                "Password": null,
                "PhoneNumber": "1",
                "Roles": {
                    "Role": [
                        "AdvertiserTraffic",
                        "AllowCreatives",
                        "AllowTextAds"
                    ]
                },
                "UiCulture": "pl-PL"
            },
            "ContactPersonId": 13782,
            "CpaBids": null,
            "CpaImpressionCap": null,
            "CpcBid": 0.77,
            "CpmBid": 1.3,
            "CustomFields": {
                "Limit": null,
                "Offset": null,
                "Field": [
                    {
                        "Id": 4695441,
                        "Name": "Udzial agencji",
                        "Recurring": false,
                        "Type": "String",
                        "Value": "0%"
                    },
                    {
                        "Id": 4695442,
                        "Name": "Agencja",
                        "Recurring": false,
                        "Type": "String",
                        "Value": "CK Praca ISP"
                    },
                    {
                        "Id": 4695443,
                        "Name": "Run on AdTaily?",
                        "Recurring": false,
                        "Type": "String",
                        "Value": "No"
                    }
                ]
            },
            "DailyBudget": null,
            "DailyBudgetType": "no-daily-budget",
            "DailyRemainingBudget": null,
            "EndDate": endDate,
            "Formats": {
                "Format": [
                    {
                        "Height": null,
                        "Id": null,
                        "MinHeight": null,
                        "MinWidth": null,
                        "Name": "Text Ads",
                        "Width": null,
                        "MissingInOrder": true,
                        "Required": false,
                        "Type": "text-ad"
                    },
                    {
                        "Height": 150,
                        "Id": null,
                        "MinHeight": 150,
                        "MinWidth": 100,
                        "Name": "100x150",
                        "Width": 100,
                        "MissingInOrder": true,
                        "Required": false,
                        "Type": "creative"
                    },
                    {
                        "Height": 300,
                        "Id": null,
                        "MinHeight": 300,
                        "MinWidth": 100,
                        "Name": "100x300",
                        "Width": 100,
                        "MissingInOrder": true,
                        "Required": false,
                        "Type": "creative"
                    },
                    {
                        "Height": 600,
                        "Id": null,
                        "MinHeight": 600,
                        "MinWidth": 120,
                        "Name": "120x600",
                        "Width": 120,
                        "MissingInOrder": true,
                        "Required": false,
                        "Type": "creative"
                    },
                    {
                        "Height": 125,
                        "Id": null,
                        "MinHeight": 125,
                        "MinWidth": 125,
                        "Name": "125x125",
                        "Width": 125,
                        "MissingInOrder": false,
                        "Required": false,
                        "Type": "creative"
                    },
                    {
                        "Height": 600,
                        "Id": null,
                        "MinHeight": 600,
                        "MinWidth": 160,
                        "Name": "160x600",
                        "Width": 160,
                        "MissingInOrder": true,
                        "Required": false,
                        "Type": "creative"
                    },
                    {
                        "Height": 64,
                        "Id": null,
                        "MinHeight": 64,
                        "MinWidth": 190,
                        "Name": "190x64",
                        "Width": 190,
                        "MissingInOrder": true,
                        "Required": false,
                        "Type": "creative"
                    },
                    {
                        "Height": 250,
                        "Id": null,
                        "MinHeight": 250,
                        "MinWidth": 300,
                        "Name": "300x250",
                        "Width": 300,
                        "MissingInOrder": true,
                        "Required": false,
                        "Type": "creative"
                    },
                    {
                        "Height": 90,
                        "Id": null,
                        "MinHeight": 90,
                        "MinWidth": 300,
                        "Name": "300x90",
                        "Width": 300,
                        "MissingInOrder": true,
                        "Required": false,
                        "Type": "creative"
                    },
                    {
                        "Height": 100,
                        "Id": null,
                        "MinHeight": 100,
                        "MinWidth": 620,
                        "Name": "620x100",
                        "Width": 620,
                        "MissingInOrder": true,
                        "Required": false,
                        "Type": "creative"
                    },
                    {
                        "Height": 100,
                        "Id": null,
                        "MinHeight": 100,
                        "MinWidth": 700,
                        "Name": "700x100",
                        "Width": 700,
                        "MissingInOrder": true,
                        "Required": false,
                        "Type": "creative"
                    },
                    {
                        "Height": 90,
                        "Id": null,
                        "MinHeight": 90,
                        "MinWidth": 728,
                        "Name": "728x90",
                        "Width": 728,
                        "MissingInOrder": true,
                        "Required": false,
                        "Type": "creative"
                    },
                    {
                        "Height": 100,
                        "Id": null,
                        "MinHeight": 100,
                        "MinWidth": 750,
                        "Name": "750x100",
                        "Width": 750,
                        "MissingInOrder": true,
                        "Required": false,
                        "Type": "creative"
                    },
                    {
                        "Height": 200,
                        "Id": null,
                        "MinHeight": 90,
                        "MinWidth": 728,
                        "Name": "750x200",
                        "Width": 750,
                        "MissingInOrder": true,
                        "Required": false,
                        "Type": "creative"
                    },
                    {
                        "Height": 110,
                        "Id": null,
                        "MinHeight": 110,
                        "MinWidth": 940,
                        "Name": "940x110",
                        "Width": 940,
                        "MissingInOrder": true,
                        "Required": false,
                        "Type": "creative"
                    }
                ]
            },
            "FrequencyCaps": null,
            "Id": 1746840,
            "Impressions": null,
            "Materials": {
                "Limit": null,
                "Offset": null,
                "Material": [
                    {
                        "Active": true,
                        "ClickTag": null,
                        "ClickTested": true,
                        "CpaBids": null,
                        "CpcBid": null,
                        "CpmBid": null,
                        "CreateDate": "2015-01-26",
                        "Creative": {
                            "BackupImage": null,
                            "ContentType": "imagegif",
                            "CreativeUrl": "http:s.atemda.comm97141730414433366e6629074dca45b9ab0f038dcb2ec27b.gif",
                            "Data": null,
                            "FormatHeight": 125,
                            "FormatWidth": 125,
                            "Height": 125,
                            "NeedsDirectAccess": false,
                            "Width": 125
                        },
                        "DestinationUrl": "http:gazetapraca.plcasus",
                        "DeviceTargeting": {
                            "Device": []
                        },
                        "Id": 7030976,
                        "MobileDestinationUrl": "",
                        "Name": "33008340_1.gif",
                        "RetargetingProbes": null,
                        "Status": "Approved",
                        "SupportSsl": true,
                        "TextAd": null,
                        "TrackingPixel": null,
                        "Type": "Image"
                    },
                    {
                        "Active": true,
                        "ClickTag": null,
                        "ClickTested": true,
                        "CpaBids": null,
                        "CpcBid": null,
                        "CpmBid": null,
                        "CreateDate": "2015-01-26",
                        "Creative": {
                            "BackupImage": null,
                            "ContentType": "imagegif",
                            "CreativeUrl": "http:s.atemda.comm971417304144333694d973a5b101464e955cf861a65b81f1.gif",
                            "Data": null,
                            "FormatHeight": 125,
                            "FormatWidth": 125,
                            "Height": 125,
                            "NeedsDirectAccess": false,
                            "Width": 125
                        },
                        "DestinationUrl": "http:gazetapraca.plcasus",
                        "DeviceTargeting": {
                            "Device": []
                        },
                        "Id": 7030977,
                        "MobileDestinationUrl": "",
                        "Name": "33008340_2.gif",
                        "RetargetingProbes": null,
                        "Status": "Approved",
                        "SupportSsl": true,
                        "TextAd": null,
                        "TrackingPixel": null,
                        "Type": "Image"
                    },
                    {
                        "Active": true,
                        "ClickTag": null,
                        "ClickTested": true,
                        "CpaBids": null,
                        "CpcBid": null,
                        "CpmBid": null,
                        "CreateDate": "2015-01-26",
                        "Creative": {
                            "BackupImage": null,
                            "ContentType": "imagegif",
                            "CreativeUrl": "http:s.atemda.comm971417304144333620c08420a6f4457882d53b82c2739625.gif",
                            "Data": null,
                            "FormatHeight": 125,
                            "FormatWidth": 125,
                            "Height": 125,
                            "NeedsDirectAccess": false,
                            "Width": 125
                        },
                        "DestinationUrl": "http:gazetapraca.plcasus",
                        "DeviceTargeting": {
                            "Device": []
                        },
                        "Id": 7030978,
                        "MobileDestinationUrl": "",
                        "Name": "33008340_3.gif",
                        "RetargetingProbes": null,
                        "Status": "Approved",
                        "SupportSsl": true,
                        "TextAd": null,
                        "TrackingPixel": null,
                        "Type": "Image"
                    },
                    {
                        "Active": true,
                        "ClickTag": null,
                        "ClickTested": true,
                        "CpaBids": null,
                        "CpcBid": null,
                        "CpmBid": null,
                        "CreateDate": "2015-01-26",
                        "Creative": {
                            "BackupImage": null,
                            "ContentType": "imagegif",
                            "CreativeUrl": "http:s.atemda.comm9714173041443336d50f5d6881ab4594a4175ebd9e221b7b.gif",
                            "Data": null,
                            "FormatHeight": 125,
                            "FormatWidth": 125,
                            "Height": 125,
                            "NeedsDirectAccess": false,
                            "Width": 125
                        },
                        "DestinationUrl": "http:gazetapraca.plcasus",
                        "DeviceTargeting": {
                            "Device": []
                        },
                        "Id": 7030979,
                        "MobileDestinationUrl": "",
                        "Name": "33008340_4.gif",
                        "RetargetingProbes": null,
                        "Status": "Approved",
                        "SupportSsl": true,
                        "TextAd": null,
                        "TrackingPixel": null,
                        "Type": "Image"
                    }
                ]
            },
            "OrderNumber": "43359",
            "Packages": {
                "Limit": null,
                "Offset": null,
                "Package": []
            },
            "Paused": false,
            "Placements": {
                "Limit": null,
                "Offset": null,
                "Placement": []
            },
            "ReasonsHalted": {
                "Limit": null,
                "Offset": null,
                "Reason": [
                    "NotInActivePeriod"
                ]
            },
            "RetargetingProbes": null,
            "Ron": true,
            "SalesPersonEmail": "danuta@adtaily.com",
            "Sites": {
                "Limit": null,
                "Offset": null,
                "Site": []
            },
            "StartDate": startDate,
            "SuperPackageId": null,
            "TimeTargetingExpressions": null,
            "TotalBudget": 309,
            "TotalRemainingBudget": 309,
            "Type": "optimized",
            "UpcomingBudgets": {
                "Limit": null,
                "Offset": null,
                "UpcomingBudget": []
            },
            "UseIncrementalUpcomingBudgets": false,
            "VisitorTags": {
                "Limit": null,
                "Offset": null,
                "VisitorTag": []
            }
        }

        return order;

    }



    return {

        apipath: 'http://192.168.86.117:9002/api/forecasting?publisherid=97&operation=calendarviewavails&aggregatefunction=sum&groupby=day&runauction=true&order={%22Active%22:false,%22Advertiser%22:{%22Address%22:{%22City%22:%221%22,%22Country%22:%22%22,%22Street%22:%221%22,%22ZipCode%22:%221%22},%22Agency%22:null,%22Contacts%22:null,%22CorporateIdentificationNumber%22:%221%22,%22CustomFields%22:{%22Limit%22:null,%22Offset%22:null,%22Field%22:[{%22Id%22:13624,%22Name%22:%22ValidAddress%22,%22Type%22:%22String%22,%22Value%22:%221%22}]},%22DefaultUserId%22:null,%22ExclusionLists%22:null,%22Id%22:1730414,%22InclusionLists%22:null,%22InvoicingAddress%22:null,%22Name%22:%22CASUS%20FINANSE%20S.A.%22,%22OrderConfirmationMailRecipient%22:%22none%22,%22Packages%22:null,%22Permissions%22:null,%22PhoneNumber%22:%221%22},%22AdvertiserId%22:1730414,%22CPAActivated%22:false,%22CampaignName%22:%22Casus_011215%22,%22ConfirmationState%22:%22ConfirmedNoPendingChanges%22,%22Confirmed%22:true,%22ContactPerson%22:{%22Email%22:%22spolol@asssspolo.pl%22,%22EmailInterval%22:%22none%22,%22Id%22:13782,%22MobilePhoneNumber%22:%221%22,%22Name%22:%221%22,%22Password%22:null,%22PhoneNumber%22:%221%22,%22Roles%22:{%22Role%22:[%22AdvertiserTraffic%22,%22AllowCreatives%22,%22AllowTextAds%22]},%22UiCulture%22:%22pl-PL%22},%22ContactPersonId%22:13782,%22CpaBids%22:null,%22CpaImpressionCap%22:null,%22CpcBid%22:2.77,%22CpmBid%22:0,%22CustomFields%22:{%22Limit%22:null,%22Offset%22:null,%22Field%22:[{%22Id%22:4695441,%22Name%22:%22Udzial%20agencji%22,%22Recurring%22:false,%22Type%22:%22String%22,%22Value%22:%220%%22},{%22Id%22:4695442,%22Name%22:%22Agencja%22,%22Recurring%22:false,%22Type%22:%22String%22,%22Value%22:%22CK%20Praca%20ISP%22},{%22Id%22:4695443,%22Name%22:%22Run%20on%20AdTaily?%22,%22Recurring%22:false,%22Type%22:%22String%22,%22Value%22:%22No%22}]},%22DailyBudget%22:null,%22DailyBudgetType%22:%22no-daily-budget%22,%22DailyRemainingBudget%22:null,%22EndDate%22:%222015-12-15%22,%22Formats%22:{%22Format%22:[{%22Height%22:null,%22Id%22:null,%22MinHeight%22:null,%22MinWidth%22:null,%22Name%22:%22Text%20Ads%22,%22Width%22:null,%22MissingInOrder%22:true,%22Required%22:false,%22Type%22:%22text-ad%22},{%22Height%22:150,%22Id%22:null,%22MinHeight%22:150,%22MinWidth%22:100,%22Name%22:%22100x150%22,%22Width%22:100,%22MissingInOrder%22:true,%22Required%22:false,%22Type%22:%22creative%22},{%22Height%22:300,%22Id%22:null,%22MinHeight%22:300,%22MinWidth%22:100,%22Name%22:%22100x300%22,%22Width%22:100,%22MissingInOrder%22:true,%22Required%22:false,%22Type%22:%22creative%22},{%22Height%22:600,%22Id%22:null,%22MinHeight%22:600,%22MinWidth%22:120,%22Name%22:%22120x600%22,%22Width%22:120,%22MissingInOrder%22:true,%22Required%22:false,%22Type%22:%22creative%22},{%22Height%22:125,%22Id%22:null,%22MinHeight%22:125,%22MinWidth%22:125,%22Name%22:%22125x125%22,%22Width%22:125,%22MissingInOrder%22:false,%22Required%22:false,%22Type%22:%22creative%22},{%22Height%22:600,%22Id%22:null,%22MinHeight%22:600,%22MinWidth%22:160,%22Name%22:%22160x600%22,%22Width%22:160,%22MissingInOrder%22:true,%22Required%22:false,%22Type%22:%22creative%22},{%22Height%22:64,%22Id%22:null,%22MinHeight%22:64,%22MinWidth%22:190,%22Name%22:%22190x64%22,%22Width%22:190,%22MissingInOrder%22:true,%22Required%22:false,%22Type%22:%22creative%22},{%22Height%22:250,%22Id%22:null,%22MinHeight%22:250,%22MinWidth%22:300,%22Name%22:%22300x250%22,%22Width%22:300,%22MissingInOrder%22:true,%22Required%22:false,%22Type%22:%22creative%22},{%22Height%22:90,%22Id%22:null,%22MinHeight%22:90,%22MinWidth%22:300,%22Name%22:%22300x90%22,%22Width%22:300,%22MissingInOrder%22:true,%22Required%22:false,%22Type%22:%22creative%22},{%22Height%22:100,%22Id%22:null,%22MinHeight%22:100,%22MinWidth%22:620,%22Name%22:%22620x100%22,%22Width%22:620,%22MissingInOrder%22:true,%22Required%22:false,%22Type%22:%22creative%22},{%22Height%22:100,%22Id%22:null,%22MinHeight%22:100,%22MinWidth%22:700,%22Name%22:%22700x100%22,%22Width%22:700,%22MissingInOrder%22:true,%22Required%22:false,%22Type%22:%22creative%22},{%22Height%22:90,%22Id%22:null,%22MinHeight%22:90,%22MinWidth%22:728,%22Name%22:%22728x90%22,%22Width%22:728,%22MissingInOrder%22:true,%22Required%22:false,%22Type%22:%22creative%22},{%22Height%22:100,%22Id%22:null,%22MinHeight%22:100,%22MinWidth%22:750,%22Name%22:%22750x100%22,%22Width%22:750,%22MissingInOrder%22:true,%22Required%22:false,%22Type%22:%22creative%22},{%22Height%22:200,%22Id%22:null,%22MinHeight%22:90,%22MinWidth%22:728,%22Name%22:%22750x200%22,%22Width%22:750,%22MissingInOrder%22:true,%22Required%22:false,%22Type%22:%22creative%22},{%22Height%22:110,%22Id%22:null,%22MinHeight%22:110,%22MinWidth%22:940,%22Name%22:%22940x110%22,%22Width%22:940,%22MissingInOrder%22:true,%22Required%22:false,%22Type%22:%22creative%22}]},%22FrequencyCaps%22:null,%22Id%22:1746840,%22Impressions%22:null,%22Materials%22:{%22Limit%22:null,%22Offset%22:null,%22Material%22:[{%22Active%22:true,%22ClickTag%22:null,%22ClickTested%22:true,%22CpaBids%22:null,%22CpcBid%22:null,%22CpmBid%22:null,%22CreateDate%22:%222015-01-26%22,%22Creative%22:{%22BackupImage%22:null,%22ContentType%22:%22imagegif%22,%22CreativeUrl%22:%22http:s.atemda.comm97141730414433366e6629074dca45b9ab0f038dcb2ec27b.gif%22,%22Data%22:null,%22FormatHeight%22:125,%22FormatWidth%22:125,%22Height%22:125,%22NeedsDirectAccess%22:false,%22Width%22:125},%22DestinationUrl%22:%22http:gazetapraca.plcasus%22,%22DeviceTargeting%22:{%22Device%22:[]},%22Id%22:7030976,%22MobileDestinationUrl%22:%22%22,%22Name%22:%2233008340_1.gif%22,%22RetargetingProbes%22:null,%22Status%22:%22Approved%22,%22SupportSsl%22:true,%22TextAd%22:null,%22TrackingPixel%22:null,%22Type%22:%22Image%22},{%22Active%22:true,%22ClickTag%22:null,%22ClickTested%22:true,%22CpaBids%22:null,%22CpcBid%22:null,%22CpmBid%22:null,%22CreateDate%22:%222015-01-26%22,%22Creative%22:{%22BackupImage%22:null,%22ContentType%22:%22imagegif%22,%22CreativeUrl%22:%22http:s.atemda.comm971417304144333694d973a5b101464e955cf861a65b81f1.gif%22,%22Data%22:null,%22FormatHeight%22:125,%22FormatWidth%22:125,%22Height%22:125,%22NeedsDirectAccess%22:false,%22Width%22:125},%22DestinationUrl%22:%22http:gazetapraca.plcasus%22,%22DeviceTargeting%22:{%22Device%22:[]},%22Id%22:7030977,%22MobileDestinationUrl%22:%22%22,%22Name%22:%2233008340_2.gif%22,%22RetargetingProbes%22:null,%22Status%22:%22Approved%22,%22SupportSsl%22:true,%22TextAd%22:null,%22TrackingPixel%22:null,%22Type%22:%22Image%22},{%22Active%22:true,%22ClickTag%22:null,%22ClickTested%22:true,%22CpaBids%22:null,%22CpcBid%22:null,%22CpmBid%22:null,%22CreateDate%22:%222015-01-26%22,%22Creative%22:{%22BackupImage%22:null,%22ContentType%22:%22imagegif%22,%22CreativeUrl%22:%22http:s.atemda.comm971417304144333620c08420a6f4457882d53b82c2739625.gif%22,%22Data%22:null,%22FormatHeight%22:125,%22FormatWidth%22:125,%22Height%22:125,%22NeedsDirectAccess%22:false,%22Width%22:125},%22DestinationUrl%22:%22http:gazetapraca.plcasus%22,%22DeviceTargeting%22:{%22Device%22:[]},%22Id%22:7030978,%22MobileDestinationUrl%22:%22%22,%22Name%22:%2233008340_3.gif%22,%22RetargetingProbes%22:null,%22Status%22:%22Approved%22,%22SupportSsl%22:true,%22TextAd%22:null,%22TrackingPixel%22:null,%22Type%22:%22Image%22},{%22Active%22:true,%22ClickTag%22:null,%22ClickTested%22:true,%22CpaBids%22:null,%22CpcBid%22:null,%22CpmBid%22:null,%22CreateDate%22:%222015-01-26%22,%22Creative%22:{%22BackupImage%22:null,%22ContentType%22:%22imagegif%22,%22CreativeUrl%22:%22http:s.atemda.comm9714173041443336d50f5d6881ab4594a4175ebd9e221b7b.gif%22,%22Data%22:null,%22FormatHeight%22:125,%22FormatWidth%22:125,%22Height%22:125,%22NeedsDirectAccess%22:false,%22Width%22:125},%22DestinationUrl%22:%22http:gazetapraca.plcasus%22,%22DeviceTargeting%22:{%22Device%22:[]},%22Id%22:7030979,%22MobileDestinationUrl%22:%22%22,%22Name%22:%2233008340_4.gif%22,%22RetargetingProbes%22:null,%22Status%22:%22Approved%22,%22SupportSsl%22:true,%22TextAd%22:null,%22TrackingPixel%22:null,%22Type%22:%22Image%22}]},%22OrderNumber%22:%2243359%22,%22Packages%22:{%22Limit%22:null,%22Offset%22:null,%22Package%22:[]},%22Paused%22:false,%22Placements%22:{%22Limit%22:null,%22Offset%22:null,%22Placement%22:[]},%22ReasonsHalted%22:{%22Limit%22:null,%22Offset%22:null,%22Reason%22:[%22NotInActivePeriod%22]},%22RetargetingProbes%22:null,%22Ron%22:true,%22SalesPersonEmail%22:%22danuta@adtaily.com%22,%22Sites%22:{%22Limit%22:null,%22Offset%22:null,%22Site%22:[]},%22StartDate%22:%222014-12-01%22,%22SuperPackageId%22:null,%22TimeTargetingExpressions%22:null,%22TotalBudget%22:10000,%22TotalRemainingBudget%22:10000,%22Type%22:%22optimized%22,%22UpcomingBudgets%22:{%22Limit%22:null,%22Offset%22:null,%22UpcomingBudget%22:[]},%22UseIncrementalUpcomingBudgets%22:false,%22VisitorTags%22:{%22Limit%22:null,%22Offset%22:null,%22VisitorTag%22:[]}}',


            get: function (forecastParams) {
            var url = this.apipath //  + JSON.stringify(getOrder(startDate, endDate));
            return callApiGet(url);
        },

    }

}]);*/






