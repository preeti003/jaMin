import React, {useContext} from 'react';
import {ThemeContext} from "../../api/Theme";
import {Link} from "react-router-dom";
import {useCookies} from "react-cookie";
import FooterMusicPlayer from './FooterMusicPlayer';
import musicDB from '../../db/music';
function FooterSelectMusic() {
    const useStyle = useContext(ThemeContext);
    const [cookies, setCookie] = useCookies(['id']);
    if(!cookies.id) {
        setCookie('id', 1, { path: '/' });
    }
    var music;
    for(var i in musicDB){
        if(musicDB[i].id == cookies.id){
            var music = musicDB[i];
        }
    }

    return (
        <div  className={"Footer_Select_Music"}>
            <FooterMusicPlayer music={music}/>
        </div>
    );
}

export default FooterSelectMusic;