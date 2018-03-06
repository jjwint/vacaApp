(function () {
    var cityView = {
        bindings: {
            thisCity: '<'
        },
        templateUrl: "partials/cityView.html",
        controller: function (CityService) {
            var $ctrl = this;
            $ctrl.$onInit = function() {
            console.log($ctrl.thisCity);
            }
            
            $ctrl.initMap = function () {
                
                var map = new google.maps.Map(document.getElementById("map"), {
                    center: {lat: 42.3359240, lng: -83.0497190},
                    zoom: 15
                });
            }

        }
    };
    angular
        .module("vaCaApp")
        .component("cityView", cityView)
})();