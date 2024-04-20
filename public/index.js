const bulbOn = document.querySelector('.bulbOn');
const range = document.querySelector('.range');

range.addEventListener('change', function(){
    let value = Number(this.value);
    bulbOn.style.opacity = value/100;
});