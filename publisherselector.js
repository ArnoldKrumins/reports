/**
 * Created by akrumins on 08/05/2015.
 */
var PublisherSelector = new function () {

    var that = this;

    var _publishers = [];
    var _currentlySelectedPublisher = undefined;
    this.init = function () {
        that.initSelect();
    };

    this.SetPublishers = function(publishers) {
        _publishers = publishers;
    };

    this.initSelect = function() {
        $("#publisherSelector").change(function() {
            var publisherId = parseInt($(this).val(), 10);
            var publisher = publisherInArray(publisherId, _publishers);
            if (publisher) {
                _currentlySelectedPublisher = publisher;
                console.log(publisher);
            }
            setPublisher();
        });
    };

    this.getCurrentlySelectedPublisher = function () {
        return _currentlySelectedPublisher;
    };

    var setPublisher = function() {
        $.ajax({
            url: Settings.baseUrl + Settings.basePath + 'PublisherSelection/SetPublisher',
            data: _currentlySelectedPublisher,
            dataType: 'json',
            type: 'POST',
            success: function (result) {
                location.reload();
            },
            error: function () {
                loadingerror(Settings.resource.AjaxErrorRequestProblem, 10000);
            }
        });
    };

    var publisherInArray = function (id, array) {
        var found = undefined;
        $.each(array, function (index, data) {
            if (data.Id === id || (data.PublisherType == 0 && id == -2) || (data.PublisherType == 2 && id == -1)) {
                found = data;
                return;
            }
        });
        return found;
    };

};

$(function () {
    PublisherSelector.init();
});