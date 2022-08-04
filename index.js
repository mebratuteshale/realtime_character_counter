
// get DOM elements
const textareaEl = document.getElementById('textarea')
const remainCharEl = document.getElementById("remain-char")
const totalCharEl = document.getElementById("total-char");

// add event listener to track what ever typed inside the text area
let totalChar = 0;
textareaEl.addEventListener("keyup",()=>{
    updateCounter();
})


function updateCounter() {
    // set display on the counter labels
    remainCharEl.innerText = (textareaEl.getAttribute("maxlength"))-(textareaEl.value).length
    totalCharEl.innerText =  textareaEl.value.length;
}