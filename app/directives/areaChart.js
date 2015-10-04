/**
 * Created by arnoldkrumins on 03/10/15.
 */
app.directive('areaChart',function( $document){

    return{
       restrict:'EA',
        replace:true,
        scope: { month: '=', monthText:'='},

        template:'<div></div>',
        link:function(scope, element, attrs){

          /* scope.$watch('chartData', function (newValue) {

                if(angular.isUndefined(newValue)) return;*/

            scope.chartName = function(){
                return scope.month.chartid;
            }


                element.prepend('<div id='.concat(scope.chartName(),'', ' class=\'chart\'></div>'));



                var chart = AmCharts.makeChart(scope.chartName() , {
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
                    "dataProvider": scope.month.chartdata,
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

          /* });*/

        }
    }


});