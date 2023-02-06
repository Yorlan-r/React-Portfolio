import React from "react";
import workData from "./work.json";

export default function Blog() {
  return (
    <section id="Work">
      <div class="grid-container">
        {workData.map(work=>{
          return(<div class="card">
          <h2>{work.Title}</h2>
          <ul>
            <li>
              <a href={work.Live_link} >
                <img src={work.Image} style= {{width: "100%"}}/>
                
              </a>
              
            </li>
            <li>
              <a href={work.GitHub_Link}>
                GitHub Link
                
              </a>
            </li>
            
          </ul>
        </div>

          )
        })}
        
      </div>
    </section>
  );
}
