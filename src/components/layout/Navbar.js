 import React from 'react'
 import{Link} from 'react-router-dom'
 import SignedInLinks from './SignedInLinks.js'
// import SignedOutLinks from './SignedOutLinks'
 const Navbar=()=>{
	 return(
		<nav className="nav-wrapper grey darken-2">
		<div className="container">
		<Link to='/' className="brand-logo">MarioPlan</Link>
		<SignedInLinks />
		</div>
		
		</nav>
		)
 }
 export default Navbar;