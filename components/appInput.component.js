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
            $ctrl.regions = ["Northeast", "Midwest", "South", "West Coast"];
            $ctrl.cuisines = ["Mexican", "Italian", "Chinese", "Vegan"];
            $ctrl.entertainments = ["Museums", "Parks", "Landmarks", "Beaches"];
            $ctrl.sports = ["Baseball", "Basketball", "Football", "Hockey"];
            // bind possibleCities, json data to view model
            $ctrl.cities = CityService.getCities();
            CityService.getLibrary().then(function (data) {
                $ctrl.data = data;
            })
            // pass cityObj to appMain
            $ctrl.showCityInfo = function (city) {
                CityService.saveCityObj(city);
                $ctrl.thisCity = city;
                $ctrl.onChangeCity({
                    $event: {
                        thisCity: $ctrl.thisCity
                    }
                });
            }
            // input show
            $ctrl.showRegionForm = function () {
                $ctrl.regionShow = true;
            }
            $ctrl.showCuisineForm = function () {
                $ctrl.cuisineShow = true;
            }
            $ctrl.showEntertainmentForm = function () {
                $ctrl.entertainmentShow = true;
            }
            $ctrl.showSportsForm = function () {
                $ctrl.sportsShow = true;
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