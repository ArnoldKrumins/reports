/**
 * Created by arnold.krumins on 30/04/2015.
 */
app.factory('fakeDataService',function(){

    return{

        getComponents: function(){
              return [
                  {name:'Turn', settingone:'100',settingtwo:'80',settingthree:'English Auction',settingfour:'Stockholm'},
                  {name:'Sociomantic', settingone:'35',settingtwo:'60',settingthree:'Second Higest Bid',settingfour:'Lund'},
                  {name:'Digilant', settingone:'80',settingtwo:'70',settingthree:'English Auction',settingfour:'Stockholm'},
                  {name:'Delta Projects', settingone:'86',settingtwo:'86',settingthree:'English Auction',settingfour:'Stockholm'},
                  {name:'BidTheatre', settingone:'55',settingtwo:'78',settingthree:'English Auction',settingfour:'Stockholm'},
                  {name:'Appnexus', settingone:'22',settingtwo:'66',settingthree:'English Auction',settingfour:'Stockholm'},
                  {name:'Adform', settingone:'88',settingtwo:'27',settingthree:'English Auction',settingfour:'Stockholm'},
                  {name:'BidSwitch', settingone:'54',settingtwo:'89',settingthree:'English Auction',settingfour:'Stockholm'},
                  {name:'MediaMath', settingone:'54',settingtwo:'89',settingthree:'English Auction',settingfour:'Stockholm'},
                  {name:'Index (by Casale Media)', settingone:'54',settingtwo:'89',settingthree:'English Auction',settingfour:'Stockholm'},
                  {name:'BidSwitch US', settingone:'54',settingtwo:'89',settingthree:'Second Higest Bid',settingfour:'Stockholm'},
                  {name:'MediaMath US', settingone:'54',settingtwo:'89',settingthree:'English Auction',settingfour:'Stockholm'},
                  {name:'DoubleClick Bid Manager US', settingone:'54',settingtwo:'89',settingthree:'Second Higest Bid',settingfour:'Stockholm'},
                  {name:'BidTheatre - Blind', settingone:'54',settingtwo:'89',settingthree:'Second Higest Bid',settingfour:'Stockholm'}
              ];
        },


        getAdvertiserCategories: function(){

            return [
                {value:'0', name:'Adult'},
                {value:'1', name:'Arts and Entertainment/Architecture'},
                {value:'2', name:'Arts and Entertainment/Awards'},
                {value:'3', name:'Arts and Entertainment/Celebrities and Entertainment News'},
                {value:'4', name:'Arts and Entertainment/Animation and Comics'},
                {value:'5', name:'Arts and Entertainment/Fashion and Modeling'},
                {value:'6', name:'Arts and Entertainment/Humor'},
                {value:'7', name:'Arts and Entertainment/Movies'},
                {value:'8', name:'Arts and Entertainment/Music and Audio'},
                {value:'9', name:'Arts and Entertainment/Performing Arts'},
                {value:'10', name:'Arts and Entertainment/Photography'},

            ]

        }

    }

})

/*
    "success": true,
    "message": null,
    "data": {
    "SelectList": [
        {
            "Selected": false,
            "Text": "All",
            "Value": "-1"
        },
        {
            "Selected": true,
            "Text": "AdaptADX.com",
            "Value": "-2"
        },
        {
            "Selected": false,
            "Text": "Sub Publishers",
            "Value": "$$OPTGROUP$$OPTGROUP$$"
        },
        {
            "Selected": false,
            "Text": "Eskilstuna-Kuriren (EK)",
            "Value": "1176"
        },
        {
            "Selected": false,
            "Text": "Familjeliv",
            "Value": "1173"
        },
        {
            "Selected": false,
            "Text": "MittMedia Dev",
            "Value": "1174"
        }
    ]
}
