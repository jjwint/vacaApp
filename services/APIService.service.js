// (function () {
//     function APIService() {
       
//         return {
//             initMap: initMap,
//             getMap: getMap
//         }
//         var map;
        

//         function initMap() {
//             map = new google.maps.Map(document.getElementById('map'), {
//                 center: {
//                     lat: 42.3359240,
//                     lng: -83.0497190
//                 },
//                 zoom: 15
//             });
//         }
//         function getMap() {
//             return map;
//         }
//     }
//     angular
//         .module("vaCaApp")
//         .factory("APIService", APIService)
// })();