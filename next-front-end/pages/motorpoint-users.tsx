import userStyles from '../styles/users.module.css'
import userCardStyles from '../styles/userCard.module.css'
import React from "react";

interface UsersProps {
    users: {
        id: number;
        name: string;
        email: string;
        address: {
            city: string;
        }
        phone: string;
    }[]
}

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return {
        props: { users: data }
    }
}

const MotorpointUsers: React.FC<UsersProps> = ({ users }) => {
    const gridStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gridGap: '1rem'
    }
    return (
        <div className={userStyles.grid}>
            {users.map(user => (
                <div className={userCardStyles.userCard}>
                    <div className={userCardStyles.userCard__header}>
                        <img className={userCardStyles.userCard__header__profileIcon} src="https://ui-avatars.com/api/?name=John+Doe" alt="avatar"/>
                    </div>
                    <div className={userCardStyles.userCard__body}>
                        <h3>{ user.name }</h3>
                        <h3>{ user.email }</h3>
                        <h3>{ user.address.city }</h3>
                        <h3>{ user.phone }</h3>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default MotorpointUsers