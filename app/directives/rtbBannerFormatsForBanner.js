/**
 * Created by akrumins on 06/07/2015.
 */
app.directive('rtbBannerFormatsForBanner',function(){

    return{
        restrict:'EA',
        scope:{ bannerFormats:'=rtbBannerFormatsForBanner', selectedRtbBanners:'=' },
        template:'<div>' +
                    '<ul class="rtb-banner-formats" ng-repeat="bannerInfo in bannerFormats | toArray">' +
                            '<span class="banner-header">{{ bannerInfo.$key.concat(\'+\') }} </span>' +
                         '<li ng-repeat="banner in bannerInfo | orderBy:[\'Width\',\'Height\']" ng-class="{ \'banner-disabled\': hasNoData(banner.Enabled) }">' +
                            '<span><input type="checkbox" ng-disabled="hasNoData(banner.Enabled)" ng-model="banner.Enabled" />{{ banner.Width.toString().concat(\'x\',banner.Height.toString())}}</span>' +
                        '</li>' +
                    '</ul>' +
                '</div>',
        link:function(scope,__,__){



            scope.hasNoData = function(value){
                //return angular.isUndefined(scope.selectedRtbBanners);
                return angular.isUndefined(value) || value === null;
            }

        }
    }

})
