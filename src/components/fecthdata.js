import React, {useState, useEffect} from 'react'

export default function Fecthdata(roomscore) {

    const [jobs, setjobs] = useState([]);

    useEffect(() => {
    async function seejobs() {
      
        var url = "https://localhost:7209/api/GreggerIsland";
         console.log(url);
         fetch(url, {
          method: 'GET', // Or DELETE
          }).then(async data => {
           const jobs = await data.json();
           setjobs(jobs);
          
          })
          
          .catch(error => alert('Something bad happened: ' + error));
         }    
         seejobs();

        }, [])
      

        return (

            <div>
              <h1>List of all Profiles</h1>
              <table>
        
                <ol>
        
                  {jobs.map((j,index) => (
        
                      <li key={j.Id}>  
                          {j.Highscore},
                          {j.PlayerId},
                      </li>
        
                  ))}
        
                </ol>
                </table>
            </div>
        
          );
}


