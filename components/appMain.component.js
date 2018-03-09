(function () {
    var appMain = {
        templateUrl: "partials/appMain.html",
        controller: function (CityService) {
            var $ctrl = this;
            $ctrl.$onInit = function() {
                $ctrl.thisCity = null;
            }
            $ctrl.reset = function () {
                $ctrl.thisCity = null;
                CityService.reset();
            }
        }
    };
    angular
        .module("vaCaApp")
        .component("appMain", appMain);
})();