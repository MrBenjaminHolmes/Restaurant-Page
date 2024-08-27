export  default function renderHomepage(){
    const content = document.querySelector("#content");
    const home = `
                <div class="info">
            <div class="text">Taste the Speed, Savor the Flavor!</div>
            <p>Quick Bites is your go-to spot for delicious, fast, and fresh meals. Located in the heart of the city, this cozy eatery specializes in serving up a variety of quick yet satisfying dishes</p>
            <h2 id="promoText">PROMOS</h2>
            <div id="tacot">🌮 Taco Tuesday 🌮</div>
            <div class="promos">
                
                <img id="Taco" src="images/Taco.png" alt="Taco">
                <img id="Chips" src="images/chips.png" alt="chips">
            </div>
            <button>Order Now</button>
        </div>
        <img src="images/burger.png" alt="burger">
                `

                content.innerHTML = home;
            }
            


