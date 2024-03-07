const form = document.getElementById('myForm');

form.addEventListener('submit', function(event) {

  event.preventDefault();

 

  const input = document.getElementById('myInput');

  const text = input.value;

 

  alert(`Hi ${text}`);

});