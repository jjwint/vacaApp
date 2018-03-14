(function() {
	var welcomePage = {
		templateUrl: "partials/welcome.html",
		controller: function(CityService) {
			var vm = this;
		}
	};
	angular
		.module("vaCaApp")
		.component("welcomePage", welcomePage);
})();