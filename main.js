const openModalButton = document.querySelector('.button__open-modal') // кнопка вкл модал

const windowModal = document.querySelector('.modal-overlay') // получение элемента модалки 

const closeModal = document.querySelectorAll('.close-trigger'); // получение элементов для закрытия 

const  closeKayDown = document.addEventListener('keydown', () => { // ивент закрытия ESC
    windowModal.style.display='none'
})
 

openModalButton.addEventListener('click',()=>{
    windowModal.style.display='flex'
    console.log(closeModal)
})

for(let i = 0 ; i < closeModal.length ; i++) {
    const btn = closeModal[i]; 
    btn.addEventListener('click' , () => windowModal.style.display='none')
}

windowModal.addEventListener('mousedown',(e)=>{
    e.target === windowModal ? windowModal.style.display='none': null 
})  





