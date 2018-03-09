(function() {

	angular
		.module("vaCaApp")
		.config(function($routeProvider) {
			$routeProvider
			.when("/welcome", {
				template: "<welcome-page></welcome-page>"
			})
			.when("/main", {
				template: "<app-main></app-main>"
			})
			.otherwise( {
				template: "<welcome-page></welcome-page>"
			});
		});
})();