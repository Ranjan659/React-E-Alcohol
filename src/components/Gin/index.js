import React from 'react';
import { Link } from 'react-router-dom';


export default function Gin(){
    return (
        <div className="Gin">

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
        <h2 className="last">Gin</h2>
        <div className="main">
        <div className="w">
        <img alt=""src="img/sapphire.png" />
        <center><figcaption>Bombay Sapphirer<br/> Rs.6270 <br/> <button> Buy </button></figcaption></center>
        </div>
        <div className="w">
        <img alt=""src="img/bulldog.png" />
        <center><figcaption>Bulldog<br/> Rs.4770 <br/> <button> Buy </button></figcaption></center>
        </div>
        <div className="w">
        <img alt=""src="img/hendricks.png" />
        <center><figcaption>HENDRICK'S GIN<br/> Rs.6600 <br/> <button> Buy </button></figcaption></center>
        </div>
        <div className="w">
        <img alt=""src="img/blue.png" />
        <center><figcaption>Blue Riband Gin<br/> Rs.1430 <br/> <button> Buy </button></figcaption></center>
        </div>
        <div className="w">
        <img alt=""src="img/snowman.png" />
        <center><figcaption>Snowman Gin<br/> Rs.1685 <br/> <button> Buy </button></figcaption></center>
        </div>
        <div className="w">
        <img alt=""src="img/beefeater.png" />
        <center><figcaption>Beefeater<br/> Rs.5800 <br/> <button> Buy </button></figcaption></center>
        </div>
        <div className="w">
        <img alt=""src="img/gordon.png" />
        <center><figcaption>Gordon's<br/> Rs.5650 <br/> <button> Buy </button></figcaption></center>
        </div>
        <div className="w">
        <img alt=""src="img/vogue.png" />
        <center><figcaption>Vogue Gin<br/> Rs.1300 <br/> <button> Buy </button></figcaption></center>
        </div>
        
        
        
        
        </div>
        <footer>copyright &copy;2020 Ranjan</footer>
            </div>
    );
}