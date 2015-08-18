/**
 * Created by arnoldkrumins on 18/08/15.
 */
app.directive('rtbBuyersTableView',function(){

    return{

        restrict:'EA',
        scope:{ items:'=', selectall:'='},
        template:'<div>' +
                    '<table class="table table-hover">' +
                        '<thead>' +
                        '<th>RTB Buyer</th>' +
                        '<th>Auction Type</th>' +
                        '<th>Site Protection</th>' +
                        '<th>GeoFilter</th>' +
                        '<th>Only Private Deals</th>' +
                        '<th>Website Id</th>' +
                        '<th>Website Name</th>' +
                        '<th>Publisher Name</th>' +
                        '<th>Site Content Categories</th>' +
                        '<th>Page Content Categories</th>' +
                        '<th>Page Url</th>' +
                        '<th>IP Address</th>' +
                        '<th>User Agent Country String</th>' +
                        '</thead>' +
                        '<tbody ng-repeat="item in items">' +
                            '<tr>' +
                                '<td></td>' +
                                '<td></td>' +
                                '<td></td>' +
                            '</tr>' +
                        '</tbody>' +
                    '</table>' +
                 '</div>'
        ,
        link:function(scope,element,attrs){


        }


    }

});