import React from "react";
import "./landing.css";

function LandingPage() {
  return (
    <div id="landing">
      <header id="header">
        <img src="#" id="header-img" alt="something" />
        <nav id="nav-bar">
          <ul id="nav-menu">
            <li className="nav-link">Product</li>
            <li className="nav-link">Free trial</li>
            <li className="nav-link">Technology</li>
          </ul>
        </nav>
      </header>
      <main id="main">
        <section id="product">
          <h2>Product</h2>
          <div className="feature">
            <h3>Eco-friendly</h3>
            <p>
              Our clouds are made from bio-degradable materials and won't damage
              nature at all!
            </p>
          </div>
          <div className="feature">
            <h3>Children and animal safe</h3>
            <p>
              These clouds are not made for eating, but if you swallow a piece -
              no biggy! They are not harmful nor for humans, nor for animals!
            </p>
          </div>
          <div className="feature">
            <h3>Satisfaction guarantee</h3>
            <p>
              If you are not satisfied with our product - you can get your money
              back, no questions asked!
            </p>
          </div>
        </section>
        <section id="trial">
          <h2>Get Free Trial!</h2>
          <form id="form" action="https://www.freecodecamp.com/email-submit">
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Enter your e-mail"
            />

            <input type="submit" id="submit" name="submit" />
          </form>
        </section>
        <section id="technology">
          <h2>Technology</h2>
          <video width="320" height="240" controls>
            <source
              src="https://cdn.videvo.net/videvo_files/video/free/2020-07/large_watermarked/06_1596083776_preview.mp4"
              type="video/mp4"
            />
          </video>
        </section>
      </main>
      <footer>
        <p id="copyright">All right reserved "ArtCloud" 2022</p>
      </footer>
    </div>
  );
}

export default LandingPage;
