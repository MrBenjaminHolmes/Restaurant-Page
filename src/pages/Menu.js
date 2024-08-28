import burgerImg from '../images/burger.png';
import tacoImg from '../images/Taco.png';
import chipsImg from '../images/chips.png';
import chickenWings from "../images/chickenWings.png";
import icecream from "../images/icecream.png";
import Milkshake from "../images/Milkshake.png";
import Doughnut from "../images/Doughnut.png";

export default function renderMenu() {
    const content = document.querySelector("#content");

    // Create the menu HTML structure
    const menuHTML = `
        <div class="grid">
            <div class="card">
                <div class="sections">
                    <div>
                        <div class="image">
                            <img class="foodItm" src="${burgerImg}" alt="Burger">
                        </div>
                        <div class="flex">
                            <div class="price">£6.70</div>
                            <button class="orderBtn">Order Now</button>
                        </div>
                    </div>
                    <div class="text">
                        <h1>The Classic</h1>
                        <p>The Classic is a sizzling sensation packed with a juicy beef patty, crispy onion rings, melted cheddar, and a spicy mayo, all nestled in a toasted bun. Perfectly seasoned and cooked to perfection.</p>
                    </div>
                </div>
            </div>

            <div class="card">
                <div class="sections">
                    <div>
                        <div class="image">
                            <img class="foodItm tacoMenu" src="${tacoImg}" alt="Taco" >
                        </div>
                        <div class="flex">
                            <div class="price">£4.30</div>
                            <button class="orderBtn">Order Now</button>
                        </div>
                    </div>
                    <div class="text">
                        <h1>Speedy Spice Taco</h1>
                        <p>The Speedy Spice Taco is filled with seasoned beef, fresh pico de gallo, crisp lettuce, and a tangy lime crema, all wrapped in a warm tortilla. Bursting with flavor and ready in no time.</p>
                    </div>
                </div>
            </div>

            <div class="card">
                <div class="sections">
                    <div>
                        <div class="image">
                            <img class="foodItm" src="${chickenWings}" alt="Wings" >
                        </div>
                        <div class="flex">
                            <div class="price">£5.50</div>
                            <button class="orderBtn">Order Now</button>
                        </div>
                    </div>
                    <div class="text">
                        <h1>X6 Hot Wings</h1>
                        <p>6 Crispy, golden-brown chicken wings, seasoned with a tantalizing blend of spices, make for a mouthwatering appetizer or snack.</p>
                    </div>
                </div>
            </div>

            <div class="card">
                <div class="sections">
                    <div>
                        <div class="image">
                            <img class="foodItm" src="${chipsImg}" alt="Chips" >
                        </div>
                        <div class="flex">
                            <div class="price">£3.99</div>
                            <button class="orderBtn">Order Now</button>
                        </div>
                    </div>
                    <div class="text">
                        <h1>Crispy Kick Chips</h1>
                        <p>Crispy Kick Chips are golden, seasoned potato slices with a hint of spice, perfectly crunchy and satisfying. Ideal for a quick, flavorful snack anytime.</p>
                    </div>
                </div>
            </div>

            <div class="card">
                <div class="sections">
                    <div>
                        <div class="image">
                            <img class="foodItm" src="${Milkshake}" alt="Milkshake" >
                        </div>
                        <div class="flex">
                            <div class="price">£2.99</div>
                            <button class="orderBtn">Order Now</button>
                        </div>
                    </div>
                    <div class="text">
                        <h1>Choco-Milk</h1>
                        <p>The Choco Blast Shake is a rich blend of creamy chocolate ice cream and decadent fudge, topped with whipped cream. Smooth, indulgent, and a chocolate lover's dream.</p>
                    </div>
                </div>
            </div>

            <div class="card">
                <div class="sections">
                    <div>
                        <div class="image">
                            <img id="donut" class="foodItm" src="${Doughnut}" alt="Donut" >
                        </div>
                        <div class="flex">
                            <div class="price">£1.99</div>
                            <button class="orderBtn">Order Now</button>
                        </div>
                    </div>
                    <div class="text">
                        <h1>Choco Glaze Donut</h1>
                        <p>The Choco Glaze Donut is a soft, fluffy treat covered in a rich chocolate glaze. Perfectly sweet, indulgent, and melts in your mouth.</p>
                    </div>
                </div>
            </div>

            <div class="card">
                <div class="sections">
                    <div>
                        <div class="image">
                            <img class="foodItm" src="${icecream}" alt="Ice Cream" >
                        </div>
                        <div class="flex">
                            <div class="price">£2.50</div>
                            <button class="orderBtn">Order Now</button>
                        </div>
                    </div>
                    <div class="text">
                        <h1>Ice-Cone</h1>
                        <p>A velvety scoop of vanilla ice cream topped with crunchy sprinkles, and a cherry on top. Smooth, indulgent, and bursting with sweetness—it's a delightful treat to savor anytime.</p>
                    </div>
                </div>
            </div>
        </div>
    `;

    // Inject the HTML into the content div
    content.innerHTML = menuHTML;
}
