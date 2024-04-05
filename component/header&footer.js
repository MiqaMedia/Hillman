class myHeader extends HTMLElement {
  connectedCallback() {
      this.innerHTML = `
      <header>
      <nav class="navbar">
        <a href="#" class="logo"><img class="company-logo" src="./assets/images/Hillman__3_-removebg-preview.png" alt="logo" /></a>
        <ul class="menu-links">
          <span id="close-menu-btn" class="material-symbols-outlined"><i class="fa-solid fa-xmark fa-2xl"></i></span>
          <li><a href="./index.html">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#products">Products</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>
        <span id="menu-btn" class="material-symbols-outlined"><i class="fa-solid fa-bars fa-2xl"></i></span>
      </nav>
      
    </header>
      `;
// ================================================= 
    //             HEADER JAVASCRIPT CODE 
    // =================================================
    const header = document.querySelector("header");
    const menuBtn = document.querySelector("#menu-btn");
    const closeMenuBtn = document.querySelector("#close-menu-btn");

    menuBtn.addEventListener("click",()=>{
      header.classList.toggle("show-menu")
    })
    closeMenuBtn.addEventListener("click",()=>{
      menuBtn.click()
    });

  }
}

class myFooter extends HTMLElement {
  connectedCallback() {
      this.innerHTML = `
      <footer>
      <div class="footer-container">
        <div class="footer-sec logo-sec">
          <img src="./assets/images/Hillman__3_-removebg-preview.png" alt="Hillman Logo"/>
          <p>Lorem, ipsum dolor sit amet Aut, tempore cumque sit commodi corporis eligendi!</p>
          <ul class="social-icons">
            <li><a href="#"><i class="fa-brands fa-facebook-f"></i></a></li>
            <li><a href="#"><i class="fa-brands fa-linkedin-in"></i></a></li>
            <li><a href="#"><i class="fa-brands fa-x-twitter"></i></a></li>
            <li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
          </ul>
        </div>
        <div class="footer-sec service-sec quicklinks">
          <h2>Services</h2>
          <ul>
            <li><a href="#">Rice</a></li>
            <li><a href="#">Extracts</a></li>
            <li><a href="#">Food Additives</a></li>
          </ul>
        </div>
        <div class="footer-sec reach-sec quicklinks">
          <h2>Our Reach</h2>
          <ul>
            <li>Australia</li>
            <li>America</li>
            <li>South Africa</li>
            <li>China</li>
          </ul>
        </div>
        <div class="footer-sec  office-sec quicklinks">
          <h2>Our Offices</h2>
          <ul>
            <li>
              <span><i class="fa-solid fa-location-dot"></i></span>
              <p>Danish Kunj, Kolar Road,
                Bhopal, 462042</p>
              </li>
            <li> <span><i class="fa-solid fa-location-dot"></i></span>
              <p>Danish Kunj, Kolar Road,
                Bhopal, 462042</p></li>
          </ul>
        </div>
        <div class="footer-sec contact-sec quicklinks">
          <h2>Our Offices</h2>
          <ul>
            <li>
              <span><i class="fa-solid fa-phone"></i></span><p><a href="tel:+1 394 298 3409">+1 394 298 3409</a></p>
            </li>
            <li>
              <span><i class="fa-solid fa-phone"></i></span>
              <p><a href="tel:+1 394 298 3409">+1 394 298 3409</a></p>
            </li>
            <li>
              <span><i class="fa-solid fa-envelope"></i></span>
              <p><a href="mailto:abc@gmail.com">abc@gmail.com</a></p>
              
            </li>
            <li>
              <span><i class="fa-solid fa-envelope"></i></span>
              <p><a href="mailto:abc@gmail.com">abc@gmail.com</a></p>
            
            </li>
          </ul>
        </div>
      
      </div>
      <div class="copyrightText">
        <hr>
        <p>Copyright © 2024 Miqa Media. All Rights Reserved.</p>
      </div>
    </footer>
      `;
  }
}

customElements.define('custom-header', myHeader);
customElements.define('custom-footer', myFooter);
