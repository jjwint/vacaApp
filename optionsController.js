(function() {


function OptionsController() {
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

        $ctrl.hideRegionForm = function() {
        	$ctrl.regionShow = false;
        }

        $ctrl.hideCuisineForm = function() {
        	$ctrl.cuisineShow = false;
        }

        $ctrl.hideEntertainmentForm = function() {
        	$ctrl.entertainmentShow = false;
        }

        $ctrl.hideSportsForm = function() {
        	 $ctrl.sportsShow = false;
        }

        $ctrl.sayHi = function() {
                console.log("hi!!");
        }
}

angular
	.module("vaCaApp")
	.controller("OptionsController", OptionsController);

})();