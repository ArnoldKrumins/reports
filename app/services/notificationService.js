/**
 * Created by arnoldkrumins on 03/06/15.
 */
app.factory('notificationService', ['toastr', function(toastr){


   var options = { positionClass:'toast-top-center',timeOut:'2000', autoDismiss: false};

    return{

        success : function(title,message){


            toastr.success(message, title,options);

        },
        info: function(title,message){

            toastr.info(message, title,options);

        },
        warning: function(title,message){

            toastr.warning(message, title,options);

        },
        Error: function(title,message){

            toastr.error(message, title,options);

        }

    }


}]);