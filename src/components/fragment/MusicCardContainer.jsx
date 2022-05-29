import React from "react"
import '../assets/scss/MusicCardContainer.scss';
import MusicCard from "./MusicCard";
import {useSelector} from "react-redux";
import Container from "./Container";

function MusicCardContainer() {
    const {playlists} = useSelector(state => state.musicReducer);
    //const playlistArr = playlists.sort(() => 0.5 - Math.random());
    const playlistRand = playlists.slice(0,18);
    return (
        <Container>
            <div className={"music-card-container"}>
                { 
                    playlistRand.map(item => (
                        <MusicCard key={item.id} music={item}/>
                    ))
                }
            </div>
        </Container>
    );
}

export default MusicCardContainer;
