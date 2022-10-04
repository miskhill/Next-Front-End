import React from 'react'
import styles from '../styles/profile.module.css'

interface ProfileProps {
    name: string;
    age: string;
    add: string;
}

const Profile: React.FC<ProfileProps> = props => {
    return (
        <div className={styles.profile}>
            <div className={styles.container}>
                <p><span className={styles.bigWeight}>{props.name}</span> {props.age} <br/>
                    {props.add}
                </p>
            </div>
        </div>
    )
}

export default Profile