var map;
function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
	center: {lat: 42.3359240, lng: -83.0497190},
	zoom: 15
	});
}