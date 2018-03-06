(function() {
	var mapComponent = {
		template: '<div id="map"></div>',
		controller: function() {
			var $ctrl = this;
		}
	}

	angular
		.module("vaCaApp")
		.component("mapComponent", mapComponent);
})();