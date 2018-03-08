(function () {
    var appHeader = {
        templateUrl: "partials/appHeader.html",
        controller: function (CityService) {
            var $ctrl = this;
            $ctrl.reset = function (){
                CityService.reset();
            }
        }
    };
    angular
        .module("vaCaApp")
        .component("appHeader", appHeader)
})();