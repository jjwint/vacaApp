(function () {
    var appInput = {
        bindings: {
            onChangeCity: '&',
        },
        templateUrl: "partials/appInput.html",
        controller: function (CityService) {
            var $ctrl = this;
            $ctrl.newObj = {};
            $ctrl.regionShow = false;
            $ctrl.cuisineShow = false;
            $ctrl.entertainmentShow = false;
            $ctrl.sportsShow = false;
            $ctrl.regions = ["Northeast", "Midwest", "Coastal", "Mountainous"];
            $ctrl.cuisines = ["Mexican", "Italian", "Asian", "Vegan"];
            $ctrl.entertainments = ["Museums", "Outdoor Recreation", "Zoos/Nature Preserves", "Historical Site Tours"];
            $ctrl.sports = ["Baseball", "Basketball", "Football", "Hockey"];
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

           

            CityService.getLibrary().then(function (data) {
                $ctrl.data = data;
            })
            
            $ctrl.cities = CityService.getCities();
            $ctrl.showCityInfo = function (city) {
                CityService.saveCityObj(city);
                $ctrl.thisCity = city;
                $ctrl.onChangeCity({
                    $event: {
                        thisCity: $ctrl.thisCity
                    }
                });

                
            }

            // $ctrl.reset = function(){

            //     possibleCities.length = 0;

            // }


        }



    };
    angular
        .module("vaCaApp")
        .component("appInput", appInput);
})();