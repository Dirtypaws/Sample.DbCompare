var Router = {};

Router.init = function () {

    window._pullHistory = true;

    window.routie({
        '': function() {
            fetchAjaxContent("Home/Index");
        }
    });
};

// helper routie function
function fetchAjaxContent(route) {
    if (window._pullHistory) {
        var splitter = $("#contentSplitter").data("kendoSplitter");
        // force back to auto-y-overflow scrolling: contentPane's kendo scrolling
        // setting was getting changed when loading the remote admin site
        $("#contentPane").addClass("k-scrollable");
        splitter.ajaxRequest("#contentPane", window._rootUrl + route);
    }
    window._pullHistory = true;
}