/**
 * Created by arnoldkrumins on 02/07/15.
 */
app.directive('bannerFormats',function(){

    return{
        restrict:'EA',
        scope:{ bannerFormats:'=bannerFormats' },
        template:'<div>' +
                    '<ul class="banner-formats" ng-repeat="(Width, langMovs) in banners">{{ Width }}' +
                        '<li ng-repeat="mov in langMovs">{{ mov.Width.toString().concat(\'x\',mov.Height.toString())}}</li>' +
                    '</ul>' +
                '</div>',
        link:function(scope,element,attrs){


            scope.banners = _.groupBy(scope.bannerFormats, 'Width');




        }



    }

})