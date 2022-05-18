import React, {useState, useEffect} from 'react'

export default function Profilesx({aliasname,roomscore}) {
   
    const [highscore, setHighscore] = useState([]);
    
    useEffect(() => {
        async function seeHighscore() {
     
          var room = String(roomscore)
          console.log(room)
            var url = "https://localhost:7209/api/"+roomscore+"/name/"+ aliasname;
             console.log(url);
             fetch(url, {
              method: 'GET',
              mode: 'cors',
              credentials: 'include',
              headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Origin': 'https://localhost:3000'
                }
              }).then(async data => {
               const highscore = await data.json();
               setHighscore(highscore);
               console.log(highscore);
              
              })
              
              .catch(error => alert('Something bad happened: ' + error));
             }    
             seeHighscore();
    
            }, [aliasname])
    
    let score =[];
   // console.log(roomscore)
    // if (roomscore === 'LaserRoom')
    // {
    //     highscore.forEach(element => {
    //         score.push(element.scoreMirror)
    //     });
        
    // }
    // else if (roomscore === 'GreggerIsland')
    // {
    //     Leaderboard.forEach(element => {
    //         highscore.push(element.highscore)
    //     });
    // }
    // else if (roomscore === 'SquidGameRoom')
    // {
    //     highscore.forEach(element => {
    //         score.push(element.scoreSquid)
    //         });
    // }

  return (
    <div id="profile">
        {item(highscore,score)}
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
                    <img src="/pictures/pirat2.png"/>
                   
                    <div className="info">
                        <h3 className="name text-dark">{value.player.name}</h3>
                        <span className="name text-dark">Date</span>
                    </div>                
                </div>
                <div className="score">
            <span>{value.highscore}</span>
               
                </div>    
            </div>    

            )
        )
        }
        </>   
    )

}