import "./styles.css";
import renderHomepage from "./pages/homePage.js";
import renderFooter from "./pages/footer.js"
import renderMenu from "./pages/Menu.js";
import renderAbout from "./pages/about.js";

const homeBtn = document.querySelectorAll("button")[0];
const menuBtn = document.querySelectorAll("button")[1];
const aboutBtn = document.querySelectorAll("button")[2];
 


function clearContent() {
    while(content.firstChild) { 
        content.removeChild(content.firstChild); 
    } 
    while(menu.firstChild){
        menu.removeChild(menu.firstChild)
    }
    while(aboutUs.firstChild){
        aboutUs.removeChild(aboutUs.firstChild)
    }
}

//renderAbout();
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

aboutBtn.addEventListener("click",()=>{
    clearContent()
    renderAbout();
})
