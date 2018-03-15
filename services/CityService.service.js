(function () {
//declares CityService with $http passed in so it can access JSON via GET request
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

//checks to see if user input matches data from JSON file
//if one parameter matches, then adds 1 to the counter
//if a city gets at least one match from user input, will push the city into the possible cities array
//if the region matches, will add 2 to the counter instead of 1 and push the city to the array
            for (i = 0; i <= data.length; i++) {
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
//returns the sport the user selected
        function getCitySport() {
            return citySport;
        }

//returns the cuisine the user selected
        function getCityCuisine() {
            return cityCuisine;
        }

//returns the entertainment the user selected
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
