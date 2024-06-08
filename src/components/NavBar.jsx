import "./NavBar.css";
import CartWidget from "./CartWidget";
import logo from "../img/logo.png";


const NavBar = () => {

    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark" data-bs-theme="dark">
            <div className="brand container-fluid barranavegacion">
                <a href="#" className="navbar-brand ">
                    <img className="logo" 
                    width={130} src= {logo} alt="tramichi mates" />
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse barraItems" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item active categorias">
                            <a href="" className="nav-link">INICIO</a>
                        </li>
                        <li className="nav-item dropdown ">
                            <a href="" className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                PRODUCTOS
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="">Mates</a></li>
                                <li><a className="dropdown-item" href="">Termos y accesorios</a></li>
                                <li><a className="dropdown-item" href="">Combos</a></li>
                            </ul>
                        </li>                    
                        <li className="nav-item">
                            <a href="" className="nav-link">CONTACTO</a>
                        </li>                
                    </ul>
                    <form class="d-flex cartCarrito" role="search">
                        <button class="btn btn-outline-success" type="submit"> <CartWidget /> </button>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default NavBar