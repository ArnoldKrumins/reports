/**
 * Created by arnold.krumins on 01/05/2015.
 */
app.directive('item',function(){

    return{
        restrict:'A',
        scope:{},
        link:function(scope,element,attrs){

            element.bind('click',function(){
                element.find('i').toggleClass("fa-circle-o fa-dot-circle-o")

            });

        }
    }

})