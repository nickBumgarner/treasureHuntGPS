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

      //Video Scene
      var stop1Lon = -75.532773;
      var stop1Lat = 39.126865;
      var distanceStop1 = distance(pos.coords.longitude, pos.coords.latitude, stop1Lon, stop1Lat);

      //Pizzadilis
      var stop2Lon = 39.025397;
      var stop2Lat = -75.568716;
      var distanceStop2 = distance(pos.coords.longitude, pos.coords.latitude, stop2Lon, stop2Lat);

      //Home
      var stop3Lon = -75.496402;
      var stop3Lat = 39.031714;
      var distanceStop3 = distance(pos.coords.longitude, pos.coords.latitude, stop3Lon, stop3Lat);


      if ((distanceStop1 < 1) && (!$('.slide-2').hasClass('show'))) {
        $('.slide-2').addClass('show');
      }

      else if ((distanceStop2 < 1) && (!$('.slide-3').hasClass('show') && ($('.slide-2').hasClass('show')))) {

        $('.slide-3').addClass('show');
      }

      else if ((distanceStop3 < 1) && (!$('.slide-4').hasClass('show') && ($('.slide-3').hasClass('show')))) {

        $('.slide-4').addClass('show');
      }
      else {
        alert("Try again, you're not there yet!");
      }

    });

  }

  $('.check-button').click(function () {
    whereAreWe();
  });
  $('.final-button').click(function () {
    $(".slide-5").addClass('show');
  });

});

