/**
 * Created by arnoldkrumins on 03/10/15.
 */
app.directive('areaChart',function( $document){

    return{
       restrict:'EA',
        replace:true,
        scope: { month: '=', monthText:'='},

        template:'<div id=\'chartdiv\' class=\'chart\'></div>',
        link:function(scope, element, attrs){

            if(angular.isUndefined(scope.month) || scope.month.length === 0) return;


               scope.$watch('month',function(){

                   var chart = AmCharts.makeChart("chartdiv" , {
                       "type": "serial",
                       "theme": "light",
                       "marginRight": 30,
                       "legend": {
                           "equalWidths": false,
                           "periodValueText": "total: [[value.sum]]",
                           "position": "top",
                           "valueAlign": "left",
                           "valueWidth": 100
                       },
                       "dataProvider": scope.month,
                       "graphs": [{
                           "balloonText": "<span style='font-size:14px; color:#000000;'><b>[[value]]</b></span>",
                           "fillAlphas": 0.6,
                           "hidden": true,
                           "lineAlpha": 0.4,
                           "title": "Avails",
                           "valueField": "avails"
                       }, {
                           "balloonText": "<span style='font-size:14px; color:#000000;'><b>[[value]]</b></span>",
                           "fillAlphas": 0.6,
                           "lineAlpha": 0.4,
                           "title": "Sold",
                           "valueField": "sold"
                       }],
                       "plotAreaBorderAlpha": 0,
                       "marginTop": 10,
                       "marginLeft": 0,
                       "marginBottom": 0,
                       "chartScrollbar": {},
                       "chartCursor": {
                           "cursorAlpha": 0
                       },
                       "categoryField": "day",
                       "categoryAxis": {
                           "startOnAxis": true,
                           "axisColor": "#DADADA",
                           "gridAlpha": 0.07,
                           "title": scope.monthText,

                       },
                       "export": {
                           "enabled": true
                       }
                   });


               });



          /* });*/

        }
    }


});