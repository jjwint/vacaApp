(function () {
    var cityView = {
        templateUrl: "partials/cityView.html",
        controller: function (CityService) {
            var $ctrl = this;
        }
    };
    angular
        .module("vaCaApp")
        .component("cityView", cityView)
})();