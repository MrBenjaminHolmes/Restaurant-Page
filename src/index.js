import "./styles.css";
import renderHomepage from "./pages/homePage.js";
import renderFooter from "./pages/footer.js"

function clearContent() {
    // const content = document.querySelector("#content");
    while(content.firstChild) { 
        content.removeChild(content.firstChild); 
    } 
}


renderFooter();
// import burger from './images/burger.png';

   
// const image = document.createElement("img");
// image.src = burger;
   
// document.body.appendChild(image);


