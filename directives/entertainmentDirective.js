(function() {

	function entertainmentDirective() {
		return {
			restrict: "A",
			link: function($scope, $element, $attrs) {
				
				$element.on("click", function() {
					var listText = this.textContent;
		        	var header = document.getElementById("entertainment");
		        	header.innerText = listText;
					//$ctrl.regionShow = true;
				});
			}
		}
	}

angular
	.module("vaCaApp")
	.directive("entertainmentDirective", entertainmentDirective);

})();