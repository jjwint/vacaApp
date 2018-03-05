(function () {
    var appHeader = {
        templateUrl: "partials/appHeader.html",
        controller: function (CityService) {
            var $ctrl = this;
        }
    };
    angular
        .module("vaCaApp")
        .component("appHeader", appHeader)
})();