$(document).ready(function () {

  function whereAreWe() {
    function distance(lon1, lat1, lon2, lat2) {
      var R = 6371; // Radius of the earth in km
      var dLat = (lat2 - lat1).toRad();  // Javascript functions in radians
      var dLon = (lon2 - lon1).toRad();
      var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
          Math.cos(lat1.toRad()) * Math.cos(lat2.toRad()) *
          Math.sin(dLon / 2) * Math.sin(dLon / 2);
      var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      var d = R * c; // Distance in km
      return d;
    }

    /** Converts numeric degrees to radians */
    if (typeof(Number.prototype.toRad) === "undefined") {
      Number.prototype.toRad = function () {
        return this * Math.PI / 180;
      }
    }

    window.navigator.geolocation.getCurrentPosition(function (pos) {

      //Nicks
      var stop1Lon = -75.492184;
      var stop1Lat = 39.029300;
      var distanceStop1 = distance(pos.coords.longitude, pos.coords.latitude, stop1Lon, stop1Lat);

      //Joshes
      var stop2Lon = -75.506596;
      var stop2Lat = 38.889688;
      var distanceStop2 = distance(pos.coords.longitude, pos.coords.latitude, stop2Lon, stop2Lat);

      //Phils
      var stop3Lon = -75.604419;
      var stop3Lat = 38.683842;
      var distanceStop3 = distance(pos.coords.longitude, pos.coords.latitude, stop3Lon, stop3Lat);

      //Royal Farms
      var stop4Lon = -75.583544;
      var stop4Lat = 38.805206;
      var distanceStop4 = distance(pos.coords.longitude, pos.coords.latitude, stop4Lon, stop4Lat);


      if ((distanceStop1 < .5) && (!$('.slide-2').hasClass('show'))) {
        $('.slide-2').addClass('show');
      }

      else if ((distanceStop2 < .5) && (!$('.slide-3').hasClass('show'))) {

        $('.slide-3').addClass('show');
      }

      else if ((distanceStop3 < .5) && (!$('.slide-4').hasClass('show'))) {

        $('.slide-4').addClass('show');
      }
      else if (distanceStop4 < .5) {
        $('.slide-5').addClass('show');
      }
      else {
        alert("Try again, you're not there yet!");
      }
      console.log("Ran");

    });

  }

  $('.check-button').click(function () {
    whereAreWe();
  });

});

// 39.031725, lng:  -75.496371