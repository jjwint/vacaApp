(function () {
    var CityService = function ($http) {
        var possibleCities = [];
        var displayCity = {};
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
            console.log(newObj)
            cityCuisine = newObj.cuisine;   
            citySport = newObj.sport;
            cityEntertainment = newObj.entertainment; 
            
            
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
            document.getElementById("appInput").style.display = "none";
            displayCity = city;
            console.log(displayCity, citySport, cityCuisine, cityEntertainment)
           
            
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
        

        
        
    }
    angular
        .module("vaCaApp")
        .factory("CityService", CityService)
})(); 