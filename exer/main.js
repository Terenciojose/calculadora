const form = document.querySelector('form')
const inputweigth = document.querySelector('#weigth')
const inputheigth = document.querySelector('#heigth')
const button = document.querySelector('.modal button')
const modal = document.querySelector('.modalWrapper')
const message = document.querySelector('.modal .title span')
const alertError = document.querySelector('.alert-error')

form.onsubmit = function(event){
  event.preventDefault();

  const heigth = inputheigth.value;
  const weigth = inputweigth.value;

  const ShowAlertError = notANumber(heigth) || notANumber(weigth)

  if (ShowAlertError) {
    alertError.classList.add('open');
    return;
  }
  alertError.classList.remove('open')

  

const result = IMC(weigth, heigth)
message.innerText = `O se imc é de ${result}`
modal.classList.add('open')

}
function notANumber(value){
return isNaN(value) || value == ""
}
function IMC(weigth, heigth){
  return (weigth / ((heigth / 100) ** 2)).toFixed(2)
}
button.addEventListener('click', function(){
  modal.classList.remove('open')
 
})