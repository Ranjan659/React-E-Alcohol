import { Link } from 'react-router-dom';
import React from 'react';

export default function Brandy(){
    return (
        <div className="Brandy">
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
<h2 className="last">Brandy</h2>
<div className="main">
<div className="w">
<img alt="" src="img/camus.jpg" />
<center><figcaption>Cmaus VSOP<br/> Rs.10850 <br/> <button> Buy </button></figcaption></center>
</div>
<div className="w">
<img alt="" src="img/napoleon.png" />
<center><figcaption>Courvoisier Napoleon<br/> Rs.9850 <br/> <button> Buy </button></figcaption></center>
</div>
<div className="w">
<img alt="" src="img/martell.jpg" />
<center><figcaption>Martell VSOP<br/> Rs.12850 <br/> <button> Buy </button></figcaption></center>
</div>

<div className="w">
<img alt="" src="img/marpha.png" />
<center><figcaption>Orion Mustang Marpha <br/> Rs.850 <br/> <button> Buy </button></figcaption></center>
</div>
<div className="w">
<img alt="" src="img/hennessy.png" />
<center><figcaption>Hennessy VS<br/> Rs.6850 <br/> <button> Buy </button></figcaption></center>
</div>


</div>
<footer>copyright &copy;2020 Ranjan</footer>
    </div>

    );
}