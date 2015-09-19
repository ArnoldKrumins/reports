/**
 * Created by arnoldkrumins on 15/09/15.
 */
app.directive('forecastCalendarMulti',function(){

    return{
        restrict:'EA',
        scope:{ calendarData:'=forecastCalendarMulti' },
        template:'<div class="swiper-container col-sm-6 col-md-6 col-lg-6">' +
                    '<div class="swiper-wrapper" style="margin-bottom: 30px;">' +
                        '<div ng-repeat="month in calendarData" class="swiper-slide" end-repeat>' +

                            '<div class="calendar-header">' +
                                '<div><h2 style="margin-bottom: -5px;">{{ month.MonthName.toString().concat(\'&nbsp\',month.Year) }}</h2></div>' +
                                '<ul class="calendar-days">' +
                                    '<li><div><span>SUN</span></div></li>' +
                                    '<li><div><span>MON</span></div></li>' +
                                    '<li><div><span>TUE</span></div></li>' +
                                    '<li><div><span>WED</span></div></li>' +
                                    '<li><div><span>THUR</span></div></li>' +
                                    '<li><div><span>FRI</span></div></li>' +
                                    '<li><div><span>SAT</span></div></li>' +
                                '</ul>' +

                                '<ul>' +
                                    '<li ng-repeat="week in month.weeks">' +

                                        '<ul>' +
                                            '<li ng-repeat="day in week track by $index">' +
                                            '<div class="f-day-container" ng-class="{\'no-date\': day === 0 }">' +

                                                '<h1 ng-hide="day === 0">{{ day }}</h1>' +
                                                    '<div class="f-data" ng-hide="day === 0">' +
                                                        '<p>0</p>' +
                                                        '<p>0</p>' +
                                                        '<p>0</p>' +
                                                    '</div>' +
                                                '<div class="f-indicator good" ng-hide="day === 0"></div>' +
                                            '</div>' +
                                        '</ul>' +
                                    '</li>' +
                                '</ul>' +
                            '</div>' +
                        '</div>' +

                    '</div>' +
                     '<div class="swiper-pagination"></div>' +
                        '<div class="swiper-button-next"></div>' +
                        '<div class="swiper-button-prev"></div>' +
                    '</div>' +
                 '</div>',
        link:function(scope,element,attrs){




            scope.$on('calendar-created', function() {

                var swiper = new Swiper('.swiper-container', {
                    pagination: '.swiper-pagination',
                    paginationClickable: true,
                    nextButton: '.swiper-button-next',
                    prevButton: '.swiper-button-prev',
                    spaceBetween: 30
                });
            });




        }

    }

});