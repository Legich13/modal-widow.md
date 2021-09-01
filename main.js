




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




 // =====================================================================================================

// описание работы плагина

    // инпут имя class cx-form-examination-name
    // инпут телефон class cx-form-examination-tel
    // работа modal window дата атрибут по типу:data-modal="front-modal" class modal-overlay
    // запуск modal window кнопка class button__open-modal

// =======================================================================================================


// регулярка на номер телефона
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

     
        input.addEventListener("input", mask, true);
        input.addEventListener("focus", mask, false);
        input.addEventListener("blur", mask, false);
        input.addEventListener("keydown", mask, false)
     
      });
     
    });

    // обработчик модального окна
if (document.querySelector('.button__open-modal')){
    const openModalButton = document.querySelectorAll('.button__open-modal') // кнопка вкл модал
    const closeModal = document.querySelectorAll('.close-trigger'); // получение элементов для закрытия

    openModalButton.forEach((itme)=>{
        itme.addEventListener('click',()=>{
        const  modalDataId = itme.getAttribute('data-modal');
        const  windowModal = document.querySelector('.modal-overlay[data-modal="' + modalDataId  + '"]');

            windowModal.style.display='flex'

            // закрытие на нажатие Esc

            document.addEventListener('keydown', () => {
                event.key === 'Escape' ? windowModal.style.display='none': null
            })

            // цикл от ложного закрытия модального окна

            for(let i = 0 ; i < closeModal.length ; i++) {
                const btn = closeModal[i];
                btn.addEventListener('click' , () => windowModal.style.display='none')
            }
            // обработчик нажатия только на левую кнопку

            windowModal.addEventListener('mousedown',  (e)=>{
                e.target === windowModal && e.which === 1 ? windowModal.style.display='none': null
            })
        })
    })



}
    // проверка на пустое поле в имени

if(document.querySelectorAll('.cx-form-examination-name').length){
    const formNameExamination = document.querySelectorAll('.cx-form-examination-name')
    formNameExamination.forEach((i) => {
        i.oninput = () => {
            if(i.value.charAt(0) === ' ') {
                i.value = '';
            }}
})}







