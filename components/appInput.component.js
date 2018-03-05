(function () {
    var appInput = {
        templateUrl: "partials/appInput.html",
        controller: function (CityService) {
            var $ctrl = this;
            $ctrl.choices = {};
           	$ctrl.submit = function() {
           		console.log($ctrl.choices);
           	}
        }
    };
    angular
        .module("vaCaApp")
        .component("appInput", appInput);
})();