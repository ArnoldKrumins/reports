/**
 * Created by arnold.krumins on 30/04/2015.
 */
app.factory('fakeDataService',function(){

    return{

        getComponents: function(){
              return [
                  {name:'Advertiser One', settingone:'100',settingtwo:'80',settingthree:'80',settingfour:'90'},
                  {name:'Advertiser Two', settingone:'35',settingtwo:'60',settingthree:'90',settingfour:'86'},
                  {name:'Advertiser Three', settingone:'80',settingtwo:'70',settingthree:'100',settingfour:'35'},
                  {name:'Advertiser Four', settingone:'86',settingtwo:'86',settingthree:'80',settingfour:'77'},
                  {name:'Advertiser Five', settingone:'55',settingtwo:'78',settingthree:'78',settingfour:'37'},
                  {name:'Advertiser Six', settingone:'22',settingtwo:'66',settingthree:'44',settingfour:'97'},
                  {name:'Advertiser Seven', settingone:'88',settingtwo:'27',settingthree:'47',settingfour:'25'},
                  {name:'Advertiser Eight', settingone:'54',settingtwo:'89',settingthree:'79',settingfour:'56'}
              ];
        }

    }

})