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

      $('.distance strong').text(distance(pos.coords.longitude, pos.coords.latitude, -75.496371, 39.031725));

      var garageLon = -75.496347;
      var garageLat = 39.031637;

      var livingLon = -75.496445;
      var livingLat = 39.031760;

      var distanceAwayGarage = distance(pos.coords.longitude, pos.coords.latitude, garageLon, garageLat);
      var distanceAwayLiving = distance(pos.coords.longitude, pos.coords.latitude, livingLon, livingLat);
      if (distanceAwayGarage <= .05) {
        $('body').removeClass('black');
        $('body').addClass('blue');
        $('body h1').text("Near garage");
      }
      else if (distanceAwayLiving <= .05) {
        $('body').addClass('black');
        $('body').removeClass('blue');
        $('body h1').text("Near living room");

      }
      else {
        $('body').removeClass('black', 'blue');
        $('body h1').text("Not near anything");

      }
    });

  }


  whereAreWe();

  window.setInterval(function () {
    whereAreWe();


  }, 500);

});

// 39.031725, lng:  -75.496371