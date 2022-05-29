import React, {useContext, useState} from "react";
import '../assets/scss/Navigation.scss';
import SearchBar from "./SearchBar";
import Brand from "./Brand";
import {ThemeContext} from "../../api/Theme";
import {ExploreOutlined, HomeOutlined,} from "@material-ui/icons";
import gif from "../assets/img/jamin3.gif";


function Navigation() {

    
    const useStyle = useContext(ThemeContext);
    return (
        <nav style={useStyle.component}>
            <Brand/>
            <div className={"navigation"}>
               {/* <NavigationButton href={"/home"} name={"Home"}/>*/}
               {/* <NavigationButton href={"/home/about"} name={"About"}/>*/}
                {/*<NavigationButton href={"/home/add"} name={"Add"}/>*/}
            </div>
            <SearchBar/>
            <img src={gif}
            width = {120}
            height = {90}
            />
            
        </nav>
    );
}

export default Navigation;