import { Link } from "react-router-dom";



function Header() {
    return (
        <header>
            <nav>
                <ul>
                    <Link to={"/"}>Home</Link>
                    <Link to={"/list"}>Listado</Link>
                    <Link >Contacto</Link>
                    <Link to={"/login"}>Login</Link>
                </ul>
            </nav>
        </header>
    )
};

export default Header