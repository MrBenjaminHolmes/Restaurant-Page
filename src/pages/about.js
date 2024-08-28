export  default function renderAbout(){
    const aboutContainer = document.querySelector("#aboutUs");
    const about = `
    <div id="about">
    <div class="clock">
                <h2>Speed</h2>
                <p>peed is essential to our service. We focus on efficiency to get your favorite meals to you as quickly as possible without sacrificing quality. Our streamlined kitchen operations and dedicated staff work seamlessly to ensure you receive your order promptly, so you can enjoy your food while it's fresh and hot.</p>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M600-160q-134 0-227-93t-93-227q0-133 93-226.5T600-800q133 0 226.5 93.5T920-480q0 134-93.5 227T600-160Zm0-80q100 0 170-70t70-170q0-100-70-170t-170-70q-100 0-170 70t-70 170q0 100 70 170t170 70Zm91-91 57-57-108-108v-144h-80v177l131 132ZM80-600v-80h160v80H80ZM40-440v-80h200v80H40Zm40 160v-80h160v80H80Zm520-200Z"/></svg>
            </div>
            <div class="fork">
                <h2>Taste</h2>
                <p>We craft each menu item with high-quality ingredients and bold flavors to ensure a satisfying experience in every bite. Our recipes are designed to deliver the perfect balance of taste and indulgence, making every visit to our restaurant a delicious treat.</p>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M280-80v-366q-51-14-85.5-56T160-600v-280h80v280h40v-280h80v280h40v-280h80v280q0 56-34.5 98T360-446v366h-80Zm400 0v-320H560v-280q0-83 58.5-141.5T760-880v800h-80Z"/></svg>
            </div>
            <div class="bike">
                <h2>Delivery</h2>
                <p>Our commitment to timely and accurate delivery ensures that your fast food arrives at your door just as you expect it. Using advanced tracking systems and a well-organized delivery network, we make sure every order is handled with care and arrives on time, every time.</p>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M240-160q-50 0-85-35t-35-85H40v-440q0-33 23.5-56.5T120-800h560v160h120l120 160v200h-80q0 50-35 85t-85 35q-50 0-85-35t-35-85H360q0 50-35 85t-85 35Zm0-80q17 0 28.5-11.5T280-280q0-17-11.5-28.5T240-320q-17 0-28.5 11.5T200-280q0 17 11.5 28.5T240-240ZM120-360h32q17-18 39-29t49-11q27 0 49 11t39 29h272v-360H120v360Zm600 120q17 0 28.5-11.5T760-280q0-17-11.5-28.5T720-320q-17 0-28.5 11.5T680-280q0 17 11.5 28.5T720-240Zm-40-200h170l-90-120h-80v120ZM360-540Z"/></svg>
            </div></div>
                `

                aboutContainer.innerHTML = about;
            }
            

