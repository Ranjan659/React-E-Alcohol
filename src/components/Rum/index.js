import React from 'react';
import { Link } from 'react-router-dom';

export default function Rum(){
    return(
        <div className="Rum">
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
<h2 className="last">Rum</h2>
<div className="main">
<div className="w">
<img alt="" src="img/malibu.png" />
<center><figcaption>Malibu<br/> Rs.5970 <br/> <button> Buy </button></figcaption></center>
</div>
<div className="w">
<img alt="" src="img/coronation.jpg" />
<center><figcaption>Khukuri Coronation<br/> Rs.550 <br/> <button> Buy </button></figcaption></center>
</div>
<div className="w">
<img alt="" src="img/bacardi.png" />
<center><figcaption>Bacardi Gold<br/> Rs.4000<br/> <button> Buy </button></figcaption></center>
</div>
<div className="w">
<img alt="" src="img/morgan.jpg" />
<center><figcaption>Caption Morgan<br/> Rs.5400 <br/> <button> Buy </button></figcaption></center>
</div>
<div className="w">
<img alt="" src="img/club.jpg" />
<center><figcaption>Havana Club 7yrs<br/> Rs.5840 <br/> <button> Buy </button></figcaption></center>
</div>
<div className="w">
<img alt="" src="img/old.png" />
<center><figcaption>Old Monk XXX<br/> Rs.1550 <br/> <button> Buy </button></figcaption></center>
</div>
<div className="w">
<img alt="" src="img/khukuri.png" />
<center><figcaption>Khukuri XXX<br/> Rs.1550 <br/> <button> Buy </button></figcaption></center>
</div>

</div>
<footer>copyright &copy;2020 Ranjan</footer>
    </div>
    );
}