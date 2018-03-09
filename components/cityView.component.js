(function () {
    var cityView = {
        // thisCity passed from appMain component
        bindings: {
            thisCity: '<'
        },
        templateUrl: "partials/cityView.html",
        controller: function (CityService) {
            var $ctrl = this;
            
            
           
            $ctrl.$onInit = function () {

                $ctrl.thisCitySport = CityService.getCitySport();
                $ctrl.thisCityCuisine = CityService.getCityCuisine();
                $ctrl.thisCityEntertainment = CityService.getCityEntertainment();

                $ctrl.thisCityLoc = new google.maps.LatLng($ctrl.thisCity.latitude, $ctrl.thisCity.longitude);

                $ctrl.map = new google.maps.Map(document.getElementById("map"), {
                    center: $ctrl.thisCityLoc,
                    zoom: 13

                });
                console.log($ctrl.map);
                $ctrl.service = new google.maps.places.PlacesService($ctrl.map);

                $ctrl.request = {
                    location: $ctrl.thisCityLoc,
                    radius: '100',
                    query: $ctrl.thisCityCuisine,
                    type: ['restaurant']
                };

                $ctrl.callback = function (results, status) {
                    if (status == google.maps.places.PlacesServiceStatus.OK) {
                        $ctrl.results = results;
                        for (var i = 0; i < results.length; i++) {
                            var place = results[i];
                            $ctrl.createMarker(results[i]);
                        }
                    }
                }
                $ctrl.createMarker = function (place) {

                    var marker = new google.maps.Marker({
                        map: $ctrl.map,
                        position: place.geometry.location
                    });
                    var infoWindow = new google.maps.InfoWindow({
                        content: "<p>hello</p>"
                    });
                    marker.addListener('click', function () {
                        infoWindow.setContent(place.name);
                        infoWindow.open($ctrl.map, marker)
                    })
                }
                $ctrl.service.textSearch($ctrl.request, $ctrl.callback);
            };
        }
    };

    angular
        .module("vaCaApp")
        .component("cityView", cityView)
})();