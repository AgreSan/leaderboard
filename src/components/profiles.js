import React from 'react'

export default function Profiles({Leaderboard, roomscore}) {
   
    let score =[];
    console.log({roomscore})
    if (roomscore === 'MirrorRoom')
    {
        Leaderboard.forEach(element => {
            score.push(element.scoreMirror)
        });
        
    }
    else if (roomscore === 'GreggerIsland')
    {
        Leaderboard.forEach(element => {
        score.push(element.scoreGregger)
        });
    }
    else if (roomscore === 'Squidgame')
    {
        Leaderboard.forEach(element => {
            score.push(element.scoreSquid)
            });
    }

  return (
    <div id="profile">
        {item(Leaderboard,score)}
    </div>
  )
}

function item(data, score){
    
    return (
        <>
        {
            data.map((value,index) =>(
            <div className="flex" key={index}>
                <div className="item">
                    <img src={value.img}/>
                   
                    <div className="info">
                        <h3 className="name text-dark">{value.name}</h3>
                        <span className="name text-dark">Date</span>
                    </div>                
                </div>
                <div className="score">
            <span>{score[index]}</span>
               
                </div>    
            </div>    

            )
        )
        }
        </>   
    )

}