import { Link } from "react-router-dom";


const logOut = e => {

    e.preventDefault();

    sessionStorage.removeItem("token")
    
    if(!sessionStorage.token){
        setTimeout(function () {
            window.location.href = "/login";
         }, 3000);
         
}
}


function Header() {
    return (
        <header className="my-5">
            <nav>
                <ul className="d-flex justify-content-evenly">
                    <Link to={"/"}>Home</Link>
                    <Link to={"/list"}>Listado</Link>
                    <Link >Contacto</Link>
                    <Link to={"/login"}>Login</Link>
                    <button onClick={logOut} className="btn btn-primary"> LogOut </button>
                </ul>
            </nav>
        </header>
    )
};

export default Header