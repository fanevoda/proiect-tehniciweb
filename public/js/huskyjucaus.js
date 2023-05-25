var dogPhoto = document.querySelector(".dog-photo");

function animateDog() 
{
  dogPhoto.style.animationPlayState = "paused";
  setTimeout(function() 
  {
    dogPhoto.style.animationPlayState = "running";
  }, 1000);
}

dogPhoto.style.animationPlayState = "running";

setInterval(animateDog, 3000);
