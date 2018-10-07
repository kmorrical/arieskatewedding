(function() {
    'use strict';

    angular
        .module('app')
        .controller('HomeCtrl', HomeCtrl);

HomeCtrl.$inject = ['$http'];


function HomeCtrl($http) {
  var vm = this;

  if (window.innerWidth >= 700){
    vm.usingMobile = false;
  }
  else {
    vm.usingMobile = true;
  }

  if (window.innerWidth > 1100) {
		vm.bigScreen = true;
	}
	else {
		vm.bigScreen = false;
		document.getElementById("fourthDiv").style.padding = "0px 0px 60px 0px";
	}

  if (typeof google === 'object' && typeof google.maps === 'object') {
   vm.googlemaps = true;
  }

  window.onload = function() {setDivHeight();}


  function setDivHeight() {

    var secondDivH= document.getElementById('awnoldPartner').offsetHeight;
    document.getElementById('pairDiv').style.height = secondDivH + 'px';
    var logoColHeight = document.getElementById('logoCol').clientHeight;
    var groundElement = document.getElementById('greyCol');
    groundElement.style.height = logoColHeight + 'px';

  }

  var countDownDate = new Date("Aug 18, 2018 16:30:00").getTime();

// Update the count down every 1 second
  var x = setInterval(function() {

  // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now an the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    document.getElementById("demo").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s " + "til our wedding!";

    // If the count down is finished, write some text 
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("demo").innerHTML = "!";
    }
  }, 1000);

}
})();