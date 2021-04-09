
import Button from '../forms/Button';
import './styles.scss';
import flogo from './../../assets/Facebook-logo.png'
import glogo from './../../assets/download.png'
import {Link} from 'react-router-dom'
import singInWithGoogle from './../../Firebase/utils'
import { Component } from 'react';
class SignIn extends Component {
  handleSubmit = async e=>{
    e.preventDefault();
  }
  render(){
    return(
        <div className="signin">
        <div className="wrap">
        <h2>SIGNIN</h2>
        <div className="formWrap">
            <form onSubmit={this.handleSubmit}>
                <div className="socialSignin">
                    <div className="row">
                      
                        <Button onClick={singInWithGoogle}>
                        <div className="logo">
                      <Link to="/">
                        <img style={{width:"20px",height:"20px"}} src={glogo} alt="glogo"></img>
                      </Link>
                      </div>
                        Login with Google
                        </Button>                    
                    </div>
                    <div className="row">
                    <Button>
                    <div className="logo">
                    <Link to="/">
                      <img style={{width:"25px",height:"25px"}} src={flogo} alt="flogo"></img>
                    </Link>
                    </div>
                    Login with Facebook
                    </Button>                    
                </div>
                 </div>
            </form>

        </div>
        </div>

        </div>
    )
}
}
export default SignIn;