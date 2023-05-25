function handleFormSubmit(event) {
  event.preventDefault();

  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var model = document.getElementById("Produs").value;
  var squareMeters = document.getElementById("metri").value;
  var address = document.getElementById("address").value;

  var orderData = {
    name: name,
    email: email,
    model: model,
    squareMeters: squareMeters,
    address: address
  };

  localStorage.setItem("orderData", JSON.stringify(orderData));


  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("Produs").value = "";
  document.getElementById("metri").value = "";
  document.getElementById("address").value = "";
}

var form = document.querySelector("form");
form.addEventListener("submit", handleFormSubmit);
