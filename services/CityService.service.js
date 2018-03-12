(function () {
    var CityService = function ($http) {
        var possibleCities = [];
        var displayCity = {};
        var cityRegion = "";
        var cityCuisine = "";
        var citySport = "";
        var cityEntertainment = "";
        var cityName = "";
      
        return {
            checkLogin: checkLogin,
            getLibrary: getLibrary,
            getCities: getCities,
            getCityCuisine: getCityCuisine,
            getCitySport: getCitySport,
            getCityEntertainment: getCityEntertainment,
            getCityName: getCityName,

            reset: reset,

        }

        function checkLogin(newObj, data) {

            cityRegion = newObj.region;
            cityCuisine = newObj.cuisine;
            citySport = newObj.sport;
            cityEntertainment = newObj.entertainment;
            cityName = newObj.name;
            console.log(cityName);

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
//http passed into the city service at the top;
//then calls .get and passes the path to the json file
//.then is the callback; called when it gets the data
//then calls the function to return the response data
        function getLibrary() {
            return $http.get("data/cityInfo.json")
                .then(function (response) {
                    return response.data;
                });
        }
//returns the array of possible cities
        function getCities() {
            return possibleCities;
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

        function getCityName() {
            return cityName;
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
