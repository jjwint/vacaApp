(function () {
    var CityService = function ($http) {
        var possibleCities = [];
        var displayCity = "";
        return {
            checkLogin: checkLogin,
            getLibrary: getLibrary,
            getCities: getCities,
            
        }



        function checkLogin(newObj, data) {
                
            for (i = 0; i < 2; i++) {
                
                
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
                if (data[i].counter > 1) {
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

        


    }
    angular
        .module("vaCaApp")
        .factory("CityService", CityService)
})();