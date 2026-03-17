import React from 'react';
import { Link } from "react-router-dom";
function Navbar() {
    return (
        <div className='row sticky-top navbar'>
            <nav class="navbar navbar-expand-lg bg-body-tertiary navimg">
                <div class="container-fluid ">
                    <div className="col-2">
                        <Link class="navbar-brand bold fs-3" to="/" style={{ color: "wheat", marginLeft: "82px" }}>Dev.Aditya</Link>
                    </div>
                    <div className="col-8">
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse navbar-a" id="navbarNavAltMarkup">
                            <div class="navbar-nav navbara ">
                                <Link class="nav-link " aria-current="page" to="/" >Home</Link>
                                <Link class="nav-link " to="/about" >About</Link>
                                <Link class="nav-link " to="projects" >project</Link>
                                <Link class="nav-link " to="/contact" >Contact</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-2 p-5">
                        <div className='row navicon'>
                            <div className="col-3"><a href="/#"><img src="/image/growth-svg (1).svg" alt="" style={{ height: "1.7rem", paddingRight: "5px", borderRight: "1.2px solid 	#eaeaea" }} /></a></div>
                            <div className="col-2"><a href="/#">< img src="/image/twter-svg (2).svg" alt="" style={{ height: "1.7rem", marginLeft: "px" }} /></a></div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;