(function () {
    var appInput = {
        bindings: {
            onChangeCity: '&',
        },
        templateUrl: "partials/appInput.html",
        controller: function (CityService) {
            var $ctrl = this;
            $ctrl.regionShow = true;
            $ctrl.cuisineShow = false;
            $ctrl.entertainmentShow = false;
            $ctrl.sportsShow = false;


            CityService.getLibrary().then(function (data) {
                $ctrl.data = data;
            })
            $ctrl.submit = function (region, sport, cuisine, entertainment) {
                $ctrl.newObj = {};
                $ctrl.newObj.region = region;
                $ctrl.newObj.sport = sport;
                $ctrl.newObj.cuisine = cuisine;
                $ctrl.newObj.entertainment = entertainment;
                CityService.checkLogin($ctrl.newObj, $ctrl.data);
                
            }
            $ctrl.cities = CityService.getCities();
            $ctrl.showCityInfo = function (city) {
                CityService.saveCityObj(city);
                $ctrl.thisCity = city;
                $ctrl.onChangeCity({
                    $event: {
                        thisCity: $ctrl.thisCity 
                    }
                });
                
            $ctrl.showRegionForm = function() {
                console.log("hi");
            }

            }


        }



    };
    angular
        .module("vaCaApp")
        .component("appInput", appInput);
})();