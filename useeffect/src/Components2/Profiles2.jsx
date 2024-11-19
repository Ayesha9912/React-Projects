import React from 'react'
import {Data} from './Data2'
import{Link} from 'react-router-dom'
function Profiles2(){
  return(
    <div>
        <div className="developer-container">
        {Data.map((developer, index)=>{
            return(
                <div key={index} className='card'>
                    <Link to = {`/profile/${developer.id}`}>
                   <h2 className="name">{developer.name}</h2>
                    </Link>
                </div>
            )
        })}

        </div>
    </div>
  )
}
export default Profiles2