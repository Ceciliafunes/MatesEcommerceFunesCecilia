import "./NavBar.css";
import CartWidget from "./CartWidget";
import logo from "../img/logo.png";
import { Link } from "react-router-dom";

const NavBar = () => {

    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark" data-bs-theme="dark">
            <div className="brand container-fluid barranavegacion">
                <Link to="/" className="navbar-brand ">
                    <img className="logo" 
                    width={130} src= {logo} alt="tramichi mates" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse barraItems" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <Link to="/" className="nav-item active categorias">inicio </Link>
                        <Link to="/mates" className="dropdown-item" href="">mates</Link>
                        <Link to="/termos y accesorios" className="dropdown-item" href="">Termos y accesorios</Link>
                        <Link to="/combos" className="dropdown-item" href="">combos</Link>

                    </ul>
                    <form className="d-flex cartCarrito" role="search">
                        <button className="btn btn-outline-success" type="submit"> <CartWidget /> </button>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default NavBar