(function () {
    var appMain = {
        templateUrl: "partials/appMain.html",
        controller: function (CityService) {
            var $ctrl = this;
            $ctrl.$onInit = function() {
                $ctrl.thisCity = null;
            }
        }
    };
    angular
        .module("vaCaApp")
        .component("appMain", appMain);
})();