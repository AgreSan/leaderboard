import React from 'react'

export default function fakeprofile({fakeLeaderboard}) {
  return (
    <div id="profile">
        {item(fakeLeaderboard)}
    </div>
  )
}



function item(data){
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
                    <span>{value.score}</span>
                </div>    
            </div>    

            )
        )
        }
        </>   
    )

}