const counter = document.querySelector('#counterValue');
const btnDecrement = document.querySelector('#btnDecrement');
const btnIncrement = document.querySelector('#btnIncrement');

let value = counter.value

btnIncrement.addEventListener('click', () =>{
  value = ++value
  counter.value = value
})

btnDecrement.addEventListener('click', () =>{
  value = value !== 0 ? --value : 0
  counter.value = value
})
