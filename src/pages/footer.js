export  default function renderFooter(){
    const footerContainer = document.querySelector("footer");
    const footer = `
            <div class="container">
            <div class="about">
                <h2>About</h2>
                <p>Quick Bites is dedicated to satisfying your cravings with delicious, freshly made meals delivered right to your door. We focus on offering a wide range of mouth-watering dishes that are both quick and convenient without compromising on taste or quality. Whether you're in the mood for a hearty breakfast, a wholesome lunch, or a decadent dessert, Quick Bites has something for everyone. Our mission is to make it easier for you to enjoy nutritious, flavorful food anytime, anywhere, without the hassle. At Quick Bites, we believe that great food should be accessible, fast, and always full of flavor.</p>
            </div>
            <div class="pages">
                <h2>Pages</h2>
                <ul>
                    <li>Home</li>
                    <li>Menu</li>
                    <li>About</li>
                  </ul>        
            </div>
            <div class="contact">
                <h2>Contact Us</h2>
                <ul>
                    <li>Phone:  +1 (915) 490-7583</li>
                    <li>Email:  Quickbites@gmail.com</li>
                    <li>Address:  169 Bradford Road, Winsley,BA15 2HW</li>
                  </ul> 
            </div>
        </div>
        
        <hr>
        <div class="copywright">Copyright © 2024 All Rights Reserved by QuickBites</div>
                `

                footerContainer.innerHTML = footer;
            }
            


