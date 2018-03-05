(function () {
    var appInput = {
        templateUrl: "partials/appInput.html",
        controller: function (CityService) {
            var $ctrl = this;
            $ctrl.choices = {};
           	$ctrl.submit = function() {
           		// console.log($ctrl.region);
           		// console.log($ctrl.sports);
           		// console.log($ctrl.cuisine);
           		// console.log($ctrl.entertainment);
           	}
        }
    };
    angular
        .module("vaCaApp")
        .component("appInput", appInput);
})();