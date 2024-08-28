import "./styles.css";
import renderHomepage from "./pages/homePage.js";
import renderFooter from "./pages/footer.js"

const homeBtn = document.querySelectorAll("button")[0];



function clearContent() {
    // const content = document.querySelector("#content");
    while(content.firstChild) { 
        content.removeChild(content.firstChild); 
    } 
}


//renderHomepage();
renderFooter();

homeBtn.addEventListener("click",()=>{
    clearContent()
    renderHomepage();
})


