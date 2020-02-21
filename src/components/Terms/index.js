import React from 'react';
import { Link } from 'react-router-dom';


export default function Terms(){
    return(
        <div className="Terms">
        <nav>
        <Link to="/"><img alt="" className="logo" src="/img/logo.jpg" width="75px" height="75px"/></Link>
        <Link to="/"> <h1 className="name">Booze Shine</h1></Link>
<ul className="first">
<li className="hello"  ><Link to="/"  className="link">Home</Link></li>
<li className="hello" ><Link to="/combo" className="link">Combos</Link></li>
<li className="hello" ><Link to="/recepies"  className="link">Our Recipies</Link></li>
<li className="hello" ><Link to="/contact"  className="link">Contact</Link></li>
<li className="hello" id="color" ><Link to="/terms"  className="link">Terms and policies</Link></li>
</ul>

<form className="form" >
<input type="text" placeholder="search" />
<input type="submit" name="" value="search" />
</form>
</nav>
<div>
<h2 className="term">Terms and Condition</h2>
<h2 className="term">Ordering goods from us</h2>
<p className="t">You must be 18 years or over to make a purchase from Booze Shine.</p>
<p className="t">You must agree that we may use personal information provided by you in order to conduct appropriate anti-fraud checks and to confirm you are of legal age if purchasing alcohol.</p>
<p className="t">According to law,we will not sell to anyone who is under 18 years.</p>
<h2 className="term">Description of goods</h2>
<p className="t">If you do not get the description of the goods then you can contact to our customer services.</p>
<h2 className="term">We may cancel the order</h2>
<p className="t">If we don't get proper order description.</p>
<p className="t">If we don't get you actual location you provided.</p>
<p className="t">If the ordered products is not available.</p>
<h2 className="term">Return policy</h2>
<h4 className="f">If the following situation arise then you can return the product:</h4>
<p className="t">1.If the product is damaged.</p>
<p className="t">2.If the product is not delivered in time.</p>
<p className="t">3.If the product are exchanged.</p>
<p className="t">4.If the ordered product is missing.</p>
<h2 className="term">Replacement</h2>
<h4 className="f">Replacement can be done if the following situation matches:</h4>
<p className="t">1.If anything matches to the return policy.</p>
<p className="t">2.If the replacement is raised within 24hours from the delivery.</p>
<p className="t">3.If the costumer found the differnces in our pricing.</p>
<h2 className="term">Cancellation</h2>
<p className="t">If the Buyer wishes to cancel the order,the Buyer should call our customer care 1 hour before the delivery time.</p>


</div>
<footer>copyright &copy;2020 Ranjan</footer>
    </div>
    );    
}