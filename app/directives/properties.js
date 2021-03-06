/**
 * Created by arnold.krumins on 30/04/2015.
 */
app.directive('properties',['$sce', function($sce){

    return{
        restrict:'EA',
        replace:true,
        scope:{ selecteditems:'=properties',names:'=',selected:'=',adcategories:'=',approvedcategories:'=',rejectedcategories:'=' },
        template:'<div class="properties">' +
            '<h5><i class="fa fa-cogs"></i>Properties</h5>' +
            '<h5 class="col-sm-8 col-md-9" id="explicitlyTrustedHtml" ng-bind-html="names"></h5>' +
//            '<div categories="adcategories" approved="approvedcategories" rejected="rejectedcategories"></div>' +
            '<form name="settingsform" class="form-horizontal">' +

            '<div class="form-group" ng-class="{ \'has-error\': settingsform.one.$invalid }">' +
            '<label for="input-one" class="col-sm-8 col-md-9 control-label">No User Matching Threshold </label>'+
            '<div class="col-sm-4 col-md-3">' +
            '<input name="one" type="text" ng-model="selected.settingone" ng-pattern="/^\\-?\\d+((\\.|\\,)\\d+)?$/\" class="form-control pull-right" id="input-one" placeholder="%">' +
             'Valid? {{ settingsform.one.$valid}}' +
            '</div>' +
            '</div>' +
            '<div class="form-group">' +
            '<label for="input-two" class="col-sm-8 col-md-9 control-label">User Matching</label>' +
            '<div class="col-sm-4 col-md-3">' +
            '<input type="text" ng-model="selected.settingtwo" class="form-control" id="input-two" placeholder="%">' +
            '</div>' +
            '</div>' +

            '<div class="form-group">' +
            '<label for="input-three" class="col-sm-6 col-md-6 col-lg-8 control-label">Auction Type</label>' +
            '       <div class="col-sm-6 col-md-6 col-lg-4">' +
            '<select class="form-control">' +
            '<option>English Anction</option>' +
            '<option>Second Highest Bid</option>' +
            '</select>' +
            '</div>' +
            '</div>' +

            '<div class="form-group">' +
            '<label for="input-four" class="col-sm-6 col-md-6 col-lg-8 control-label">Geofilter</label>' +
            '<div class="col-sm-6 col-md-6 col-lg-4">' +
            '<select class="form-control">' +
            '<option value="126">Stockholm</option>' +
            '<option value="181">Söder</option>' +
            '</select>' +
            '</div>' +
            '</div>' +

            '<div class="form-group">' +
            '<label for="input-four" class="col-sm-6 col-md-6 col-lg-8 control-label">Site Protection</label>' +
            '<div class="col-sm-6 col-md-6 col-lg-4">' +
            '<select class="form-control">' +
            '<option value="0">Default</option>' +
            '<option value="1">Enabled</option>' +
            '<option value="2">Disabled</option>' +
            '</select>' +
            '</div>' +
            '</div>' +
//            '<div advertiser-categories="adcategories" title="Automatic approval of advertiser categories" selected-title="Automatically approved categories" ></div>' +
//            '<div advertiser-categories="adcategories" title="Automatic rejection of advertiser categories" selected-title="Automaticaly rejected categories" ></div>' +
            '<div class="form-group">' +
            '<button type="button" class="btn btn-success pull-right">Save</button>' +
            '</div>' +
            '</form>' +
            '</div>',

        link: function(scope,element,attrs){

            var self = this;

            scope.test = function(){

                console.log('hello');

            }



            scope.$on("select-all-buyers", function (e ,items) {

                scope.selecteditems = items;

                scope.names  = _.reduce(_.map(scope.selecteditems, 'name'), function(result,name,key) {
                    result[key] = "<span id=\'advertisers\' class=\'badge\'>" + name + '<a href="#" click><i class="fa fa-times"></i></a></span>';
                    return result;
                }, []).join("");

                self.explicitlyTrustedHtml = $sce.trustAsHtml('<p> scope.names </p>');
            });

            scope.$on("deselect-all-buyers", function (e ,items) {
                scope.selecteditems = [];
                scope.names  = _.reduce(_.map(scope.selecteditems, 'name'), function(result,name,key) {
                    result[key] = "<span id=\'advertisers\' class=\'badge\'>" + name + '<a href="#"><i class="fa fa-times"></i></a></span>';
                    return result;
                }, []).join("");
            });




                scope.$on("item-selected", function (event, item) {

                var idx = _.findIndex(scope.selecteditems, 'name', item.name);

                scope.$apply(function(){

                    scope.selected.settingone = '';
                    scope.selected.settingtwo = '';
                    scope.selected.settingthree = '';
                    scope.selected.settingfour = '';

                    if(idx<0){
                        scope.selecteditems.push(item);

                    }
                    else{
                        scope.selecteditems.splice(idx, 1);
                    }

                    if(scope.selecteditems.length == 1){
                        scope.selected.settingone = item.settingone;
                        scope.selected.settingtwo = item.settingtwo;
                        scope.selected.settingthree = item.settingthree;
                        scope.selected.settingfour = item.settingfour;
                    }


                    scope.names  = _.reduce(_.map(scope.selecteditems, 'name'), function(result,name,key) {
                            result[key] = "<span class=\'badge\'>" + name + '</span>';
                        return result;
                    }, []).join("");

                    self.explicitlyTrustedHtml = $sce.trustAsHtml('<p compile-template> scope.names </p>');
                })

            });

        }
    }
}]);






app.directive('compileTemplate', function($compile, $parse){
    return {
        link: function(scope, element, attr){
            var parsed = $parse(attr.ngBindHtml);
            function getStringValue() { return (parsed(scope) || '').toString(); }

            //Recompile if the template changes
            scope.$watch(getStringValue, function() {
                $compile(element, null, -9999)(scope);  //The -9999 makes it skip directives so that we do not recompile ourselves
            });
        }
    }
});