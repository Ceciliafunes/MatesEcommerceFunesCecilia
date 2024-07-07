import "./ItemDetailContainer.css";



const ItemDetail = () => {
    return (
        <div className="item-detail">
            <img src={producto.imagen} alt="" />
            <div className="detail">
                <h2>{producto.nombre}</h2>
                <p>{producto.descripcion}</p>
                <p>precio: ${producto.precio}</p>
                <ItemCount agregarAlCarrito={agregarAlCarrito} stock={producto.stock} />
            </div>
        </div>
    );
};

export default ItemDetail
