let main = document.querySelector('.main')
let number = document.querySelector('.number')
let btn = document.querySelector ('.button')
main.addEventListener('mouseover',()=>{
    number.classList.add('hovernumber')
    btn.classList.add('buttonhover')

})
main.addEventListener('mouseout',()=>{
    number.classList.remove('hovernumber')
    btn.classList.remove('buttonhover')

})