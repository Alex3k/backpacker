angular.module("backpacker.homepage", ['ngMap']).
controller("HomePageController", function(NgMap) {
    var vm = this;
	vm.thing = "HELLO";

	vm.googleMapsUrl="https://maps.googleapis.com/maps/api/js?key=AIzaSyABCNTv1qurz0eHxRvdTuawfPiyQGrO8l0 ";

	NgMap.getMap().then(function(map) {
	    console.log(map.getCenter());
	    console.log('markers', map.markers);
	    console.log('shapes', map.shapes);
  	});
});