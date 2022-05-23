import React, { useState } from 'react'
import Profiles from './profiles';
import Fakeprofile from './fakeprofile';
import {Leaderboard} from './database';
import {fakeLeaderboard} from './fakedatabase';
import Profilesx from './profilesx';
import Searchbar from './searchbar';


export default function Board(props) {

    const [score, setScore] = useState("GreggerIsland")
    const [alias, setAlias] = useState("")

  
   
    function GreggerIsland()
    {
        setScore('GreggerIsland');
        props.changeBackground('GreggerIsland');
    }

    function LaserRoom()
    {
        setScore('LaserRoom');
        props.changeBackground('LaserRoom');
    }

    
    function Squidgame()
    {
        setScore("SquidGameRoom");
        props.changeBackground('SquidGameRoom');
    }

    function Search(e)
    {
        setAlias(e.target.value);
        console.log(e.target.value);
    }
  return (
 <div className="backgroundboard">
    <div className="board">
       
        <h1 className="leaderboard">Leaderboard</h1>
        
        <div className="duration">
            <button onClick={GreggerIsland}>Gregger Island</button>
            <button onClick={LaserRoom} >Laser Room</button>
            <button onClick={Squidgame} >Squid Game</button>
            <form>
  <label className='text-dark'>Search Alias:  </label>
  <input type="text" id="AliasId" name="Alias" value={alias} onChange={Search}   onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}/>
        </form>
        </div>
        
        <Fakeprofile fakeLeaderboard={fakeLeaderboard}></Fakeprofile>
        <div className="scroller">      
        {/* <Profiles Leaderboard={Leaderboard} roomscore={score}></Profiles> */}
        {(alias.length > 0) ? <Searchbar aliasname={alias} roomscore={score}></Searchbar> :  <Profilesx roomscore={score}></Profilesx>} 
        
        </div>
    </div>
    
  </div>
  
  )
}





