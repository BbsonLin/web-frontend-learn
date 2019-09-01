// IIFE; Prevent other places using our variables
;(function() {
  var colorButtons = document.querySelectorAll("label");
  var greenSocksImage = document.querySelector(".green-socks");
  var blueSocksImage = document.querySelector(".blue-socks");
  var productTitle = document.querySelector(".product-title");

  blueSocksImage.style.display = "none";
  greenSocksImage.style.display = "";
  productTitle.textContent = "Green Socks";

  colorButtons.forEach(function(button) {
    button.addEventListener("mouseover", function(evt) {
      if (button.classList.contains("text-primary")) {
        greenSocksImage.style.display = "none";
        blueSocksImage.style.display = "";
        productTitle.textContent = "Blue Socks";
      } else {
        blueSocksImage.style.display = "none";
        greenSocksImage.style.display = "";
        productTitle.textContent = "Green Socks";
      }
    });
  });
})();
