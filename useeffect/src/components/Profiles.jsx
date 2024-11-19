import React from 'react'
import {Data} from './Data';
import {Link} from 'react-router-dom'
function Profiles(){
  return (
    <div className="developer-container">
    {Data.map((developer, index) => (
      <div key={index} className="card">
        <Link to={`/profile/${developer.id}`}>
            <h2 className="name">{developer.name}</h2>
        </Link>
      </div>
    ))}
  </div>
  )
}

export default Profiles