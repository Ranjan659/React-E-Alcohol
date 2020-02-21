import React from 'react';
import { Link } from 'react-router-dom';


export default function Contact(){
    return(
        <div className="Contact">
        <nav>
        <Link to="/"><img alt="" className="logo" src="/img/logo.jpg" width="75px" height="75px"/></Link>
        <Link to="/"> <h1 className="name">Booze Shine</h1></Link>
<ul className="first">
<li className="hello" ><Link to="/"  className="link">Home</Link></li>
<li className="hello" ><Link to="/combo" className="link">Combos</Link></li>
<li className="hello" ><Link to="/recepies"  className="link">Our Recipies</Link></li>
<li className="hello" id="color" ><Link to="/contact"  className="link">Contact</Link></li>
<li className="hello" ><Link to="/terms"  className="link">Terms and policies</Link></li>
</ul>

<form className="form" >
<input type="text" placeholder="search" />
<input type="submit" name="" value="search" />
</form>
</nav>
<div className="physco">
<h2 className="last">Contact Us</h2>
<p className="c">Feel Free Contacting Us.</p>
</div>
<div className="add">
<form className="for" id="form" >
<h3 className="con">&nbsp;Name</h3><br/>
<input id="fn" type="text" placeholder="First Name" />
<input id="ln" type="text" placeholder="Last Name" /><br/>
<h3 className="con">&nbsp;Email</h3><br/>
<input id="Email" type="text" placeholder="Email" size="32"/><br/>
<h3 className="con">&nbsp;Contact No</h3><br/>
<input id="contact" type="text" placeholder="Contact no" /><br/>
<h3 className="con">&nbsp;Message</h3><br/>
<textarea type="text" id="message" placeholder="Message"  ></textarea><br/>

<br/><input type="submit" name="" value="Submit"/>
</form>

</div>
{/* <script>
let form= document.getElementById('form')
form.addEventListener('submit', (e)=>{e.preventDefault()
let firstname =
document.getElementById('fn')
let lastname =
document.getElementById('ln')
let Email =
document.getElementById('Email')
let contact =
document.getElementById('contact')
let message =
document.getElementById('message')
  
  
  let data = {
	  'fn':firstname.value,
	  'ln':lastname.value,
	  'email':Email.value,
	  'ContactNo':contact.value,
	  'message':message.value
  }
  let str=JSON.stringify(data)
  localStorage.setItem(localStorage.length+1,str)
  e.target.reset()
});
</script> */}
<br/>

<h3 className="end">Address:</h3><br/>
<div className="" id="one">
Booze Shine PVT. LTD<br/>
Lazimpat, Kathmandu, Nepal<br/>
Contact no:+977-9807654321<br/>
Our Site:www.boozeshine.com
</div>
 
<br/>

<footer>copyright &copy;2020 Ranjan</footer>
    </div>

    );
}