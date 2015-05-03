/**
 * Created by arnold.krumins on 30/04/2015.
 */
app.directive('properties',['$sce', function($sce){

    return{
        restrict:'EA',
        replace:true,
        scope:{ selecteditems:'=properties',names:'=',selected:'='},
        template:'<div class="properties">' +
                    '<h5><i class="fa fa-cogs"></i>Properties</h5>' +
                    '<h5 class="col-sm-8 col-md-9" id="explicitlyTrustedHtml" ng-bind-html="names"></h5>' +
                 '<form class="form-horizontal">' +

                    '<div class="form-group">' +
                        '<label for="input-one" class="col-sm-8 col-md-9 control-label">Setting One</label>'+
                        '<div class="col-sm-4 col-md-3">' +
                            '<input type="text" ng-model="selected.settingone" class="form-control pull-right" id="input-one" placeholder="%">' +
                        '</div>' +
                    '</div>' +
                    '<div class="form-group">' +
                        '<label for="input-two" class="col-sm-8 col-md-9 control-label">Setting Two</label>' +
                        '<div class="col-sm-4 col-md-3">' +
                            '<input type="text" ng-model="selected.settingtwo" class="form-control" id="input-two" placeholder="%">' +
                         '</div>' +
                    '</div>' +

                    '<div class="form-group">' +
                        '<label for="input-three" class="col-sm-8 col-md-9 control-label">Setting Three</label>' +
                    '       <div class="col-sm-4 col-md-3">' +
                                '<input type="text" ng-model="selected.settingthree" class="form-control" id="input-three" placeholder="%">' +
                            '</div>' +
                    '</div>' +

                    '<div class="form-group">' +
                        '<label for="input-four" class="col-sm-8 col-md-9 control-label">Setting Four</label>' +
                        '<div class="col-sm-4 col-md-3">' +
                            '<input type="text" ng-model="selected.settingfour" class="form-control" id="input-four" placeholder="%">' +
                        '</div>' +
                    '</div>' +
                    '<div class="form-group">' +
                        '<button type="button" class="btn btn-success pull-right">Save</button>' +
                    '</div>' +
                 '</form>' +
                 '</div>',
        link: function(scope,element,attrs){

            var self = this;

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
                            result[key] = "<span id=\'advertisers\' class=\'badge\'>" + name + '</span>';
                        return result;
                    }, []).join("");

                    self.explicitlyTrustedHtml = $sce.trustAsHtml('<p> scope.names </p>');
                })

            });

        }
    }
}]);