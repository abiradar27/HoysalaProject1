import React from 'react';
import './styles.scss'
import logo from './../../assets/logo.png';
import {Link} from 'react-router-dom'
import {auth} from './../../Firebase/utils';

const Header = props => {
    const {currentUser} = props;
    return (
        <div className="header"> 
            <div className="wrap">
                <div className="logo">
                <Link to="/">
                    <img style={{width:"80px",height:"80px"}} src={logo} alt="logo"></img>
                    </Link>
                </div>
            </div>
            <div className="CallToAction">
            {!currentUser && (<ul>
                <li>
                <Link to="/registration">
                     <button>Register</button>
                    </Link>
                    </li>
                    <li>
                    <Link to="/login">
                         <button>Login
                         
                         </button>
                        </Link>
                        </li>
                        </ul>)}
            {currentUser &&(
                <ul>
                <li>
                <span onClick={()=>auth.signOut()}>
                Logout
                </span>
                </li>
                </ul>
            )}
            

                </div>
        </div>
    )
}
Header.defaultProps={
    currentUser: null};

export default Header;