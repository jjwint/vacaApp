(function () {

	function resetDirective() {
		return {
			restrict: "A",
			link: function ($scope, $element, $attrs) {
				$element.on("click", function () {
					var regionHeader = document.getElementById("region");
					regionHeader.innerText = "Region";
					var cuisineHeader = document.getElementById("cuisine");
					cuisineHeader.innerText = "Cuisine";
					var entertainmentHeader = document.getElementById("entertainment");
					entertainmentHeader.innerText = "Entertainment";
					var sportsHeader = document.getElementById("sports");
					sportsHeader.innerText = "Sports";
				});
			}
		}
	}

	angular
		.module("vaCaApp")
		.directive("resetDirective", resetDirective);

})();