const form = document.querySelector('form');
form.addEventListener('submit', validateForm);

function validateForm(event) 
{
  event.preventDefault();

  const inputNume = document.querySelector('#newsletterNume');
  const inputEmail = document.querySelector('#newsletterEmail');
  const inputTime = document.querySelector('#newsletterTime');

  const regexNume = /^[A-Za-z\s]+$/;
  const regexEmail = /^\S+@\S+\.\S+$/; 

  if ( inputNume.value.includes('calin') )
  {
    const array = ['fe', 'reas', 'ca'];
    array.push('calin');
    console.log(array);
  }

  if (!regexNume.test(inputNume.value)) {
    alert('Introduceți doar litere alfabetice și spații în câmpul Nume!');
    return;
  }

  if (!regexEmail.test(inputEmail.value)) {
    alert('Introduceți o adresă de email validă!');
    return;
  }

  const newsletterData = {
    nume: inputNume.value,
    email: inputEmail.value,
    time: inputTime.value
  };
  console.log(newsletterData);

  localStorage.setItem('newsletterData', JSON.stringify(newsletterData));

  inputNume.value = '';
  inputEmail.value = '';
  inputTime.value = '';
  
}
