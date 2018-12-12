import React, { Component } from 'react';
import './App.css';
import './grid.css';
import './quaries.css';
import logo from './img/logo-white.png';
import logoBlack from './img/logo.png';
import one from './img/1.jpg';
import two from './img/2.jpg';
import three from './img/3.jpg';
import four from './img/4.jpg';
import five from './img/5.jpg';
import six from './img/6.jpg';
import seven from './img/7.jpg';
import eight from './img/8.jpg';
import Iphone from './img/app-iPhone.png';
import DownloadSVG from './img/download-app.svg';
import Download from './img/download-app-android.png';
import Customer1 from './img/customer-1.jpg';
import Customer2 from './img/customer-2.jpg';
import Customer3 from './img/customer-3.jpg';
import Lisbon from './img/lisbon-3.jpg';
import SanFrancisco from './img/san-francisco.jpg';
import London from './img/london.jpg';
import Berlin from './img/berlin.jpg';
import { MdCheck, MdClose } from 'react-icons/md';
import { TiInfinity, TiStopwatch, TiSocialFacebook, TiSocialTwitter, TiSocialGooglePlus, TiSocialInstagram } from 'react-icons/ti';
import { IoIosNutrition, IoIosCart, IoIosPerson, IoIosStar, IoLogoTwitter, IoLogoInstagram } from 'react-icons/io';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <nav className="sticky">
            <div className="row">
              <img src={logo} alt="Omnifood logo" className="logo" />
              <img src={logoBlack} alt="Omnifood logo" className="logo-black" />
              <ul className="main-nav">
                <li><a href="#">Food delivery</a></li>
                <li><a href="#">How it works</a></li>
                <li><a href="#">Our cities</a></li>
                <li><a href="#">Sign up</a></li>
              </ul>
            </div>
            </nav>
            <div className="hero-text-box">
              <h1>Goodbye junk food. <br></br>Hello super healthy meals.</h1>
              <a className="btn btn-full" href="#">I’m hungry</a>
              <a className="btn btn-ghost" href="#">Show me more</a>
            </div>
        </header>

        <section className="section-features">
          <div className="row">
            <h2>Get food fast &mdash; not fast food.</h2>
            <p className="long-copy">
              Hello, we’re Omnifood, your new premium food delivery service. We know you’re always busy. No time for cooking. So let us take care of that, we’re really good at it, we promise!
            </p>
          </div>
          <div className="row">
            <div className="col span-1-of-4 box">
              <div className="icon-big">
                <TiInfinity />
              </div>
              <h3>Up to 365 days/year</h3>
              <p>Never cook again! We really mean that. Our subscription plans include up to 365 days/year coverage. You can also choose to order more flexibly if that's your style.</p>
            </div>

            <div className="col span-1-of-4 box">
              <div className="icon-big">
                <TiStopwatch />
              </div>
              <h3>Ready in 20 minutes</h3>
              <p>You're only twenty minutes away from your delicious and super healthy meals delivered right to your home. We work with the best chefs in each town to ensure that you're 100% happy.</p>
            </div>

            <div className="col span-1-of-4 box">
              <div className="icon-big">
                <IoIosNutrition />
              </div>
              <h3>100% organic</h3>
              <p>All our vegetables are fresh, organic and local. Animals are raised without added hormones or antibiotics. Good for your health, the environment, and it also tastes better!</p>
            </div>

            <div className="col span-1-of-4 box">
              <div className="icon-big">
                <IoIosCart />
              </div>
              <h3>Order anything</h3>
              <p>We don't limit your creativity, which means you can order whatever you feel like. You can also choose from our menu containing over 100 delicious meals. It's up to you!</p>
            </div>
          </div>
        </section>

        <section className="section-meals">
          <ul className="meals-showcase clearfix">
            <li>
              <figure className="meal-photo">
                <img src={one} alt="Korean bibimbap with egg and vegetables"></img>
              </figure>
            </li>
            <li>
              <figure className="meal-photo">
                <img src={two} alt="Simple italian pizza with cherry tomatoes"></img>
              </figure>
            </li>
            <li>
              <figure className="meal-photo">
                <img src={three} alt="Chicken breast steak with vegetables"></img>
              </figure>
            </li>
            <li>
              <figure className="meal-photo">
                <img src={four} alt="Autumn pumpkin soup"></img>
              </figure>
            </li>
          </ul>
          <ul className="meals-showcase clearfix">
            <li>
              <figure className="meal-photo">
                <img src={five} alt="Paleo beef steak with vegetab"></img>
              </figure>
            </li>
            <li>
              <figure className="meal-photo">
                <img src={six} alt="Healthy baguette with egg and vegetables"></img>
              </figure>
            </li>
            <li>
              <figure className="meal-photo">
                <img src={seven} alt="Burger with cheddar and bacon"></img>
              </figure>
            </li>
            <li>
              <figure className="meal-photo">
                <img src={eight} alt="Granola with cherries and strawberries"></img>
              </figure>
            </li>
          </ul>
        </section>
        <section className="section-steps">
          <div className="row">
            <h2>How it works &mdash; Simple as 1, 2, 3</h2>
          </div>
          <div className="row">
            <div className="col span-1-of-2 steps-box">
              <img src={Iphone} alt="Omnifood app on iPhone" className="app-screen"></img>
            </div>
            <div className="col span-1-of-2 steps-box">
              <div className="works-step">
                <div>1</div>
                <p>Choose the subscription plan that best fits your needs and sign up today.</p>
              </div>
              <div className="works-step">
                <div>2</div>
                <p>Order your delicious meal using our mobile app or website. Or you can even call us!</p>
              </div>
              <div className="works-step">
                <div>3</div>
                <p>Enjoy your meal after less than 20 minutes. See you the next time!</p>
              </div>
              <a href="#" className="btn-app"><img src={DownloadSVG} alt="App Store Button"></img></a>
              <a href="#" className="btn-app"><img src={Download} alt="Play Store Button"></img></a>
            </div>
          </div>
        </section>

        <section className="section-cities">
          <div className="row">
            <h2>We're currently in these cities</h2>
          </div>
          <div className="row">
            <div className="col span-1-of-4 box">
              <img src={Lisbon} alt="Lisbon"></img>
              <h3>Lisbon</h3>
              <div className="city-feature">
                <div className="icon-small">
                  <IoIosPerson />
                </div>
                1600+ happy eaters
              </div>
              <div className="city-feature">
                <div className="icon-small">
                  <IoIosStar />
                </div>
                60+ top chefs
              </div>
              <div className="city-feature">
                <div className="icon-small">
                  <IoLogoTwitter />
                </div>
                <a href="#">@omnifood_lx</a>
              </div>
            </div>
            <div className="col span-1-of-4 box">
              <img src={SanFrancisco} alt="San Francisco"></img>
              <h3>San Francisco</h3>
              <div className="city-feature">
                <div className="icon-small">
                  <IoIosPerson />
                </div>
                3700+ happy eaters
              </div>
              <div className="city-feature">
                <div className="icon-small">
                  <IoIosStar />
                </div>
                160+ top chefs
              </div>
              <div className="city-feature">
                <div className="icon-small">
                  <IoLogoTwitter />
                </div>
                <a href="#">@omnifood_sf</a>
              </div>
            </div>
            <div className="col span-1-of-4 box">
              <img src={Berlin} alt="Berlin"></img>
              <h3>Berlin</h3>
              <div className="city-feature">
                <div className="icon-small">
                  <IoIosPerson />
                </div>
                2300+ happy eaters
              </div>
              <div className="city-feature">
                <div className="icon-small">
                  <IoIosStar />
                </div>
                110+ top chefs
              </div>
              <div className="city-feature">
                <div className="icon-small">
                  <IoLogoTwitter />
                </div>
                <a href="#">@omnifood_berlin</a>
              </div>
            </div>
            <div className="col span-1-of-4 box">
              <img src={London} alt="London"></img>
              <h3>London</h3>
              <div className="city-feature">
                <div className="icon-small">
                  <IoIosPerson />
                </div>
                1200+ happy eaters
              </div>
              <div className="city-feature">
                <div className="icon-small">
                  <IoIosStar />
                </div>
                50+ top chefs
              </div>
              <div className="city-feature">
                <div className="icon-small">
                  <IoLogoTwitter />
                </div>
                <a href="#">@omnifood_london</a>
              </div>
            </div>
          </div>
        </section>
        <section className="section-testimonials">
          <div className="row">
            <h2>Our customers can't live without us</h2>
          </div>
          <div className="row">
            <div className="col span-1-of-3">
              <blockquote>
                Omnifood is just awesome! I just launched a startup which leaves me with no time for cooking, so Omnifood is a life-saver.
                Now that I got used to it, I couldn't live without my daily meals!
              <cite><img src={Customer1}></img>Alberto Duncan</cite>
              </blockquote>
            </div>
            <div className="col span-1-of-3">
              <blockquote>
                Inexpensive, healthy and great-tasting meals, delivered right to my home. We have lots of food delivery here in Lisbon, but no one comes even close to Omifood. Me and my family are so in love!
              <cite><img src={Customer2}></img>Joana Silva</cite>
              </blockquote>
            </div>
            <div className="col span-1-of-3">
              <blockquote>
                I was looking for a quick and easy food delivery service in San Franciso. I tried a lot of them and ended up with Omnifood. Best food delivery service in the Bay Area. Keep up the great work!
              <cite><img src={Customer3}></img>Milton Chapman</cite>
              </blockquote>
            </div>
          </div>
        </section>
        <section className="section-plans">
          <div className="row">
            <h2>Start eating healthy today</h2>
          </div>
          <div className="row">
            <div className="col span-1-of-3">
              <div className="plan-box">
                <div>
                  <h3>Premium</h3>
                  <p className="plan-price">$399 <span>/ month</span></p>
                  <p className="plan-price-meal">That’s only 13.30$ per meal</p>
                </div>
                <div>
                  <ul>
                    <li><div className="icon-small"><MdCheck /></div>1 meal every day</li>
                    <li><div className="icon-small"><MdCheck /></div>Order 24/7</li>
                    <li><div className="icon-small"><MdCheck /></div>Access to newest creations</li>
                    <li><div className="icon-small"><MdCheck /></div>Free delivery</li>
                  </ul>
                </div>
                <div>
                  <a href="#" className="btn btn-full">Sign up now</a>
                </div>
              </div>
            </div>
            <div className="col span-1-of-3">
              <div className="plan-box">
                <div>
                  <h3>Pro</h3>
                  <p className="plan-price">149$ <span>/ month</span></p>
                  <p className="plan-price-meal">That’s only 14.90$ per meal</p>
                </div>
                <div>
                  <ul>
                    <li><div className="icon-small"><MdCheck /></div>1 meFal 10 days/month</li>
                    <li><div className="icon-small"><MdCheck /></div>Order 24/7 </li>
                    <li> <div className="icon-small"><MdCheck /></div>Access to newest creations </li>
                    <li><div className="icon-small"><MdCheck /></div>Free delivery</li>
                  </ul>
                </div>
                <div>
                  <a href="#" className="btn btn-ghost">Sign up now</a>
                </div>
              </div>
            </div>
            <div className="col span-1-of-3">
              <div className="plan-box">
                <div>
                  <h3>Starter</h3>
                  <p className="plan-price">19$ <span>/ month</span></p>
                  <p className="plan-price-meal">&nbsp;</p>
                </div>
                <div>
                  <ul>
                    <li><div className="icon-small"><MdCheck /></div>1 meal</li>
                    <li><div className="icon-small"><MdCheck /></div>Order from 8 am to 12 pm</li>
                    <li><div className="icon-small"><MdClose /></div></li>
                    <li> <div className="icon-small"><MdCheck /></div>Free delivery</li>
                  </ul>
                </div>
                <div>
                  <a href="#" className="btn btn-ghost">Sign up now</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section-form">
          <div className="row">
            <h2>We're happy to hear from you</h2>
          </div>
          <div className="row">
            <form method="post" action="#" className="contact-form">
              <div className="row">
                <div className="col span-1-of-3">
                  <label htmlFor="name">Name</label>
                </div>
                <div className="col span-2-of-3">
                  <input type="text" name="name" id="name" placeholder="Your Name" required></input>
                </div>
              </div>
              <div className="row">
                <div className="col span-1-of-3">
                  <label htmlFor="email">Email</label>
                </div>
                <div className="col span-2-of-3">
                  <input type="email" name="email" id="email" placeholder="Your email" required></input>
                </div>
              </div>
              <div className="row">
                <div className="col span-1-of-3">
                  <label>How did you find us?</label>
                </div>
                <div className="col span-2-of-3">
                  <select name="find-us" id="find-us" defaultValue="ad">
                    <option value="friends">Friends</option>
                    <option value="Search engine">Search engine</option>
                    <option value="ad">Advertisement</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              <div className="row">
                <div className="col span-1-of-3">
                  <label>Newsletter</label>
                </div>
                <div className="col span-2-of-3">
                  <input type="checkbox" name="news" id="news" defaultChecked></input>
                </div>
              </div>
              <div className="row">
                <div className="col span-1-of-3">
                  <label>Drop us a line</label>
                </div>
                <div className="col span-2-of-3">
                  <textarea name="message" placeholder="Your Message"></textarea>
                </div>
              </div>
              <div className="row">
                <div className="col span-1-of-3">
                  <label>&nbsp;</label>
                </div>
                <div className="col span-2-of-3">
                  <input type="submit" defaultValue="Send it!"></input>
                </div>
              </div>
            </form>
          </div>
        </section>
        <footer>
          <div className="row">
            <div className="col span-1-of-2">
              <ul className="footer-nav">
                <li><a href="#">About us</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Press</a></li>
                <li><a href="#">iOS App</a></li>
                <li><a href="#">Android App</a></li>
              </ul>
            </div>
            <div className="col span-1-of-2">
              <ul className="social-links">
                <li><a href="a"><div className="ion-social-facebook"><TiSocialFacebook /></div></a></li>
                <li><a href="a"><div className="ion-social-twitter"><TiSocialTwitter /></div></a></li>
                <li><a href="a"><div className="ion-social-googleplus"><TiSocialGooglePlus /></div></a></li>
                <li><a href="a"><div className="ion-social-instagram"><IoLogoInstagram /></div></a></li>
              </ul>
            </div>
          </div>
          <div className="row">
            <p>
              Copyright &copy; 2015 by Omnifood, All rights reserverd.
            </p>
          </div>
        </footer>
        <body>
        </body>
      </div >
    );
  }
}

export default App;
