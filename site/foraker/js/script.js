

$(document).ready(function() {

    $("#stop1").waypoint(function(event, direction) {
       if (direction === 'down') {
          $("body").animate({backgroundColor: 'rgba(25,148,255,0.5)'},2000)
       }
       else {
          $("body").animate({backgroundColor: 'rgba(240,255,0,0.5)'},2000)
       }
    });

    $("#stop2").waypoint(function(event, direction) {
       if (direction === 'down') {
          $("body").animate({backgroundColor: 'rgba(255,0,0,0.5)'},2000)
       }
       else {
          $("body").animate({backgroundColor: 'rgba(25,148,255,0.5)'},2000)
       }
    });

    $("#stop3").waypoint(function(event, direction) {
       if (direction === 'down') {
          $("body").animate({backgroundColor: 'rgba(96,0,179,0.5)'},2000)
       }
       else {
          $("body").animate({backgroundColor: 'rgba(255,0,0,0.5)'},2000)
       }
    });

    $("#stop4").waypoint(function(event, direction) {
       if (direction === 'down') {
          $("body").animate({backgroundColor: 'rgba(60,200,0,0.5)'},2000)
       }
       else {
          $("body").animate({backgroundColor: 'rgba(96,0,179,0.5)'},2000)
       }
    });

});