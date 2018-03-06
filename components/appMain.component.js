(function () {
    var appMain = {
        templateUrl: "partials/appMain.html",
        controller: function (CityService) {
            var $ctrl = this;
            console.log($ctrl.thisCity);
        }
    };
    angular
        .module("vaCaApp")
        .component("appMain", appMain);
})();