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
            
            cityCuisine = newObj.cuisine;
            citySport = newObj.sport;
            cityEntertainment = newObj.entertainment;

           
            // possibleCities = [];
            for (i = 0; i <= 7; i++) {
                // data[i].counter = 0;
                
                if(newObj.region === data[i].region && (possibleCities.includes(data[i]) === false)){
                    possibleCities.push(data[i]);
                    console.log(possibleCities);
                    if(possibleCities.length > 1 ){
                        if (data[i].cuisine.includes(newObj.cuisine) === true) {

                              data[i].counter++;
                  
                        }
                    
                        if (data[i].cuisine.includes(newObj.cuisine) === true) {

                            data[i].counter++;
                        
                        }

                        if (data[i].entertainment.includes(newObj.entertainment) === true) {

                            data[i].counter++;
                        
                        }


                        
                    } 
                }
              
            //     data[i].counter = 0;
            //     // if the user selected a region
               
            //         // if the user's region matches this city's region
            //     if (newObj.region === data[i].region) {
            //         data[i].counter += 2;
                    
            //     }
                

           

            //     if (data[i].cuisine.includes(newObj.cuisine) === true) {

            //         data[i].counter++;
                  
            //     }
            //     if (data[i].entertainment.includes(newObj.entertainment) === true) {

            //         data[i].counter++;
                  
            //     }
            //     if (data[i].counter > 0 && (possibleCities.includes(data[i]) === false)) {
                  
            //        // if (possibleCities.length < 3) {
            //             possibleCities.push(data[i]);
            //             console.log(possibleCities);
                        

            //        // }
            //     }
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
        



    }
    angular
        .module("vaCaApp")
        .factory("CityService", CityService)
})();