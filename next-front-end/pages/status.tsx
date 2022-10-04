import React from 'react'
import '../styles/status.module.css'

interface StatusProps {
    value: string;
    label: string;
    id: string;
    prp: string;
}

const Status: React.FC<StatusProps> = props => {
    return (
        <div className={props.id}>
            <div className={props.prp}>
                <p> <span className="big-weight">{props.value}</span> <br/>
                    {props.label}</p>
            </div>
        </div>
    )
};

export default Status