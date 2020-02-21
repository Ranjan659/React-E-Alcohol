import { Link } from 'react-router-dom';
import React from 'react';

export default function Combo(){
    return (
        <div className="Combo">
            
   <nav>
<Link to="/"><img alt="" className="logo" src="/img/logo.jpg" width="75px" height="75px"/></Link>
<Link to="/"> <h1 className="name">Booze Shine</h1></Link>

<ul className="first">
<li className="hello"  ><Link to="/"  className="link">Home</Link></li>
<li className="hello" id="color" ><Link to="/combo" className="link">Combos</Link></li>
<li className="hello" ><Link to="/recepies"  className="link">Our Recipies</Link></li>
<li className="hello" ><Link to="/contact"  className="link">Contact</Link></li>
<li className="hello" ><Link to="/terms"  className="link">Terms and policies</Link></li>
</ul>

<form class="form" >
<input type="text" placeholder="search" />
<input type="submit" name="" value="search" />
</form>
</nav>
<h2 class="last">OUR COMBOS</h2>
<div class="main">
<div class="oc">
<img alt=""src="img/combo1.jpg" />
<center><figcaption>Warsteiner Bottle 650ML <br/> Buy2 Get1<br/> Rs.650 <br/> <button> Buy </button></figcaption></center>
</div>
<div class="oc">
<img alt="" src="img/combo2.jpg" />
<center><figcaption>Ballantine's <br/> 2 Bottles + 1 Side Bag <br/> Rs.12000 <br/> <button> Buy </button></figcaption></center>
</div>
<div class="oc">
<img alt=""src="img/combo3.png" />
<center><figcaption>Jack Daniel's 750ML <br/>  2 Glass Free<br/> Rs.6000 <br/> <button> Buy </button></figcaption></center>
</div>
<div class="oc">
<img alt=""src="img/combo4.png" />
<center><figcaption>Antiquity Blue 750ML <br/>  1 Bottle + 1 Side Bag <br/> Rs.6000 <br/> <button> Buy </button></figcaption></center>
</div>
<div class="oc">
<img alt=""src="img/combo5.jpg" />
<center><figcaption>Old Durbar Black Chimney  <br/>  1 Bottle +  1 Glass<br/> Rs.3000 <br/> <button> Buy </button></figcaption></center>
</div>
<div class="oc">
<img alt=""src="img/combo6.jpg" />
<center><figcaption>Chivas Regal 12yrs   <br/>  1L + 1 Glass Free<br/> Rs.7140 <br/> <button> Buy </button></figcaption></center>
</div>
<div class="oc">
<img alt=""src="img/combo7.jpg" />
<center><figcaption>Heineken 500ML   <br/>   3 Cans + 1 Glass Free<br/> Rs.1500 <br/> <button> Buy </button></figcaption></center>
</div>
<div class="oc">
<img alt=""src="img/combo8.jpg" />
<center><figcaption><br/><br/>Mountain Goat   <br/> Steam Ale Bottle*10<br/> Rs.30000<br/> <button> Buy </button></figcaption></center>
</div>

</div>
<footer>copyright &copy;2020 Ranjan</footer>
    </div>
    );
}