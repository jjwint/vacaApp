(function () {
    var appMain = {
        templateUrl: "partials/appMain.html",
        controller: function (CityService) {
            var $ctrl = this;
            // hides cityView at init
            $ctrl.$onInit = function() {
                $ctrl.thisCity = null;
            }
            // hides cityView at reset
            $ctrl.reset = function () {
                $ctrl.thisCity = null;
            //reset service variables
                CityService.reset();
            }
        }
    };
    angular
        .module("vaCaApp")
        .component("appMain", appMain);
})();