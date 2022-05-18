import React from "react";
import { Howl} from "howler";
import { render } from "@testing-library/react";


function MusicPlayer() {
    const soundSrc = "./public/piratmusic.mp3";

    const callMySound = (src) => {
        const sound = new Howl({src, html5: true,});
        sound.play();
    };
   
    return( 
        
    <div className="duration">
        <button onClick={() => callMySound(soundSrc)}>Play Music</button>
    </div>);


}




export default MusicPlayer;
