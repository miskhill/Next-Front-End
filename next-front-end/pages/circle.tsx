import React from 'react'
import '../styles/circle.module.css'

interface CircleProps {
    pic: string;
}

const Circle:React.FC<CircleProps> = props => {
    return (
        <div className="circle">
            <img src={props.pic} alt="pic-here"/>
        </div>
    )
}

export default Circle