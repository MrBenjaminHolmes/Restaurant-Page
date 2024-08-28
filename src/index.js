import "./styles.css";
import renderHomepage from "./pages/homePage.js";
import renderFooter from "./pages/footer.js"
import renderMenu from "./pages/Menu.js";

const homeBtn = document.querySelectorAll("button")[0];
const menuBtn = document.querySelectorAll("button")[1];


function clearContent() {
    // const content = document.querySelector("#content");
    while(content.firstChild) { 
        content.removeChild(content.firstChild); 
    } 
}


renderHomepage();
renderFooter();

homeBtn.addEventListener("click",()=>{
    clearContent()
    renderHomepage();
})


menuBtn.addEventListener("click",()=>{
    clearContent()
    renderMenu();
})
