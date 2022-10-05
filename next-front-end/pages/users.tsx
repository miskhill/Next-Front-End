import styles from '../styles/users.module.css'
import Link from 'next/link'
import React from "react";

interface UsersProps {
    users: {
        id: number;
        name: string;
        email: string;
        city: string;
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

const Users: React.FC<UsersProps> = ({ users }) => {

    return (
        <div>
            <h1>All Users</h1>
            {users.map(user => (
                <Link href={'/user/' + user.id} key={user.id}>
                    <a className={styles.single}>
                        <h3>{ user.name }</h3>
                        <h3>{ user.email }</h3>
                        <h3>{ user.city }</h3>
                        <h3>{ user.phone }</h3>
                    </a>
                </Link>
            ))}
        </div>
    );
}

export default Users