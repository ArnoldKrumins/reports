/**
 * Created by arnoldkrumins on 02/07/15.
 */
app.directive('bannerFormats',function($timeout,$filter){

    return{
        restrict:'EA',
        scope:{ bannerFormats:'=bannerFormats', getRtbFormats:"&",selectedBanner:"=" },
        template:'<div>' +
                    '<ul class="banner-formats" ng-repeat="bannerInfo in bannerFormats | toArray">' +
                        '<span class="banner-header">{{ bannerInfo.$key.concat(\'+\') }} </span>' +
                            '<li  ng-click="select(banner)" ng-repeat="banner in bannerInfo | orderBy:[\'Width\',\'Height\']">' +
                                '<div ng-class="{ \'bannerselected\': banner.PublisherBannerFormatId === selectedBanner }">{{ banner.Width.toString().concat(\'x\',banner.Height.toString())}}</div>' +
                            '</li>' +
                    '</ul>' +
                '</div>',
        link:function(scope,__,__){

            scope.select = function(value){
                $timeout(function(){
                    scope.$apply(function(){
                        scope.selectedBanner = value.PublisherBannerFormatId;
                        scope.getRtbFormats({rtbBannersForBanner:value.RtbFormats,bannerWidth:value.Width});
                    })
                },0)
            }

        }
    }

})