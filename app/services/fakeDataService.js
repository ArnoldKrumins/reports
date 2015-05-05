/**
 * Created by arnold.krumins on 30/04/2015.
 */
app.factory('fakeDataService',function(){

    return{

        getComponents: function(){
              return [
                  {name:'Turn', settingone:'100',settingtwo:'80',settingthree:'80',settingfour:'90'},
                  {name:'Sociomantic', settingone:'35',settingtwo:'60',settingthree:'90',settingfour:'86'},
                  {name:'Digilant', settingone:'80',settingtwo:'70',settingthree:'100',settingfour:'35'},
                  {name:'Delta Projects', settingone:'86',settingtwo:'86',settingthree:'80',settingfour:'77'},
                  {name:'BidTheatre', settingone:'55',settingtwo:'78',settingthree:'78',settingfour:'37'},
                  {name:'Appnexus', settingone:'22',settingtwo:'66',settingthree:'44',settingfour:'97'},
                  {name:'Adform', settingone:'88',settingtwo:'27',settingthree:'47',settingfour:'25'},
                  {name:'BidSwitch', settingone:'54',settingtwo:'89',settingthree:'79',settingfour:'56'},
                  {name:'MediaMath', settingone:'54',settingtwo:'89',settingthree:'79',settingfour:'56'},
                  {name:'Index (by Casale Media)', settingone:'54',settingtwo:'89',settingthree:'79',settingfour:'56'},
                  {name:'BidSwitch US', settingone:'54',settingtwo:'89',settingthree:'79',settingfour:'56'},
                  {name:'MediaMath US', settingone:'54',settingtwo:'89',settingthree:'79',settingfour:'56'},
                  {name:'DoubleClick Bid Manager US', settingone:'54',settingtwo:'89',settingthree:'79',settingfour:'56'},
                  {name:'BidTheatre - Blind', settingone:'54',settingtwo:'89',settingthree:'79',settingfour:'56'}
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