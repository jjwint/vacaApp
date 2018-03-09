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

        }

        function checkLogin(newObj, data) {

            cityRegion = newObj.region;
            cityCuisine = newObj.cuisine;
            citySport = newObj.sport;
            cityEntertainment = newObj.entertainment;


            possibleCities.length = 0;
            for (i = 0; i <= 7; i++) {
                var thisCity = data[i];
                thisCity.counter = 0;

                // TODO change this if so that it includes all cities if no region picked.
                // if the city is in the right region, add it to the list and rate it.

                if (cityRegion !== thisCity.region) {

                    // console.log("yes");
                    if (thisCity.cuisine.includes(newObj.cuisine) === true) {

                        thisCity.counter++;

                    }

                    if (thisCity.sports.includes(newObj.sport) === true) {

                        thisCity.counter++;

                    }

                    if (thisCity.entertainment.includes(newObj.entertainment) === true) {

                        thisCity.counter++;

                    }

                    // console.log("counter", thisCity.counter);

                    if (thisCity.counter > 1) {

                        possibleCities.push(thisCity);

                    }

                } else if (cityRegion === thisCity.region) {
                    // add it to the list
                    // possibleCities.length = 0;
                    possibleCities.push(thisCity);
                    // console.log(possibleCities);
                    // rate it... a point for each
                    if (thisCity.cuisine.includes(newObj.cuisine) === true) {

                        thisCity.counter++;

                    }

                    if (thisCity.sports.includes(newObj.sport) === true) {

                        thisCity.counter++;

                    }

                    if (thisCity.entertainment.includes(newObj.entertainment) === true) {

                        thisCity.counter++;

                    }

                    console.log("counter", thisCity.counter);
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
            document.getElementById("appInput").style.display = "none";
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
            possibleCities = [];
            displayCity = {};
            cityRegion = "";
            cityCuisine = "";
            citySport = "";
            cityEntertainment = "";
            document.getElementById("appInput").style.display = "block";

        }




    }
    angular
        .module("vaCaApp")
        .factory("CityService", CityService)
})();