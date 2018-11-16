$(document).ready(function() {
  $("form#celebrity").submit(function(event) {
    var age = parseInt($("input#age").val());
    var gender = $("select#gender").val();
    var eyecolor = $("select#eye-color").val();

    if ((eyecolor === "blue") && (age > 37) && (gender === "male")) {
      $(".anna-ferris").show();
      $(".wanda-sykes").hide();
      $(".jessica-simpson").hide();
      $(".no-date").hide();
    }

    if ((eyecolor === "blue") && (age > 40) && (gender === "male")) {
      $(".wanda-sykes").show();
      $(".jessica-simpson").hide();
      $(".anna-ferris").hide();
      $(".no-date").hide();
    }

    if ((eyecolor === "blue") && (age > 43) && (gender === "male")) {
      $(".jessica-simpson").show();
      $(".anna-ferris").hide();
      $(".wanda-sykes").hide();
      $(".no-date").hide();
    }

    if ((eyecolor === "brown") || (age < 37) || (gender === "female")) {
      $(".no-date").show();
      $(".anna-ferris").hide();
      $(".wanda-sykes").hide();
      $(".jessica-simpson").hide();
    }
    event.preventDefault();
  });
});
