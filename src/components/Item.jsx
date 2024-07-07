import {Link} from "react-router-dom"


const Item = ({producto}) => {
    return (
        <div className="card col-3">
            <div className="item">
                <img className="imagen-itemlist" src={producto.imagen} width={200} alt="" />
                <div className="descripcion-item">
                    <h5 className="card-title">{producto.nombre}</h5>
                    <p className="precioCard">${producto.precio}</p>

                    <Link className="vermas" to={"/detalle/" + producto.id } >Ver más</Link>

                </div>
            </div>
        </div>
    );
};

export default Item;
