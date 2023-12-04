import { Link } from 'react-router-dom';

export default function Header() {
    
    return (
        <header>
            <h1><Link className="home" to="/">Paintings</Link></h1>
            <nav>
                    <div id="user">
                        <Link to="/paintings">All Paintings</Link>
                        <Link to="/create">Add Painting</Link>
                        <Link to="/">Logout</Link>
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                        <span>User</span>
                    </div>
            </nav>
        </header>
    );
}
