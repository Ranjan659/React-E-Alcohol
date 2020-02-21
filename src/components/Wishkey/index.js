import React from 'react';
import { Link } from 'react-router-dom';


export default function Wishkey(){
    return (
        <div className="Wishkey">
<nav>
<Link to="/"><img alt="" className="logo" src="/img/logo.jpg" width="75px" height="75px"/></Link>
<Link to="/"> <h1 className="name">Booze Shine</h1></Link>
<ul className="first">
<li className="hello" ><Link to="/"  className="link">Home</Link></li>
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
<h2 className="last">Whiskey</h2>
<div className="main">
<div className="w">
<img alt="" src="img/signature p.jpg" />
<center><figcaption>Signature Premium<br/> Rs.2000 <br/> <button> Buy </button></figcaption></center>
</div>
<div className="w">
<img alt="" src="img/piper.jpg" />
<center><figcaption>100 Piper<br/> Rs.5250<br/> <button> Buy </button></figcaption></center>
</div>
<div className="w">
<img alt="" src="img/glenfiddich.png" />
<center><figcaption>Glenfiddich 12yrs<br/> Rs.8530<br/> <button> Buy </button></figcaption></center>
</div>
<div className="w">
<img alt="" src="img/glenlivet.png" />
<center><figcaption>The Glenlivet 12yrs<br/> Rs.8000<br/> <button> Buy </button></figcaption></center>
</div>
<div className="w">
<img alt="" src="img/chivas.png" />
<center><figcaption>Chivas Regal 12yrs<br/> Rs.5750<br/> <button> Buy </button></figcaption></center>
</div>
<div className="w">
<img alt="" src="img/blenders.png" />
<center><figcaption>Blenders Pride<br/> Rs.1400<br/> <button> Buy </button></figcaption></center>
</div>
<div className="w">
<img alt="" src="img/oak.jpg" />
<center><figcaption>Golden Oak<br/> Rs.800<br/> <button> Buy </button></figcaption></center>
</div>
<div className="w">
<img alt="" src="img/jd.jpg" />
<center><figcaption>Jack Dainel's<br/> Rs.6530<br/> <button> Buy </button></figcaption></center>
</div>
</div>
<footer>copyright &copy;2020 Ranjan</footer>

    </div>
    );

}