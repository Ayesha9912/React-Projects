import React from 'react'
import { useParams } from "react-router-dom";
import { Data } from './Data2';
function Profile2(){
    const { id } = useParams()
    console.log(id);
    let developer = Data.find(ele => ele.id == id)
    console.log(developer);
    return(
            <div>
                <div className="card">
                    <h2 className="name">{developer.name}</h2>
                    <p className="experience">
                        {developer.yearsOfExperience} Years of Experience
                    </p>
                    <div className="skills">
                        <h3>Skills</h3>
                        <ul>
                            {developer.skills.map((skill, skillIndex) => (
                                <li key={skillIndex}>{skill}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="contact">
                        <p>
                            <strong>Email:</strong> {developer.contact.email}
                        </p>
                        <p>
                            <strong>Phone:</strong> {developer.contact.phone}
                        </p>
                    </div>
                </div>
            </div>
    )
}
export default Profile2;