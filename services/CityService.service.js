(function () {
    var CityService = function ($http) {
        var possibleCities = [];
        var displayCity = {};
        return {
            checkLogin: checkLogin,
            getLibrary: getLibrary,
            getCities: getCities,
            saveCityObj: saveCityObj,
            getCityObj: getCityObj
        }

        function checkLogin(newObj, data) {
                
            for (i = 0; i < 7; i++) {
                
                
                if (newObj.region === data[i].region) {
                    data[i].counter++;
                }
                
                if (data[i].sports.includes(newObj.sport) === true) {
                   
                    data[i].counter++;
                }
               
                if (data[i].cuisine.includes(newObj.cuisine) === true) {
                   
                    data[i].counter++;
                }
                if (data[i].entertainment.includes(newObj.entertainment) === true) {
                   
                    data[i].counter++;
                }
                if (data[i].counter > 1 && (possibleCities.includes(data[i]) === false)) {
                    possibleCities.push(data[i]);
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

        
        
    }
    angular
        .module("vaCaApp")
        .factory("CityService", CityService)
})(); 