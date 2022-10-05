import React from 'react'
import styles from '../../styles/status.module.css'

interface StatusProps {
    value: string;
    label: string;
}

const Status: React.FC<StatusProps> = props => {
    return (
        <div className={styles.box3}>
            <div className={styles.box1}>
                <p> <span className="big-weight">{props.value}</span> <br/>
                    {props.label}</p>
            </div>
        </div>
    )
};

export default Status