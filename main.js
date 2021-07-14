const openModal = document.getElementById('btn-open-modal');
const modal = document.getElementById('modal');

openModal.onclick = () =>  modal.style.display='flex' 

const ofModal = Array.prototype.forEach.call(document.querySelectorAll(".modal-bloc_close-modal, .modal-block-canceled"),(e) => e.addEventListener("click", () => {
    modal.style.display='none'
}))

window.onclick = (event) => event.target == modal ? modal.style.display = "none": null 




