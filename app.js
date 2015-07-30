$(document).ready(function() {
  $(".image-container").append("<article class='home' data-price='400000'><img src='img/eleven.jpg'/><h4>$400,000</h4></article>");
  $(".image-container").append("<article class='home' data-price='40000000'><img src='img/eleven.jpg'/><h4>$40,000,000</h4></article>");
  $(".image-container").append("<article class='home' data-price='35000'><img src='img/eleven.jpg'/><h4>$35,000</h4></article>");

  $(".dark").on("click", function() {
    $("body").css("background", "url(img/dark_wood.png)");
  });

  $(".light").on("click", function() {
    $("body").css("background", "url(img/tileable_wood_texture.png)");
  });

  $(".textures").append("<span class='forest'></span>");

  $(".forest").on("click", function() {
    $("body").css("background", "url(img/forest.jpg)");
  });

  function homeArr () {
    var home = $(".home");
    var homesArr = [];
    for (i=0; i < home.length; i++) {
     homesArr.push($(home[i]).data("price"));
    }
    return homesArr;
  }

  function lowToHigh () {
    var homesArr = homeArr();
    return homesArr.sort(function(a, b) {
       return a - b;
    });
  }

  function highToLow () {
    var homesArr = homeArr();
    return homesArr.sort(function(a, b) {
       return b - a;
    });
  }
});