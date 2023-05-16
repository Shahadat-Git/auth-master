import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);


    const handleSignOut = () => {
        logOut()
            .then(() => {
                console.log('successfully sing out')
            })
            .catch(errer => {
                console.log(errer)
            })
    }
    return (
        <div>
            <div className="navbar bg-primary text-primary-content">
                <a className="btn btn-ghost normal-case text-xl">Auth Master</a>
                <Link className="btn btn-ghost normal-case text-xl" to='/'>Home</Link>
                <Link className="btn btn-ghost normal-case text-xl" to='/orders'>Orders</Link>
                {
                    user && <Link className="btn btn-ghost normal-case text-xl" to='/profile'>Profile</Link>
                }
                <Link className="btn btn-ghost normal-case text-xl" to='/login'>Login</Link>
                <Link className="btn btn-ghost normal-case text-xl" to='/register'>Register</Link>
                {
                    user && <><h2>{user.email}</h2> <button onClick={handleSignOut} className='btn btn-ghost'>Sign Out</button></>
                }
                {
                    !user && <h1>User not found</h1>
                }
            </div>
        </div>
    );
};

export default Header;