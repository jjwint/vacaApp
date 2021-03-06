(function () {

	function sportsDirective() {
		return {
			restrict: "A",
			link: function ($scope, $element, $attrs) {
				$element.on("click", function () {
					var listText = this.textContent;
					var header = document.getElementById("sports");
					header.innerText = listText;
				});
			}
		}
	}

	angular
		.module("vaCaApp")
		.directive("sportsDirective", sportsDirective);

})();