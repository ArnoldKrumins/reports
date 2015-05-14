/**
 * Created by arnoldkrumins on 14/05/15.
 */
app.directive('categories',function(){

    return{
        restrict:'EA',
        scope:{categories:'=categories'},
        template:'\
                 <ul ng-repeat-start="category in categories">\
                  <li ng-repeat="item in category.ParentId">{{ item.Category }}\
                  <button><i class="fa fa-thumbs-o-up"></i></button>\
                  <button><i class="fa fa-thumbs-o-down"></i></button>\
                  </li ng-repeat-end >\
            </ul>',
        link:function(scope,element,attrs){

            var s = scope.categories;
        }

    }

});