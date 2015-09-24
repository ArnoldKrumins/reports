/**
 * Created by arnold.krumins on 30/04/2015.
 */
var app = angular.module('reports',['ngSanitize','ui.bootstrap','toastr','angular-toArrayFilter']);

app.config(function($httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
});
