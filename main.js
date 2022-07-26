// Please provide a vaild email
const form = document.querySelector('.container__content__form');
const inputEmail = document.querySelector('.container__content__form__email');
const error = document.querySelector('.container__content__form__email--error');

form.addEventListener('submit',(event)=>{
    event.preventDefault();
    console.log("se ha presionado el boton")
});