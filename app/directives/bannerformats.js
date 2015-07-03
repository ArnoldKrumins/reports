/**
 * Created by arnoldkrumins on 02/07/15.
 */
app.directive('bannerFormats',function($timeout){

    return{
        restrict:'EA',
        scope:{ bannerFormats:'=bannerFormats', selectfunc:"&" },
        template:'<div>' +
            '<ul class="banner-formats" ng-repeat="(Width, bannerInfo) in banners"><span class="banner-header">{{ Width.toString().concat(\'+\') }} </span>' +
            '<li ng-click="select(banner)" ng-class="{ \'bannerselected\': banner.Selected, \'bannerunselected\' : !banner.Selected }" ng-repeat="banner in bannerInfo | orderBy:[\'Width\',\'Height\']"><a href="#">{{ banner.Width.toString().concat(\'x\',banner.Height.toString(),banner.Selected)}}</a></li>' +
            '</ul>' +
            '</div>',
        link:function(scope,element,__){

            scope.banners = _.groupBy(scope.bannerFormats, function(banner) {
                return this.floor(banner.Width/100.0)*100;
            }, Math);

            scope.select = function(value){

                $timeout(function(){
                    scope.$apply(function(){
                        _.find(scope.bannerFormats, { 'PublisherBannerFormatId':value.PublisherBannerFormatId  }).Selected= !value.Selected;
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