(function () {
    var cityView = {
        // thisCity object passed from appMain component
        bindings: {
            thisCity: '<'
        },
        templateUrl: "partials/cityView.html",
        controller: function ($scope, CityService) {
            var $ctrl = this;
            // API code won't fire until cityView is initialized



            $ctrl.$onInit = function () {
                // import data from service
                $ctrl.thisCitySport = CityService.getCitySport();
                $ctrl.thisCityCuisine = CityService.getCityCuisine();
                $ctrl.thisCityEntertainment = CityService.getCityEntertainment();
                $ctrl.thisCityName = $ctrl.thisCity.name;

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
                $ctrl.map = new google.maps.Map(document.getElementById("map"), {
                    center: $ctrl.thisCityLoc,
                    zoom: 11
                });
                $ctrl.thisCityLoc = new google.maps.LatLng($ctrl.thisCity.latitude, $ctrl.thisCity.longitude);
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
                            $ctrl.results = results.slice(0, numberToShow);
                            for (var i = 0; i < numberToShow; i++) {
                                var place = results[i];
                                
                                $ctrl.createMarker(results[i]);
                            }
                        } else {
                            $ctrl.results = [];
                        }
                    });
                }
                $ctrl.createMarker = function (place) {
                    var marker = new google.maps.Marker({
                        map: $ctrl.map,
                        position: place.geometry.location
                    });
                    console.log(place.geometry.location);
                    var infoWindow = new google.maps.InfoWindow({

                    });
                    marker.addListener('click', function () {
                        infoWindow.setContent('<div class ="infoBox"><h3 class="infoName">' + place.name + '</h3>' + '<div class ="rating">Rating: ' + place.rating + '</div>' + place.formatted_address + '</div');
                        infoWindow.open($ctrl.map, marker)
                    })
                }
                $ctrl.service.textSearch($ctrl.request, $ctrl.callback);
            }




            // $ctrl.searchSport = function () {
            //     $ctrl.thisCityLoc = new google.maps.LatLng($ctrl.thisCity.latitude, $ctrl.thisCity.longitude);
            //     $ctrl.service = new google.maps.places.PlacesService($ctrl.map);
            //     $ctrl.map = new google.maps.Map(document.getElementById("map"), {
            //         center: $ctrl.thisCityLoc,
            //         zoom: 9
            //     });
            //     $ctrl.request = {
            //         location: $ctrl.thisCityLoc,
            //         radius: '100',
            //         query: $ctrl.thisCitySport, //change this for buttons
            //         type: ['stadium'] //change this for buttons
            //     };
            //     $ctrl.callback = function (results, status) {
            //         if (status == google.maps.places.PlacesServiceStatus.OK) {
            //             $ctrl.results = results;
            //             for (var i = 0; i < 1; i++) {
            //                 var place = results[i];
            //                 console.log(place)
            //                 $ctrl.createMarker(results[i]);
            //             }
            //         }
            //     }
            //     $ctrl.createMarker = function (place) {

            //         var placesList = document.getElementById('places');
            //         var marker = new google.maps.Marker({
            //             map: $ctrl.map,
            //             position: place.geometry.location


            //         });
            //         var infoWindow = new google.maps.InfoWindow();
            //         marker.addListener('click', function () {
            //             infoWindow.setContent('<div class ="infoBox"><h3 class="infoName">' + place.name + '</h3>' + '<div class ="rating">Rating: ' + place.rating + '</div>' + place.formatted_address + '</div'); //can be more robust
            //             infoWindow.open($ctrl.map, marker)
            //         })

            //         var li = document.createElement('li');
            //         // $('.places').empty();

            //         li.className = "results";
            //         li.textContent = place.name + " " + place.rating;
            //         placesList.appendChild(li);


            //     }
            //     $ctrl.service.textSearch($ctrl.request, $ctrl.callback);
            // }





        }
    };

    angular
        .module("vaCaApp")
        .component("cityView", cityView)
})();
