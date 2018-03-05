(function () {
    var appHeader = {
        template: "<p>app header</p>",
        controller: function (CityService) {
            var $ctrl = this;
        }
    };
    angular
        .module("vaCaApp")
        .component("appHeader", appHeader)
})();