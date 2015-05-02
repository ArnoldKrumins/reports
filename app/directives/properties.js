/**
 * Created by arnold.krumins on 30/04/2015.
 */
app.directive('properties',function(){

    return{
        restrict:'EA',
        replace:true,
        scope:{},
        template:'<div class="properties">' +
                    '<h5><i class="fa fa-cogs"></i>Properties</h5>' +
                 '<form class="form-horizontal">' +
                    '<div class="form-group">' +
                        '<label for="input-one" class="col-sm-8 col-md-9 control-label">Option One</label>'+
                        '<div class="col-sm-4 col-md-3">' +
                            '<input type="text" class="form-control" id="input-one" placeholder="value one">' +
                        '</div>' +
                    '</div>' +
                    '<div class="form-group">' +
                        '<label for="input-two" class="col-sm-8 col-md-9 control-label">Option Two</label>' +
                        '<div class="col-sm-4 col-md-3">' +
                            '<input type="text" class="form-control" id="input-two" placeholder="value two">' +
                         '</div>' +
                    '</div>' +
                 '</form>' +
                 '</div>',
        link: function(scope,element,attrs){

        }
    }
});