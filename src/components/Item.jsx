import {Link} from "react-router-dom"


const Item = ({producto}) => {
    return (
        <div className="item">
            <img src={producto.imagen} width={200} alt="" />
            <div className="descripcion-item">
                <p>{producto.nombre}</p>
                <p>{producto.precio}</p>

                <Link to={"/detalle/" + producto.id } >Ver detalle</Link>

            </div>
        </div>
    );
};

export default Item;
