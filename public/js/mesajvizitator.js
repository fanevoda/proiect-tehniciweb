document.addEventListener("DOMContentLoaded", function() {

    var randomNumber = Math.floor(Math.random() * 1000) + 1;
  
    var currentDate = new Date();
  
    var messageElement = document.getElementById("message");
  

    var day = currentDate.getDate();
    var month = currentDate.getMonth() + 1; // Adăugăm 1, deoarece lunile sunt indexate de la 0
    var year = currentDate.getFullYear();

    var dateString = day + "/" + month + "/" + year;


    if (randomNumber === 1) 
    {
      messageElement.textContent = "Felicitări! Ești primul vizitator astăzi!";
    } else {
      messageElement.textContent = "Ești al " + randomNumber + "-lea vizitator în data de: " + dateString;
    }
  });
  