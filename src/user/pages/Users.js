import React from "react";

import UsersList from '../components/UsersList';


const Users = () => {
    const USERS = [
        {
            id: 'u1', 
            name: 'Rick Sanchez', 
            image: 'https://www.looper.com/img/gallery/what-the-mistakes-in-rick-morty-could-really-mean/intro-1617842307.jpg', 
            places: 3 
        }
    ];

    return <UsersList items={USERS} />;
};

export default Users;