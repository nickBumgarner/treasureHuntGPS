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


      var distanceAway = distance(pos.coords.longitude, pos.coords.latitude, -75.496371, 39.031725);
      if (distanceAway <= .1) {
        $('body').removeClass('black');
        $('body').addClass('blue');
        $('body h1').text("You're in the office");
      }
      else {
        $('body').addClass('black');
        $('body').removeClass('blue');
        $('body h1').text("Not near the office");

      }
    });

  }


  whereAreWe();

  window.setInterval(function () {
    whereAreWe();


  }, 5000);

});

// 39.031725, lng:  -75.496371