(function () {
    var cityView = {
        // thisCity object passed from appMain component
        bindings: {
            thisCity: '<'
        },
        templateUrl: "partials/cityView.html",
        controller: function (CityService) {
            var $ctrl = this;
            // API code won't fire until cityView is initialized
            $ctrl.$onInit = function () {
                // import data from service
                $ctrl.thisCitySport = CityService.getCitySport();
                $ctrl.thisCityCuisine = CityService.getCityCuisine();
                $ctrl.thisCityEntertainment = CityService.getCityEntertainment();
                // construct a latitude/longitude location for thisCity
                $ctrl.thisCityLoc = new google.maps.LatLng($ctrl.thisCity.latitude, $ctrl.thisCity.longitude);
                // intialize google map, bind to map id
                $ctrl.map = new google.maps.Map(document.getElementById("map"), {
                    center: $ctrl.thisCityLoc,
                    zoom: 13
                });
                // make a search request to API
                $ctrl.service = new google.maps.places.PlacesService($ctrl.map);
                // create request object with search parameters
                $ctrl.request = {
                    location: $ctrl.thisCityLoc,
                    radius: '100',
                    query: $ctrl.thisCityCuisine, //change this for buttons
                    type: ['restaurant'] //change this for buttons
                };
                $ctrl.callback = function (results, status) {
                    if (status == google.maps.places.PlacesServiceStatus.OK) {
                        $ctrl.results = results;
                        for (var i = 0; i < results.length; i++) {
                            var place = results[i];
                            console.log(place)
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
                        infoWindow.setContent(place.name);  //can be more robust
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