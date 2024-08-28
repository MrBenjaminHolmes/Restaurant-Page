import burgerImg from '../images/burger.png';
import tacoImg from '../images/Taco.png';
import chipsImg from '../images/chips.png';


export default function renderHomepage(){
    const content = document.querySelector("#content");
    const home = `
        <div class="info">
            <div class="text">Taste the Speed, Savor the Flavor!</div>
            <p>Quick Bites is your go-to spot for delicious, fast, and fresh meals. Located in the heart of the city, this cozy eatery specializes in serving up a variety of quick yet satisfying dishes.</p>
            <h2 id="promoText">PROMOS</h2>
            <div id="tacot">🌮 Taco Tuesday 🌮</div>
            <div class="promos">
            </div>
            <button>Order Now</button>
        </div>
    `;

    content.innerHTML = home;
    const promos = document.querySelector(".promos");
    const tacoImage = document.createElement("img");
    const chipsImage = document.createElement("img");
    promos.appendChild(tacoImage);
    tacoImage.setAttribute("class", "taco");
    promos.appendChild(chipsImage);
    tacoImage.src = tacoImg;
    chipsImage.src = chipsImg;
    
    const burgerImage = document.createElement("img");
    content.appendChild(burgerImage);
    burgerImage.src = burgerImg;

}
