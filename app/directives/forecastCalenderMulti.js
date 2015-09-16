/**
 * Created by arnoldkrumins on 15/09/15.
 */
app.directive('forecastCalendarMulti',function(){

    return{
        restrict:'EA',
        scope:{ calendarData:'=forecastCalendarMulti' },
        template:'<div class="swiper-container">' +
                    '<div class="swiper-wrapper">' +
                        '<div ng-repeat="month in calendarData" class="swiper-slide" end-repeat>' +

                            '<div class="calendar-header">' +
                                '<div><h4>{{ month.MonthName.toString().concat(\'&nbsp\',month.Year) }}</h4></div>' +
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

                                        '<ul style="margin-left: -120px;">' +
                                            '<li ng-repeat="day in week">' +
                                            '<div class="f-day-container">' +

                                                '<h1>{{ day.Day  }}</h1>' +
                                                    '<div class="f-data">' +
                                                        '<p>N/A</p>' +
                                                        '<p>N/A</p>' +
                                                        '<p>N/A</p>' +
                                                    '</div>' +
                                                '<div class="f-indicator good"></div>' +
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