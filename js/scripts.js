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


      var stop1Lon = -75.492184;
      var stop1Lat = 39.029300;
      var distanceStop1 = distance(pos.coords.longitude, pos.coords.latitude, stop1Lon, stop1Lat);


      var stop2Lon = -75.406544;
      var stop2Lat = 38.889716;
      var distanceStop2 = distance(pos.coords.longitude, pos.coords.latitude, stop2Lon, stop2Lat);


      var stop3Lon = -75.406544;
      var stop3Lat = 38.889716;
      var distanceStop3 = distance(pos.coords.longitude, pos.coords.latitude, stop3Lon, stop3Lat);


      if (distanceStop1 < .05) {
        $('.slide-2').addClass('show');
      }
      else {
        alert("You must not be there yet, keep trying!");
      }
     if (distanceStop2 > .05) {
        $('.slide-3').addClass('show');
      }

     if (distanceStop3 > .05) {
        $('.slide-4').addClass('show');
      }




    });

  }

  $('.check-button').click(function () {
    whereAreWe();

  });
});

// 39.031725, lng:  -75.496371