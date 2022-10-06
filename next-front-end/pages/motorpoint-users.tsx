import React from "react";
import UserCard from "../components/Card";
import userStyles from '../styles/users.module.css'

interface MotorpointUsersProps {
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

const MotorpointUsers: React.FC<MotorpointUsersProps> = ({ users }) => {
    const gridStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gridGap: '1rem'
    }
    return (
        <div className={userStyles.grid}>
            {users.map(user => (
     <UserCard key={user.id} name={user.name} email={user.email} city={user.address.city} phone={user.phone} id={user.id} />
            ))}
        </div>
    );
}

export default MotorpointUsers