/**
 * Created by arnold.krumins on 30/04/2015.
 */
app.factory('fakeDataService',function(){

    return{

        getComponents: function(){
              return [
                  {name:'Advertiser One', sales:'100%'},
                  {name:'Advertiser Two', sales:'35%'},
                  {name:'Advertiser Three', sales:'80%'},
                  {name:'Advertiser Four', sales:'86%'},
                  {name:'Advertiser Five', sales:'55%'},
                  {name:'Advertiser Six', sales:'22%'},
                  {name:'Advertiser Seven', sales:'88%'},
                  {name:'Advertiser Eight', sales:'54%'}
              ];
        }

    }

})