let arrow = document.querySelector('.arrow');
let box = document.querySelector('.box');

arrow.addEventListener('click',()=>{
box.classList.toggle('extended');
console.log('arrow clicked');
})