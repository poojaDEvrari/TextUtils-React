import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar(props) {
  return (
<nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
 <Link className="navbar-brand" to="/">{props.title}</Link>
 <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
   <span className="navbar-toggler-icon"></span>
 </button>

 <div className="collapse navbar-collapse" id="navbarSupportedContent">
   <ul className="navbar-nav mr-auto">
     <li className="nav-item active">
       <Link className="nav-link"  to="/">Home </Link>
     </li>
     <li className="nav-item">
       <Link className="nav-link"  to="/About">About</Link>
     </li>
   
   </ul>
   <form >
   <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
   <label>{props.btntext}</label>
  <input className="form-check-input mx-3" type="checkbox" onClick={props.clickbtn}/>

     </div>
   </form>
 </div>
</nav>
  )
}
