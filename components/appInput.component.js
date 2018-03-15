(function () {
    var appInput = {
        bindings: {
            onChangeCity: '&',
        },
        templateUrl: "partials/appInput.html",
        controller: function (CityService) {
            var $ctrl = this;
            // service variables
            $ctrl.newObj = {};
            $ctrl.regionShow = false;
            $ctrl.cuisineShow = false;
            $ctrl.entertainmentShow = false;
            $ctrl.sportsShow = false;
            $ctrl.regions = ["Northeast", "Midwest", "South", "West"];
            $ctrl.cuisines = ["Mexican", "Italian", "Chinese", "Vegan"];
            $ctrl.entertainments = ["Museums", "Parks", "Landmarks", "Beaches"];
            $ctrl.sports = ["Baseball", "Basketball", "Football", "Hockey"];
            // bind possibleCities, json data to view model
            $ctrl.cities = CityService.getCities();
            CityService.getLibrary().then(function (data) {
                $ctrl.data = data;
            })
            // pass cityObj to appMain
            //$ctrl.onChangeCity is a function that passes the city object into the main component
            //so that it can be accessed from the main component by the other two components
            //cityView component doesn't exist until the city info is passed to it
            //so then $ctrl.thisCity is no longer null in the main component
            //then thisCity is on the viewmodel for cityView
            //cityview 
            $ctrl.showCityInfo = function (city) {
                $ctrl.thisCity = city;
                $ctrl.onChangeCity({
                    $event: {
                        thisCity: $ctrl.thisCity
                    }
                });
            }
            // input show
            $ctrl.showRegionForm = function () {
                if ($ctrl.regionShow === false) {
                    $ctrl.regionShow = true;
                } else {
                    $ctrl.regionShow = false;
                }
            }
            $ctrl.showCuisineForm = function () {
                if ($ctrl.cuisineShow === false) {
                    $ctrl.cuisineShow = true;
                } else {
                    $ctrl.cuisineShow = false;
                }
            }
            $ctrl.showEntertainmentForm = function () {
                if ($ctrl.entertainmentShow === false) {
                    $ctrl.entertainmentShow = true;
                } else {
                    $ctrl.entertainmentShow = false;
                }
            }
            $ctrl.showSportsForm = function () {
                if ($ctrl.sportsShow === false) {
                    $ctrl.sportsShow = true;
                } else {
                    $ctrl.sportsShow = false;
                }
            }
            // input hide, bind data to newObj
            $ctrl.hideRegionForm = function (region) {
                $ctrl.regionShow = false;
                $ctrl.newObj.region = region;
                CityService.checkLogin($ctrl.newObj, $ctrl.data);
            }
            $ctrl.hideCuisineForm = function (cuisine) {
                $ctrl.cuisineShow = false;
                $ctrl.newObj.cuisine = cuisine;
                CityService.checkLogin($ctrl.newObj, $ctrl.data);
            }
            $ctrl.hideEntertainmentForm = function (entertainment) {
                $ctrl.entertainmentShow = false;
                $ctrl.newObj.entertainment = entertainment;
                CityService.checkLogin($ctrl.newObj, $ctrl.data);
            }
            $ctrl.hideSportsForm = function (sport) {
                $ctrl.sportsShow = false;
                $ctrl.newObj.sport = sport;
                CityService.checkLogin($ctrl.newObj, $ctrl.data);
            }
        }
    };
    angular
        .module("vaCaApp")
        .component("appInput", appInput);
})();
