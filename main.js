




// function mask(e) {
//     //console.log('mask',e);
//     var matrix = this.placeholder,// .defaultValue
//     i = 0,
//     def = matrix.replace(/\D/g, ""),
//     val = this.value.replace(/\D/g, "");
//     def.length >= val.length && (val = def);
//     matrix = matrix.replace(/[_\d]/g, function(a) {
//     return val.charAt(i++) || "_"
// });
//     this.value = matrix;
//     i = matrix.lastIndexOf(val.substr(-1));
//     i < matrix.length && matrix != this.placeholder ? i++ : i = matrix.indexOf("_");
//     setCursorPosition(i, this)
// }

//     window.addEventListener("DOMContentLoaded", function() {
//     var input = document.querySelector(".cx-form-examination-tel");
//     input.addEventListener("input", mask, false);
//     // input.focus();
//     setCursorPosition(3, input);
// });




 window.addEventListener("DOMContentLoaded", function() {
        [].forEach.call( document.querySelectorAll('.cx-form-examination-tel'), function(input) {      
        var keyCode;
        function mask(event) {
            event.keyCode && (keyCode = event.keyCode);
            var pos = this.selectionStart;
            if (pos < 3) event.preventDefault();
            var matrix = "+7 (___) ___ ____",
                i = 0,
                def = matrix.replace(/\D/g, ""),
                val = this.value.replace(/\D/g, ""),
                new_value = matrix.replace(/[_\d]/g, function(a) {
                    return i < val.length ? val.charAt(i++) || def.charAt(i) : a
                });
            i = new_value.indexOf("_");
            if (i != -1) {
                i < 5 && (i = 3);
                new_value = new_value.slice(0, i)
            }
            var reg = matrix.substr(0, this.value.length).replace(/_+/g,
                function(a) {
                    return "\\d{1," + a.length + "}"
                }).replace(/[+()]/g, "\\$&");
            reg = new RegExp("^" + reg + "$");
            if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
            if (event.type == "blur" && this.value.length < 5)  this.value = ""
        }
        console.log(input)
     
        input.addEventListener("input", mask, false);
        input.addEventListener("focus", mask, false);
        input.addEventListener("blur", mask, false);
        input.addEventListener("keydown", mask, false)
     
      });
     
    });
   
 
const openModalButton = document.querySelector('.button__open-modal') // кнопка вкл модал

const windowModal = document.querySelector('.modal-overlay') // получение элемента модалки 

const closeModal = document.querySelectorAll('.close-trigger'); // получение элементов для закрытия 


 const  closeKayDown = document.addEventListener('keydown', () => { // ивент закрытия ESC
    
      event.key === 'Escape' ? windowModal.style.display='none': null 
 })

openModalButton.addEventListener('click',()=>{ 
    windowModal.style.display='flex'
})

for(let i = 0 ; i < closeModal.length ; i++) {

    const btn = closeModal[i]; 

    btn.addEventListener('click' , () => windowModal.style.display='none')

}

windowModal.addEventListener('mousedown',  (e)=>{

    e.target === windowModal ? windowModal.style.display='none': null 

})  







