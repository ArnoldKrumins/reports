/**
 * Created by arnoldkrumins on 02/05/15.
 */
app.directive('pulse',function(){

    return{
        restrict:'A',
        link:function(scope,element,attrs){
            TweenMax.to(element, 0.5, {scaleX:0.8, scaleY:0.8, force3D:true, yoyo:true, repeat:1, ease:Power1.easeInOut});
        }
    }

})