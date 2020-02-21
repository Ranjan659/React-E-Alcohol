import React from 'react';
import { Link } from 'react-router-dom';


export default function Vodka(){
    return (
        <div className="Vodka">
        <nav>
        <Link to="/"><img alt="" className="logo" src="/img/logo.jpg" width="75px" height="75px"/></Link>
        <Link to="/"> <h1 className="name">Booze Shine</h1></Link>
<ul className="first">
<li className="hello"  ><Link to="/"  className="link">Home</Link></li>
<li className="hello" ><Link to="/combo" className="link">Combos</Link></li>
<li className="hello" ><Link to="/recepies"  className="link">Our Recipies</Link></li>
<li className="hello" ><Link to="/contact"  className="link">Contact</Link></li>
<li className="hello" ><Link to="/terms"  className="link">Terms and policies</Link></li>
</ul>

<form className="form" >
<input type="text" placeholder="search" />
<input type="submit" name="" value="search" />
</form>
</nav>
<h2 className="last">Vodka</h2>
<div className="main">
<div className="w">
<img alt="" src="img/mt8848.jpg" />
<center><figcaption>MT.8848<br/> Rs.1650 <br/> <button> Buy </button></figcaption></center>
</div>
<div className="w">
<img alt="" src="img/eristoff.jpg" />
<center><figcaption>Eristoff<br/> Rs.1550 <br/> <button> Buy </button></figcaption></center>
</div>
<div className="w">
<img alt="" src="img/excellence.jpg" />
<center><figcaption>Excellence<br/> Rs.1200 <br/> <button> Buy </button></figcaption></center>
</div>
<div className="w">
<img alt="" src="img/ruslan.jpg" />
<center><figcaption>Ruslan<br/> Rs.1500 <br/> <button> Buy </button></figcaption></center>
</div>
<div className="w">
<img alt="" src="img/smirnoff.jpg" />
<center><figcaption>Smirnoff<br/> Rs.4940 <br/> <button> Buy </button></figcaption></center>
</div>
<div className="w">
<img alt="" src="img/absolut.jpg"/>
<center><figcaption>ABSOLUT VODKA<br/> Rs.5500 <br/> <button> Buy </button></figcaption></center>
</div>
<div className="w">
<img alt="" src="img/ciroc.jpg"/>
<center><figcaption>Ciroc<br/> Rs.5785 <br/> <button> Buy </button></figcaption></center>
</div>
<div className="w">
<img alt="" src="img/goose.jpg"/>
<center><figcaption>Grey Goose<br/> Rs.8100 <br/> <button> Buy </button></figcaption></center>
</div>
</div>
<footer>copyright &copy;2020 Ranjan</footer>
    </div>
    );
}