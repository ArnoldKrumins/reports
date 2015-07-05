/**
 * Created by arnoldkrumins on 02/07/15.
 */
app.directive('bannerFormats',function($timeout){

    return{
        restrict:'EA',
        scope:{ bannerFormats:'=bannerFormats', selectfunc:"&",selectedBanner:"=" },
        template:'<div>' +
            '<ul class="banner-formats" ng-repeat="(Width, bannerInfo) in banners"><span class="banner-header">{{ Width.toString().concat(\'+\') }} </span>' +
            '<li  ng-click="select(banner,$index)" ng-repeat="banner in bannerInfo | orderBy:[\'Width\',\'Height\']">' +
                '<div ng-class="{ \'bannerselected\': banner.PublisherBannerFormatId === selectedBanner }">{{ banner.Width.toString().concat(\'x\',banner.Height.toString())}}</div>' +
            '</li>' +
            '</ul>' +
            '</div>',
        link:function(scope,element,__){

            scope.banners = _.groupBy(scope.bannerFormats, function(banner) {
                return this.floor(banner.Width/100.0)*100;
            }, Math);

            scope.select = function(value){

                $timeout(function(){
                    scope.$apply(function(){
                        scope.selectedBanner = value.PublisherBannerFormatId;
                    })
                },0)
            }



            element.find('li').bind('click',function(){


                scope.$apply(function(){
                    scope.Selected = true;
                })


            });

        }
    }

})