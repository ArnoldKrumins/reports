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
                            '<div><h4>{{ month.MonthName.toString().concat(\'&nbsp\',month.Year) }}</h4></div>' +
                            '<div>' +
                                '<ul>' +
                                    '<li ng-repeat="week in month.weeks">' +
                                        '<ul>' +
                                            '<li ng-repeat="day in week">' +
                                            '<div>' +
                                                '<h5><span class="f-day">{{ day.Date.toString().substr(0,3) }}</span><span class="f-date-part">{{ day.Date.substr(3,forecast.Date.length) }}</span></h5>' +
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