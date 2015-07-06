/**
 * Created by akrumins on 03/07/2015.
 */
app.directive('rtbBannerFormats',function(){

    return{
        restrict:'EA',
        scope:{ bannerFormats:'=rtbBannerFormats' },
        template:'<div>' +
                    '<ul class="rtb-banner-formats" ng-repeat="(Width, bannerInfo) in bannerFormats"><span class="banner-header">{{ Width.toString().concat(\'+\') }} </span>' +
                        '<li ng-repeat="banner in bannerInfo | orderBy:[\'Width\',\'Height\']">' +
                            '<span><input type="checkbox" ng-model="banner.Enabled" />{{ banner.Width.toString().concat(\'x\',banner.Height.toString())}}</span>' +
                        '</li>' +
                    '</ul>' +
                  '</div>',
        link:function(scope,__,__){


        }
    }

})