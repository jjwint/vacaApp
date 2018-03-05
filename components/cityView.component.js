(function () {
    var cityView = {
        templateUrl: "partials/cityView.html",
        controller: function (CityService) {
            var $ctrl = this;

            $ctrl.displayCity = CityService.getDisplayCity();
            console.log($ctrl.displayCity);


            // $ctrl.initMap() = function () {
            //     $ctrl.map = new google.maps.Map(document.getElementById('map'), {
            //         center: {
            //             lat: 42.3359240,
            //             lng: -83.0497190
            //         },
            //         zoom: 15
            //     });
            // }
        }
    };
    angular
        .module("vaCaApp")
        .component("cityView", cityView)
})();