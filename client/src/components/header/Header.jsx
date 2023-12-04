import { Link } from 'react-router-dom';

export default function Header() {
    
    return (
        <header>
            <h1>Paintings</h1>
            <nav>
                    <div id="user">
                        <Link to="/">All Paintings</Link>
                        <Link to="/">Add Painting</Link>
                        <Link to="/">Logout</Link>
                        <Link to="/">Login</Link>
                        <Link to="/">Register</Link>
                        <span>User</span>
                    </div>
            </nav>
        </header>
    );
}
