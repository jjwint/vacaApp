(function () {
    var cityView = {
        bindings: {
            thisCity: '<'
        },
        templateUrl: "partials/cityView.html",
        controller: function (CityService) {
            var $ctrl = this;
            console.log($ctrl.thisCity);
        }
    };
    angular
        .module("vaCaApp")
        .component("cityView", cityView)
})();