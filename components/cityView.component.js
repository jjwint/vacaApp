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

       



            };
            $ctrl.searchCuisine = function () {
                console.log($ctrl.thisCity);
                console.log($ctrl.thisCityCuisine);

                $ctrl.thisCityLoc = new google.maps.LatLng($ctrl.thisCity.latitude, $ctrl.thisCity.longitude);
                $ctrl.map = new google.maps.Map(document.getElementById("map"), {
                    center: $ctrl.thisCityLoc,
                    zoom: 10
                });
                $ctrl.thisCityLoc = new google.maps.LatLng($ctrl.thisCity.latitude, $ctrl.thisCity.longitude);
                $ctrl.service = new google.maps.places.PlacesService($ctrl.map);
                $ctrl.request = {
                    location: $ctrl.thisCityLoc,
                    radius: '100',
                    query: $ctrl.thisCityCuisine + "top restaurant", //change this for buttons
                    type: ['restaraunt'] //change this for buttons
                };
                $ctrl.callback = function (results, status) {
                    if (status == google.maps.places.PlacesServiceStatus.OK) {
                        $ctrl.results = results;
                        for (var i = 0; i < 5; i++) {
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

                    });
                    marker.addListener('click', function () {
                        infoWindow.setContent('<div class ="infoBox"><h3 class="infoName">' + place.name + '</h3>' + '<div class ="rating">Rating: ' + place.rating + '</div>' + place.formatted_address + '</div');
                        infoWindow.open($ctrl.map, marker)
                    })
                }
                $ctrl.service.textSearch($ctrl.request, $ctrl.callback);
            }



            $ctrl.searchEntertainment = function () {
                $ctrl.thisCityLoc = new google.maps.LatLng($ctrl.thisCity.latitude, $ctrl.thisCity.longitude);
                $ctrl.service = new google.maps.places.PlacesService($ctrl.map);
                $ctrl.map = new google.maps.Map(document.getElementById("map"), {
                    center: $ctrl.thisCityLoc,
                    zoom: 11
                });
                $ctrl.request = {
                    location: $ctrl.thisCityLoc,
                    radius: '150',
                    query: $ctrl.thisCityEntertainment + " best" //change this for buttons
                    // type: ['stadium'] //change this for buttons
                };
                $ctrl.callback = function (results, status) {
                    if (status == google.maps.places.PlacesServiceStatus.OK) {
                        $ctrl.results = results;
                        for (var i = 0; i < 6; i++) {
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

                    });
                    marker.addListener('click', function () {
                        infoWindow.setContent('<div class ="infoBox"><h3 class="infoName">' + place.name + '</h3>' + '<div class ="rating">Rating: ' + place.rating + '</div>' + place.formatted_address + '</div>');
                        infoWindow.open($ctrl.map, marker)
                    })


                }
                $ctrl.service.textSearch($ctrl.request, $ctrl.callback);
            }

            $ctrl.searchSport = function () {
                $ctrl.thisCityLoc = new google.maps.LatLng($ctrl.thisCity.latitude, $ctrl.thisCity.longitude);
                $ctrl.service = new google.maps.places.PlacesService($ctrl.map);
                $ctrl.map = new google.maps.Map(document.getElementById("map"), {
                    center: $ctrl.thisCityLoc,
                    zoom: 9
                });
                $ctrl.request = {
                    location: $ctrl.thisCityLoc,
                    radius: '100',
                    query: $ctrl.thisCitySport, //change this for buttons
                    type: ['stadium'] //change this for buttons
                };
                $ctrl.callback = function (results, status) {
                    if (status == google.maps.places.PlacesServiceStatus.OK) {
                        $ctrl.results = results;
                        for (var i = 0; i < 3; i++) {
                            var place = results[i];
                            console.log(place)
                            $ctrl.createMarker(results[i]);
                        }
                    }
                }
                $ctrl.createMarker = function (place) {

                    var placesList = document.getElementById('places');
                    var marker = new google.maps.Marker({
                        map: $ctrl.map,
                        position: place.geometry.location


                    });
                    var infoWindow = new google.maps.InfoWindow();
                    marker.addListener('click', function () {
                        infoWindow.setContent('<div class ="infoBox"><h3 class="infoName">' + place.name + '</h3>' + '<div class ="rating">Rating: ' + place.rating + '</div>' + place.formatted_address + '</div'); //can be more robust
                        infoWindow.open($ctrl.map, marker)
                    })

                    var li = document.createElement('li');
                    // $('.places').empty();

                    li.className = "results";
                    li.textContent = place.name + " " + place.rating;
                    placesList.appendChild(li);


                }
                $ctrl.service.textSearch($ctrl.request, $ctrl.callback);
            }





        }
    };

    angular
        .module("vaCaApp")
        .component("cityView", cityView)
})();