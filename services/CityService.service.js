(function () {
   var CityService = function ($http) {
    var possibleCities = [];
    var displayCity = "";
        return {
            checkLogin: checkLogin,
            getLibrary: getLibrary,
            getCities: getCities,
            showCityInfo: showCityInfo,
            getDisplayCity: getDisplayCity
        }
        
        
        
        function checkLogin(newObj, data) {
            
            for (i = 0; i < 2; i++) {
                if (newObj.region === data[i].region) {
                    data[i].counter ++;
                }
                if (newObj.sports === data[i].sports) {
                    data[i].counter ++;
                }
                if (newObj.cuisine === data[i].cuisine) {
                    data[i].counter ++;
                }
                if (newObj.entertainment === data[i].entertainment) {
                    data[i].counter ++;
                }
                if (data[i].counter > 1) {
                    possibleCities.push(data[i]);
                }
            }

            console.log(data, possibleCities);
            
        }
        function getLibrary() {
            return $http.get("data/cityInfo.json")
                    .then(function(response) {
                        return response.data;
                    });
        }

        function getCities() {
            return possibleCities;
        }

        function showCityInfo(city) {

            document.getElementById("cityView").style.display="block";
            displayCity = city;
           
        }

        function getDisplayCity() {
            return displayCity;
            console.log(displayCity);
        }


    }
    angular
        .module("vaCaApp")
        .factory("CityService", CityService)
})();