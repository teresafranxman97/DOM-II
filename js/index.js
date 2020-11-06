// Your code goes here

// Window Event

window.addEventListener('load', (event) => {
    alert('page is fully loaded');
})


// body 
const bod = document.querySelector('body');
bod.style.textAlign = 'center'
bod.style.margin = '3vw'
bod.style.padding = '5vw'
bod.style.border = '2px solid black'


// Adding a border when hovering over an img  ------ mouseenter / mouseleave event
const imgBorder = document.querySelector('img');
imgBorder.addEventListener("mouseenter", () => {
    imgBorder.style.border = "4px dotted red"
})

imgBorder.addEventListener("mouseleave", () => {
    imgBorder.style.border = "none"
})


// Adding a transform / transition to img  ------ mouseenter / mouseleave event
const bigImg = document.querySelector('.img-content img');
bigImg.addEventListener("mouseenter", () => {
    bigImg.style.transform = "scale(1.2)";
    bigImg.style.transition = "all 0.3s"
})

bigImg.addEventListener("mouseleave", () => {
    bigImg.style.transform = "scale(1)";
})


// logo-heading alignment
const h1 = document.querySelector('h1')
h1.addEventListener('mouseover', () => {
    h1.style.color = 'red'
})
h1.addEventListener('mouseout', () => {
    h1.style.color = 'royalblue'
})


// logo-heading color 
const hOne = document.querySelector('h1')
h1.style.color = 'royalblue'
h1.style.fontSize = '4vw'



// H2 CHANGES
const h2 = document.querySelector('h2');
h2.style.color = 'purple'


// con sec

const contentSection = document.querySelector('.content-section')
contentSection.style.display = 'flex'
contentSection.style.fontSize = '15px'
contentSection.style.textAlign = 'center'
contentSection.style.marginLeft = '4vw'
contentSection.style.marginRight = '4vw'

// content-sec

const consH2 = document.querySelector('.content-section h2');
consH2.style.color = 'white'
consH2.addEventListener('click', () => {
    alert('GOOD CHOICE!')
})

//  Changed content-section background color
const inn = document.querySelector('.content-section');
inn.style.background = '#77eded'
inn.style.textAlign = 'center'
inn.style.border = '1px solid black'
inn.style.color = 'black'





// foooter 
const foot = document.querySelector('.footer')
foot.style.borderTop = '2px solid lightgrey'






// 
const invs = document.querySelector('.content-destination');
invs.style.background = 'pink'
invs.style.padding = '2vw'
invs.style.color = 'white'
invs.style.borderBottom = '2px solid lightgrey'

