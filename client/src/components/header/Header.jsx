import { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../contexts/authContext';

export default function Header() {
    const {
        isAuthenticated,
        username,
    } = useContext(AuthContext);

    return (
        <header>
            <h1><Link className="home" to="/">RisingArtists</Link></h1>
            <nav>
                <Link to="/paintings">All paintings</Link>
                {isAuthenticated && (
                    <div id="user">
                        <Link to="/paintings/create">Create painting</Link>
                        <Link to="/logout">Logout</Link>
                        <span>| {username}</span>
                    </div>
                )}

                {!isAuthenticated && (
                    <div id="guest">
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                    </div>
                )}
            </nav>
        </header>
    );
}
