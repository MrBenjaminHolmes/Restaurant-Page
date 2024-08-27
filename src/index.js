import "./styles.css";
import renderHomepage from "./pages/homePage.js";

function clearContent() {
    // const content = document.querySelector("#content");
    while(content.firstChild) { 
        content.removeChild(content.firstChild); 
    } 
}



renderHomepage();
// import burger from './images/burger.png';

   
// const image = document.createElement("img");
// image.src = burger;
   
// document.body.appendChild(image);


