(function () {
    var appInput = {
        templateUrl: "partials/appInput.html",
        controller: function (CityService) {
            var $ctrl = this;
            CityService.getLibrary().then(function(data) {
                $ctrl.data = data;
            })
           	$ctrl.submit = function(region, sport, cuisine, entertainment) {
                $ctrl.newObj = {};
                $ctrl.newObj.region = region;
                $ctrl.newObj.sport = sport;
                $ctrl.newObj.cuisine = cuisine;
                $ctrl.newObj.entertainment = entertainment;
           		CityService.checkLogin($ctrl.newObj, $ctrl.data);
               }
            $ctrl.cities = CityService.getCities() 
            console.log($ctrl.cities);
        
            $ctrl.showCityInfo = function(city){
                CityService.showCityInfo(city);

            }
        
        
        }


      
    };
    angular
        .module("vaCaApp")
        .component("appInput", appInput);
})();