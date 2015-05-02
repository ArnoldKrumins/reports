/**
 * Created by arnold.krumins on 30/04/2015.
 */
app.directive('components',function(){

   return{
     restrict:'EA',
       replace:false,
      scope:{ items:'='},
      template:'<ul>' +
          '<li ng-repeat="item in items" item >' +
             '<div>' +
               '<i class="fa fa-circle-o"></i>' +
               '<h5> {{ item.name }} </h5>' +
             '</div>' +
           '</li>' +
          '</ul>',
      link: function(scope,element, attrs){




      }
   }
});