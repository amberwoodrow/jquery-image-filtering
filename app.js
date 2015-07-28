$(document).ready(function() {
  $(".image-container").append("<article class='home' data-price='400,000'><img src='img/eleven.jpg'/><h4>$400,000</h4></article>");
  $(".image-container").append("<article class='home' data-price='40,000,000'><img src='img/eleven.jpg'/><h4>$40,000,000</h4></article>");
  $(".image-container").append("<article class='home' data-price='35,000'><img src='img/eleven.jpg'/><h4>$35,000</h4></article>");

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
});