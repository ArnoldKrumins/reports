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
        }

    }

})