/**
 * Created by arnoldkrumins on 02/07/15.
 */
app.directive('bannerFormats',function(){

    return{
        restrict:'EA',
        scope:{ bannerFormats:'=bannerFormats', selectfunc:"&" },
        template:'<div>' +
            '<ul class="banner-formats" ng-repeat="(Width, bannerInfo) in banners"><span class="banner-header">{{ Width.toString().concat(\'+\') }} </span>' +
            '<li ng-click="selectfunc({banner:0})" ng-model="banner" ng-class="{ \'banner-selected\':banner.Selected,\'banner-unselected\':!banner.Selected }" ng-repeat="banner in bannerInfo | orderBy:[\'Width\',\'Height\']"><a href="#">{{ banner.Width.toString().concat(\'x\',banner.Height.toString())}}</a></li>' +
            '</ul>' +
            '</div>',
        link:function(scope,element,__){

            scope.banners = _.groupBy(scope.bannerFormats, function(banner) {
                return this.floor(banner.Width/100.0)*100;
            }, Math);





            element.find('li').bind('click',function(){

                scope.$apply(function(){
                    scope.Selected = true;
                })


            });

        }
    }

})