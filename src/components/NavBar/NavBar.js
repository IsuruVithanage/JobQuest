import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../../assets/jobQuestLogo.png';

export default function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg " style={{backgroundColor: '#251E1E', paddingLeft: '10px', overflow:"hidden"}}>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active" style={{marginRight: '20px', marginLeft: '50px'}}>
                        <img src={Logo} alt="Logo" style={{width: 'auto', height: '50px'}}/>
                    </li>
                    <li className="nav-item active" style={{marginRight: '20px'}}>
                        <Link to="/" className="nav-link" style={{color: 'white', fontSize: "large"}}>Find Jobs</Link>
                    </li>
                    <li className="nav-item active" style={{marginRight: '20px'}}>
                        <Link to="/" className="nav-link" style={{color: 'white', fontSize: "large"}}>Browse Courses</Link>
                    </li>
                </ul>

                <button className="btn my-2 my-sm-0" type="submit" style={{marginRight: '20px', fontSize: "large", color: "red"}}>Login</button>
                <div style={{borderLeft: '1px solid white', height: '30px', display: 'inline-block', verticalAlign: 'middle', marginRight: '20px'}}/>
                <button className="btn text-light my-2 my-sm-0" type="submit" style={{backgroundColor: 'red', width: '90px', height: '50px', fontSize: "large", marginRight: '50px'}}>Sign Up</button>

            </div>
        </nav>
    );
}
