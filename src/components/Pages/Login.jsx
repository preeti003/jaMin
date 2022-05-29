import React from "react";
import './css/Login.scss';
import {Link} from "react-router-dom";
import video from "../assets/img/jamin.mp4";
import img from "../assets/img/arrow-up-6-256.png";
class Login extends React.Component{
    render() {
        return(
            <section id="main" className = "login">
                    <div className="nav-item">
                        <a className="navbar-brand" href="/"></a>
                    </div>
                    <div className="main-row">
                        <div className="main-row-text">
                            
                            <Link to={"/home"} >
                            <video src={video} type="video/mp4" autoPlay muted loop>
                            </video>
                            <center><img src={img} alt=""
                            height = {100}
                            width = {50}
                            /></center>
                            </Link>
                        </div>
                    </div>
            </section>
        );
    }
}

export default Login;