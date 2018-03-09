(function () {
    var CityService = function ($http) {
        var possibleCities = [];
        var displayCity = {};
        var cityRegion = "";
        var cityCuisine = "";
        var citySport = "";
        var cityEntertainment = "";

        return {
            checkLogin: checkLogin,
            getLibrary: getLibrary,
            getCities: getCities,
            saveCityObj: saveCityObj,
            getCityObj: getCityObj,
            getCityCuisine: getCityCuisine,
            getCitySport: getCitySport,
            getCityEntertainment: getCityEntertainment,
            reset: reset
        }

        function checkLogin(newObj, data) {

            cityRegion = newObj.region;
            cityCuisine = newObj.cuisine;
            citySport = newObj.sport;
            cityEntertainment = newObj.entertainment;

            possibleCities.length = 0;

            for (i = 0; i <= 11; i++) {
                var thisCity = data[i];
                thisCity.counter = 0;
                if (cityRegion !== thisCity.region) {
                    if (thisCity.cuisine.includes(newObj.cuisine) === true) {
                        thisCity.counter++;
                    }
                    if (thisCity.sports.includes(newObj.sport) === true) {
                        thisCity.counter++;
                    }
                    if (thisCity.entertainment.includes(newObj.entertainment) === true) {
                        thisCity.counter++;
                    }
                    if (thisCity.counter > 1) {
                        possibleCities.push(thisCity);
                    }
                } else if (cityRegion === thisCity.region) {
                    thisCity.counter += 2;
                    possibleCities.push(thisCity);
                }
            }
        }

        function getLibrary() {
            return $http.get("data/cityInfo.json")
                .then(function (response) {
                    return response.data;
                });
        }

        function getCities() {
            return possibleCities;
        }

        function saveCityObj(city) {
            displayCity = city;
        }

        function getCityObj() {
            return displayCity;
        }

        function getCitySport() {
            return citySport;
        }

        function getCityCuisine() {
            return cityCuisine;
        }

        function getCityEntertainment() {
            return cityEntertainment;
        }

        function reset() {
            possibleCities.length = 0;
            cityRegion = "";
            cityCuisine = "";
            citySport = "";
            cityEntertainment = "";
        }
    }

    angular
        .module("vaCaApp")
        .factory("CityService", CityService)
})();