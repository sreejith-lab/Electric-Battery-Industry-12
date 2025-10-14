const btn = document.querySelector('#sum-id2');

btn.addEventListener('click', function(){
    const div1 = document.querySelector('#The-card1');
    div1.classList.add('display');
    const div2 = document.querySelector('#The-card2');
    div2.classList.remove("hero-card2");
})
const btn2 = document.querySelector('#sum-id3');

btn2.addEventListener('click', function(){
    const div1 = document.querySelector('#The-card2');
    div1.classList.add('display');
    const div2 = document.querySelector('#The-card3');
    div2.classList.remove("hero-card2");
})

