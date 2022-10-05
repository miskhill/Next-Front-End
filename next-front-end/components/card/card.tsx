import React from 'react'
import Circle from './circle'
import Profile from './profile'
import Status from './status'
import styles from '../../styles/card.module.css'

interface CardProps {
   pic: string;
}


const Card:React.FC<CardProps> = props => {



    const att = {
        name: 'Victor Crest',
        age: '26',
        address: 'London'
    }

    const stats = [
        {value: '80K', label:'Followers', prp:'box', id: 'box-1 Status'},
        {value: '803K', label:'Likes', prp:'box', id: 'box-2 Status'},
        {value: '1.4K', label:'Photos', prp:'box', id: 'box-3 Status'}

    ]


    return (
        <>
        <h1>Giles</h1>
        <div className= "Card" >
            <Circle pic={props.pic} />
            <Profile name={att.name} age={att.age} add={att.address} />
            <div className={styles.statusDivs}>
                {stats.map(stat => (
                    <Status key={stat.id} value={stat.value} label={stat.label} id={stat.id} prp={stat.prp} />
                ))}
            </div>
        </div>
        </>
    )
}

export default Card