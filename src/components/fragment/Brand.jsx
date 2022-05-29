import React from "react";
import {Link} from "react-router-dom";
import "../assets/scss/Brand.scss";
import img from "../assets/img/jamin2.png";
class Brand extends React.Component {
    render() {
        return (
            <div>
                <Link to={"/home"}>
                    <img 
                    src={img} 
                    alt={"logo"}
                    height = {170}
                    width = {220}/>
                </Link>
            </div>
        );
    }
}

export default Brand;