const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) { 
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close) { 
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

var image = document.getElementById('image');

image.addEventListener('mouseover', function(){
    image.src = "images/Products/BD/tactical.jpg"
})
image.addEventListener('mouseout', function(){
    image.src = "images/Products/BD/bd-collar-tan-camo-768x768.png"
})

