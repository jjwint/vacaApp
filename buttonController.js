(function() {

function ButtonController() {
	var $ctrl = this;
	    $ctrl.regionShow = false;
        $ctrl.cuisineShow = false;
        $ctrl.entertainmentShow = false;
        $ctrl.sportsShow = false;

        $ctrl.showRegionForm = function() {
        	$ctrl.regionShow = true;
        }

        $ctrl.showCuisineForm = function() {
        	$ctrl.cuisineShow = true;
        }

        $ctrl.showEntertainmentForm = function() {
        	$ctrl.entertainmentShow = true;
        }

        $ctrl.showSportsForm = function() {
        	$ctrl.sportsShow = true;
        }
}

angular
	.module("vaCaApp")
	.controller("ButtonController", ButtonController);

})();