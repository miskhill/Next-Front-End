import Image from "next/image";
import React from "react";
import userCardStyles from "../styles/userCard.module.css";

export interface UserCardProps {
    name: string;
    email: string;
    city: string;
    phone: string;
    id: number;
}
const UserCard: React.FC<UserCardProps> = ({ name, email, city, phone, id }) => {
    return (
    <div className={userCardStyles.userCard} key={id}>
        <div className={userCardStyles.userCard__header}>
            <img className={userCardStyles.userCard__header__profileIcon} src={`https://ui-avatars.com/api/?name=${name}`} alt="avatar"/>
        </div>
        <div className={userCardStyles.userCard__body}>
            <h3>{ name }</h3>
            <h3>{ email }</h3>
            <h3>{ city }</h3>
            <h3>{ phone }</h3>
        </div>
    </div>
    );
}

export default UserCard;