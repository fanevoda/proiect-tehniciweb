var dogPhoto = document.querySelector(".dog-photo");

document.addEventListener("keydown", function(event) {

    if (event.key === "ArrowUp") 
    {
       event.preventDefault();

        var computedStyle = getComputedStyle(dogPhoto);
        var currentOpacity = computedStyle.opacity;
        dogPhoto.style.opacity = (currentOpacity === "0") ? "1" : "0"; 
      

    }


    event.stopPropagation();


  });

  window.addEventListener("resize", function() {
    var dogPhoto = document.querySelector(".dog-photo");

    if (dogPhoto) {
      var boundingRect = dogPhoto.getBoundingClientRect();
      console.log("Lățimea elementului:", boundingRect.width);
      console.log("Înălțimea elementului:", boundingRect.height);
    }
})
  