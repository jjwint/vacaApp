(function () {
    var appInput = {
        template: "<p>app input</p>",
        controller: function (CityService) {
            var $ctrl = this;
        }
    };
    angular
        .module("vaCaApp")
        .component("appInput", appInput);
})();