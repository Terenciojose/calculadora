export const Modal = {
  Wapper : document.querySelector('.modal-wrapper'),
  Message : document.querySelector('.modal .title span'),
  ButtunClose : document.querySelector('.modal button.close'),
  
  open(){
    Modal.Wapper.classList.add('open')
  },
  close(){
    Modal.Wapper.classList.remove('open')
  }
}
Modal.ButtunClose.addEventListener('click', function(){
  Modal.close()
  })

  window.addEventListener('keydown', handleKeyDown)

  function handleKeyDown(event){
    if (event.key === 'Escape') {
      Modal.close()
    }
  }