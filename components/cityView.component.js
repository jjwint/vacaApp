(function () {
    var cityView = {
        // thisCity object passed from appMain component
        bindings: {
            thisCity: '<'
        },
        templateUrl: "partials/cityView.html",
        controller: function ($scope, CityService) {
            var $ctrl = this;
            $ctrl.savedResults = [];
            $ctrl.saveResult = function(place) {
                if (!$ctrl.isInItinerary(place)) {
                    $ctrl.savedResults.push(place);
                    console.log($ctrl.savedResult);
                }
            }

            $ctrl.showItinerary = function(){
                resetMap();
                updateResults($ctrl.savedResults);
            }

            $ctrl.isInItinerary = function(place) {
                return $ctrl.savedResults.some(function(savedPlace) {
                    return savedPlace.id === place.id;
                });
            }
         
            // API code won't fire until cityView is initialized
            $ctrl.$onInit = function () {
                // import data from service
                $ctrl.thisCitySport = CityService.getCitySport();
                $ctrl.thisCityCuisine = CityService.getCityCuisine();
                $ctrl.thisCityEntertainment = CityService.getCityEntertainment();
                $ctrl.thisCityName = $ctrl.thisCity.name;
                // construct a latitude/longitude location for thisCity
                $ctrl.thisCityLoc = new google.maps.LatLng($ctrl.thisCity.latitude, $ctrl.thisCity.longitude);
                // intialize google map, bind to map id - displays map
                $ctrl.map = new google.maps.Map(document.getElementById("map"), {
                    center: $ctrl.thisCityLoc,
                    zoom: 13
                });
                // make a search request to API
            };
            $ctrl.searchCuisine = function () {
                search("top " + $ctrl.thisCityCuisine + " restaurant", "restaurant", 5);
            }
            $ctrl.searchEntertainment = function () {
                search("top "+$ctrl.thisCityEntertainment, null, 6);
            }
            $ctrl.searchSport = function () {
                search($ctrl.thisCitySport, "stadium", 3);
            }
            function search(query, type, numberToShow) {
                // console.log($ctrl.thisCity);
                console.log("query", query);
                // console.log($ctrl.thisCityName);
                $ctrl.thisCityLoc = new google.maps.LatLng($ctrl.thisCity.latitude, $ctrl.thisCity.longitude);
                resetMap();
                
                $ctrl.service = new google.maps.places.PlacesService($ctrl.map);
                $ctrl.request = {
                    location: $ctrl.thisCityLoc,
                    radius: 48280.3, // 30 mi
                    query: query + " near " + $ctrl.thisCityName,  //change this for buttons
                    type: [type] //change this for buttons
                };
                //callback runs when promise gets answered, calls the callback function
                $ctrl.callback = function (results, status) {
                    $scope.$apply(function() {
                        if (status == google.maps.places.PlacesServiceStatus.OK) {
                            results = results.slice(0, numberToShow);
                            updateResults(results);
                        } else {
                            updateResults([]);
                        }
                    });
                }
               
                $ctrl.service.textSearch($ctrl.request, $ctrl.callback);
            }

            // Start a new clean map
            function resetMap() {
                $ctrl.map = new google.maps.Map(document.getElementById("map"), {
                    center: $ctrl.thisCityLoc,
                    zoom: 11
                });
            }

            // Set results list and add markers to map
            function updateResults(results) {
                $ctrl.results = results;
              
                for (var i = 0; i < results.length; i++) {
                    var place = results[i];
                    console.log(place)
                    // $ctrl.thisCityLoc.extend(results[i].getPosition());
                    createMarker(results[i]);
                }
                // map.fitBounds($ctrl.thisCityLoc);
                function createMarker(place) {
                    console.log("hi")
                    var marker = new google.maps.Marker({
                        
                        map: $ctrl.map,
                        position: place.geometry.location,
                        
                    });
                    var infoWindow = new google.maps.InfoWindow({
                    });
                    marker.addListener('click', function () {
                        infoWindow.setContent(`<div class ="infoBox">
                                                    <div>
                                                    <h2 class="infoName">`+ place.name + `</h2>
                                                    <img src="` + place.photos[0].getUrl({'maxWidth': 100, 'maxHeight': 100}) +`">
                                                    </div>`
                                                 + `<div class="rating">Rating: ` + place.rating + `</div>`
                                                  + place.formatted_address + '</div>');
                        infoWindow.open($ctrl.map, marker)
                    })
                }
            }
        }
    };
    angular
        .module("vaCaApp")
        .component("cityView", cityView)
})();
