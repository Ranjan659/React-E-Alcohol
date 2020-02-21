import React from 'react';
import Slider from '../../slider';
import { Link } from 'react-router-dom';

export default function Home(){
    return (
        <div className="Home">
      <nav>
      <Link to="/"><img alt="" className="logo" src="/img/logo.jpg" width="75px" height="75px"/></Link>
      <Link to="/"> <h1 className="name">Booze Shine</h1></Link>
<ul className="first">
<li className="hello" id="color" ><Link to="/"  className="link">Home</Link></li>
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
<hr/>
<div className="h"></div>
<div className="container">
<div className="sidenav">
 <h2 className="cat">CATEGORIES</h2>
  <Link className="bar" to="/vodka">Vodka</Link>
  <Link className="bar" to="/gin">Gin</Link>
  <Link className="bar" to="/rum">Rum</Link>
  <Link className="bar" to="/whiskey">Whiskey</Link>
  <Link className="bar" to="/brandy">Brandy</Link>
  <Link className="bar" to="/beer">Beer</Link>
</div>
<img alt="" className="mar" src="/img/quotes.jpg" />
<img alt="" className="mar" src="/img/quotes1.png" />
<img alt="" className="mar" src="/img/quotes4.jpg"/>
<img alt="" className="mar" src="/img/qoutes2.jpg"/>
</div>
<hr/>

<Slider />
{/* <div className="s" max-width="1500px">
  <img alt="" className="slides" src="/img/banner3.jpg" width="100%" height="450px"/>
  <img alt="" className="slides" src="/img/banner4.jpg" width="100%" height="450px"/>
  <img alt="" className="slides" src="/img/banner1.jpg" width="100%" height="450px"/>
  <img alt="" className="slides" src="/img/Banner2.jpg" width="100%" height="450px"/>
</div> */}
<h1 className="last">OUR PRODUCT</h1>
<div className="main">
<div className="w">
<img alt="" src="/img/mt8848.jpg" />
<center><figcaption>MT.8848<br/> Rs.1650 <br/> <button> Buy </button></figcaption></center>
</div>
<div className="w">
<img alt="" src="/img/hendricks.png" />
<center><figcaption>HENDRICK'S GIN<br/> Rs.6600 <br/> <button> Buy </button></figcaption></center>
</div>
<div className="w">
<img alt="" src="/img/ruslan.jpg" />
<center><figcaption>Ruslan<br/> Rs.1500 <br/> <button> Buy </button></figcaption></center>
</div>
<div className="w">
<img alt="" src="/img/khukuri.png" />
<center><figcaption>Khukuri XXX<br/> Rs.1550 <br/> <button> Buy </button></figcaption></center>
</div>
<div className="w">
<img alt="" src="/img/blue.png" />
<center><figcaption>Blue Riband Gin<br/> Rs.1430 <br/> <button> Buy </button></figcaption></center>
</div>
<div className="w">
<img alt="" src="/img/smirnoff.jpg" />
<center><figcaption>Smirnoff<br/> Rs.4940 <br/> <button> Buy </button></figcaption></center>
</div>
<div className="w">
<img alt="" src="/img/old.png" />
<center><figcaption>Old Monk XXX<br/> Rs.1550 <br/> <button> Buy </button></figcaption></center>
</div>
<div className="w">
<img alt="" src="/img/snowman.png" />
<center><figcaption>Snowman Gin<br/> Rs.1685 <br/> <button> Buy </button></figcaption></center>
</div>
<div className="w">
<img alt="" src="/img/absolut.jpg"/>
<center><figcaption>ABSOLUT VODKA<br/> Rs.5500 <br/> <button> Buy </button></figcaption></center>
</div>
<div className="w">
<img alt="" src="/img/malibu.png" />
<center><figcaption>Malibu<br/> Rs.5970 <br/> <button> Buy </button></figcaption></center>
</div>
<div className="w">
<img alt="" src="/img/camus.jpg" />
<center><figcaption>Cmaus VSOP<br/> Rs.10850 <br/> <button> Buy </button></figcaption></center>
</div>
<div className="w">
<img alt="" src="/img/signature p.jpg" />
<center><figcaption>Signature Premium<br/> Rs.2000 <br/> <button> Buy </button></figcaption></center>
</div>
<div className="w">
<img alt="" src="/img/beefeater.png" />
<center><figcaption>Beefeater<br/> Rs.5800 <br/> <button> Buy </button></figcaption></center>
</div>
<div className="w">
<img alt="" src="/img/carlsberg.jpg" />
<center><figcaption>Carlsberg<br/> Rs.370<br/> <button> Buy </button></figcaption></center>
</div>
<div className="w">
<img alt="" src="/img/bacardi.png" />
<center><figcaption>Bacardi Gold<br/> Rs.4000<br/> <button> Buy </button></figcaption></center>
</div>
</div>
<footer>copyright &copy;2020 Ranjan</footer>

</div>
    );

}