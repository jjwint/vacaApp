(function () {
    var cityView = {
        template: "<p>city view</p>",
        controller: function (CityService) {
            var $ctrl = this;
        }
    };
    angular
        .module("vaCaApp")
        .component("cityView", cityView)
})();