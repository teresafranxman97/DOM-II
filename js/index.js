// Your code goes here

// Adding a border when hovering over an img
const imgBorder = document.querySelector('img');
imgBorder.addEventListener("mouseenter", () => {
    imgBorder.style.border = "4px dotted red"
})

// const imgBorder = document.querySelector('img'); ---- 
imgBorder.addEventListener("mouseleave", () => {
    imgBorder.style.border = "none"
})


// Adding a transform / transition to img
const bigImg = document.querySelector('.img-content img');
bigImg.addEventListener("mouseenter", () => {
    bigImg.style.transform = "scale(1.2)";
    bigImg.style.transition = "all 0.3s"
})

bigImg.addEventListener("mouseleave", () => {
    bigImg.style.transform = "scale(1)";
})