(function () {
    var appInput = {
        templateUrl: "partials/appInput.html",
        controller: function (CityService) {
            var $ctrl = this;
            
        }
    };
    angular
        .module("vaCaApp")
        .component("appInput", appInput);
})();