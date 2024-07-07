import "./ItemDetailContainer.css";



const ItemDetail = ({producto}) => {

    return (
        <div className="container container-detail">
            <div className="item-detail row">
                <img className="cardImg" src={producto.imagen} alt="" />
                <div className="detail col">
                    <h2 className="detail-title">{producto.nombre}</h2>
                    <p className="detail-descripcion">{producto.descripcion}</p>
                    <p className="detail-precio">Precio: ${producto.precio}</p>
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;
