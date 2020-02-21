import { Link } from 'react-router-dom';
import React from 'react';

export default function Recepies(){
    return (
        <div className="Recepies">
        <nav>
        <Link to="/"><img alt="" className="logo" src="/img/logo.jpg" width="75px" height="75px"/></Link>
        <Link to="/"> <h1 className="name">Booze Shine</h1></Link>
<ul className="first">
<li className="hello"  ><Link to="/"  className="link">Home</Link></li>
<li className="hello" ><Link to="/combo" className="link">Combos</Link></li>
<li className="hello" id="color"><Link to="/recepies"  className="link">Our Recipies</Link></li>
<li className="hello" ><Link to="/contact"  className="link">Contact</Link></li>
<li className="hello" ><Link to="/terms"  className="link">Terms and policies</Link></li>
</ul>

<form className="form" >
<input type="text" placeholder="search" />
<input type="submit" name="" value="search" />
</form>
</nav>
<h2 className="last">SOME RECIPIES</h2>

<div className="r">
<div className="outer">
Screwdriver:
<br/>
<hr/>
Recipe
<hr/>
-60ml Vodka <br/>
-120ml Orange Juice<br/>
-Method=Build<br/>
-Glass=High Ball<br/>
-Garnish=Orange slice<br/>
<iframe title="youtube" width="350" height="300"src="img/https://www.youtube.com/embed/ASuf8XVA1lk">
</iframe>
</div>
<div className="outer">
Cape Code:
<br/>
<hr/>
Recipe
<hr/>
-60ml Vodka <br/>
-120ml Cranberry Juice<br/>
-Method=Build<br/>
-Glass=High Ball<br/>
-Garnish=Lime Wedge<br/>
<iframe title="youtube2" width="350" height="300"src="img/https://www.youtube.com/embed/5oIPQZZBXks">
</iframe>
</div>
<div className="outer">
God Father:
<br/> 
<hr/>
Recipe
<hr/>
-35ml Scotch Whiskey <br/>
-35ml Amaretto/Disaronno<br/>
-Method=Build<br/>
-Glass=Rock<br/>
-Garnish=None<br/>
<iframe title="youtube3" width="350" height="300"src="img/https://www.youtube.com/embed/6FMZ9FPTHYs">
</iframe>
</div>
<div className="outer">
Negroni:
<br/>
<hr/>
Recipe
<hr/>
-30ml Gin <br/>
-30ml Red Sweet Vermouth<br/>
-30ml Compari<br/>
-Method=Stir and Strain<br/>
-Glass=Old Fashioned<br/>
-Garnish=Orange Slice<br/>
<iframe title="youtube4" width="350" height="300"src="img/https://www.youtube.com/embed/nh_3suGRbN8">
</iframe>
</div>
<div className="outer">
Gin Martini:
<br/>
<hr/>
Recipe
<hr/>
-60ml Gin <br/>
-10ml Dry Vermouth<br/>
-Method=Stir and Strain<br/>
-Glass=Cocktail<br/>
-Garnish=Green Olive<br/><br/>
<iframe title="youtube5" width="350" height="300"src="img/https://www.youtube.com/embed/KGtVNWJmh1s">
</iframe>
</div>
<div className="outer">
Pina Colada:
<br/>
<hr/>
Recipe
<hr/>
-60ml White Rum <br/>
-30ml Coconut Cream<br/>
-90ml Pineapple Juice<br/>
-Method=Blending/Shake<br/>
-Glass=Colada/Hurricane<br/>
-Garnish=Pineapple Cone<br/>
<iframe title="youtube6" width="350" height="300"src="img/https://www.youtube.com/embed/YaQEaf92z00">
</iframe>
</div>
<div className="outer">
B 52:
<br/>
<hr/>
Recipe
<hr/>
-20ml Kahlua <br/>
-20ml Baileys<br/>
-20ml Triple Sec/Cointreau<br/>
-Method=Layering<br/>
-Glass=Shooter<br/>
-Garnish=Fire/None<br/>
<iframe title="youtube7" width="350" height="300" src="img/https://www.youtube.com/embed/LnGPSINuiQo">
</iframe>
</div>
</div>
<footer>copyright &copy;2020 Ranjan</footer>
    
     </div>   
    );
}