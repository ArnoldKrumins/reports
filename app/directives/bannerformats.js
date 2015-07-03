/**
 * Created by arnoldkrumins on 02/07/15.
 */
app.directive('bannerFormats',function(){

    return{
        restrict:'EA',
        scope:{ bannerFormats:'=bannerFormats' },
        template:'<div>' +
                    '<ul class="banner-formats" ng-repeat="(Width, bannerInfo) in banners">{{ Width }}' +
                        '<li ng-repeat="banner in bannerInfo | orderBy:[\'Width\',\'Height\']">{{ banner.Width.toString().concat(\'x\',banner.Height.toString())}}</li>' +
                    '</ul>' +
                '</div>',
        link:function(scope,__,__){

            scope.banners =  _.groupBy(scope.bannerFormats, function(banner) {
                return this.floor(banner.Width/100.0)*100;
            }, Math);
        }
    }

})