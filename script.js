let imagelide = document.getElementById("slides-image");
let images = [
    "images/dress1.jpg",
    "images/dress2.jpg",
    "images/dress3.jpg"
];
let currentIndex = 0;

function changeSlide(){
    currentIndex = currentIndex +1;
    if(currentIndex >= images.length){
        currentIndex = 0;
    }
    imagelide.src = images[currentIndex];
   
}
 setInterval(changeSlide, 3000);