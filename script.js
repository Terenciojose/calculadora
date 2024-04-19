import { Modal } from "./modal.js"
import {AlertError} from "./alert-error.js"

const form = document.querySelector('form')
const inputheigth = document.querySelector('#heigth')
const inputweigth = document.querySelector('#weigth')


form.onsubmit = function(event){
event.preventDefault();

const weigth = inputweigth.value;
const heigth = inputheigth.value;

const ShowAlertError = notANumber(weigth) || notANumber(heigth)
if (ShowAlertError) {
AlertError.open()
  return;
}
AlertError.close()

const result = IMC(weigth, heigth)
const message = `O seu IMC é de ${result}`

Modal.Message.innerText = message
Modal.open()
}
function notANumber(value){
  return isNaN(value) || value == ""
}

function IMC(weigth, heigth){
return (weigth / ((heigth / 100) ** 2)).toFixed(2)
}
inputweigth.Oninput = () => AlertError.close()