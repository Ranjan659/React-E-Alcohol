import React from 'react';
import { Link } from 'react-router-dom';

export default function Beer(){
    return (
        <div className="Beer">
        <nav>
        <Link to="/"><img alt=""  className="logo" src="/img/logo.jpg" width="75px" height="75px"/></Link>
       <Link to="/"> <h1 className="name">Booze Shine</h1></Link>
        <ul className="first">
        <li className="hello" ><Link to="/"  className="link">Home</Link></li>
<li className="hello" ><Link to="/combo" className="link">Combos</Link></li>
<li className="hello" ><Link to="/recepies"  className="link">Our Recipies</Link></li>
<li className="hello" ><Link to="/contact"  className="link">Contact</Link></li>
<li className="hello" ><Link to="/terms"  className="link">Terms and policies</Link></li>
        </ul>
        
        <form class="form" >
        <input type="text" placeholder="search" />
        <input type="submit" name="" value="search" />
        </form>
        </nav>
        <h2 class="last">Beer</h2>
        <div class="main">
        <div class="w">
        <img alt="" src="img/carlsberg.jpg" />
        <center><figcaption>Carlsberg<br/> Rs.370<br/> <button> Buy </button></figcaption></center>
        </div>
        <div class="w">
        <img alt="" src="img/corona.png" />
        <center><figcaption>Corona<br/> Rs.370<br/> <button> Buy </button></figcaption></center>
        </div>
        <div class="w">
        <img alt="" src="img/hoegaarden.png" />
        <center><figcaption>Hoegaarden White Beer <br/> Rs.370<br/> <button> Buy </button></figcaption></center>
        </div>
        <div class="w">
        <img alt="" src="img/leffe.png" />
        <center><figcaption>Leffe Brune<br/> Rs.370<br/> <button> Buy </button></figcaption></center>
        </div>
        <div class="w">
        <img alt="" src="img/war.jpg" />
        <center><figcaption>Warsteiner<br/> Rs.350<br/> <button> Buy </button></figcaption></center>
        </div>
        <div class="w">
        <img alt="" src="img/bara.png" />
        <center><figcaption>Barahsinghe Premium <br/> Rs.270<br/> <button> Buy </button></figcaption></center>
        </div>
        <div class="w">
        <img alt="" src="img/kingfisher.png" />
        <center><figcaption>Kingfisher Strong <br/> Rs.300<br/> <button> Buy </button></figcaption></center>
        </div>
        <div class="w">
        <img alt="" src="img/tuborg.png" />
        <center><figcaption>Tuborg <br/> Rs.340<br/> <button> Buy </button></figcaption></center>
        </div>
        <div class="w">
        <img alt="" src="img/gorkha.png" />
        <center><figcaption>Gorkha Strong <br/> Rs.340<br/> <button> Buy </button></figcaption></center>
        </div>
        <div class="w">
        <img alt="" src="img/ice.png" />
        <center><figcaption>Nepal Ice Premium<br/> Rs.280<br/> <button> Buy </button></figcaption></center>
        </div>
        
        </div>
        
        <footer>copyright &copy;2020 Ranjan</footer>
            </div>
    );
}