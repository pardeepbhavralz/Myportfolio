const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".Nav-links");

hamburger.addEventListener("click" , () => {
    hamburger.classList.toggle("active");
    navbar.classList.toggle("active");
 })

document.querySelectorAll(".Nav-links").forEach( n => n.addEventListener("click" , ()=>{
    
    hamburger.classList.remove("active");
    navbar.classList.remove("active");
 })
);




const bgAnimation = document.getElementById('bgAnimation');

const numberOfColorBox = 400;
for (let i = 0; i < numberOfColorBox; i++) {
    const colorBox = document.createElement('div');
    colorBox.classList.add('colorBox');
    bgAnimation.append(colorBox)
    
}