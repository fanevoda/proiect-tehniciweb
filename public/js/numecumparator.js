

document.addEventListener('DOMContentLoaded', function() {

if (typeof localStorage !== 'undefined' && localStorage !== null) {
   
    const storedData = localStorage.getItem('newsletterData');

    if (storedData !== null) {
      const parsedData = JSON.parse(storedData);
      const customerName = parsedData.nume;
      console.log('Customer Name:', customerName);

      const customerElement = document.getElementById('message');
      customerElement.textContent = "Bine ai revenit " + customerName + "!";
    }


  }})