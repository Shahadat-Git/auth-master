import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';

const Home = () => {
    const user = useContext(AuthContext)
    return (
        <div>
            <h3>This is {user && user.name} home</h3>
        </div>
    );
};

export default Home;