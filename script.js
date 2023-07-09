const ratingEls = document.querySelectorAll(".rating");
const btn = document.getElementById("button1");
const containerEl = document.getElementById("container")
let selectRating = "";

ratingEls.forEach((ratingEl) => {
    ratingEl.addEventListener("click", (event) =>{
        removeActive();
        selectRating = event.target.innerText || event.target.parentNode.innerText;
        event.target.classList.add("active")
        event.target.parentNode.classList.add("active")
    });
});

btn.addEventListener("click", ()=>{
    if(selectRating !== ""){
        containerEl.innerHTML=
        `
        <strong>Thank You</strong>
        <br><br>
        <strong>Feedback: ${selectRating}</strong>
        <br><br>
        <p>We'll use your feedback to improve our customer support.</p>
        `
    }
})
function removeActive(){
    ratingEls.forEach((ratingEL)=>{
        ratingEL.classList.remove("active");
    })
}