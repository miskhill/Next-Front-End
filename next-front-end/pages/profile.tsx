import React from 'react'
import '../styles/profile.module.css'

interface ProfileProps {
    name: string;
    age: string;
    add: string;
}

const Profile: React.FC<ProfileProps> = props => {
    return (
        <div className= "profile">
            <div className="container">
                <p><span className="big-weight">{props.name}</span> {props.age} <br/>
                    {props.add}
                </p>
            </div>
        </div>
    )
}

export default Profile