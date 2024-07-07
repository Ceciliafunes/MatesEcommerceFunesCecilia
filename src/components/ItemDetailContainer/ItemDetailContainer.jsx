import { useState, useEffect } from "react";
import { obtenerProductos } from "../../data/data";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";


const ItemDetailContainer = () => {

    const [producto, setProducto] = useState({})
    const {idProducto} = useParams()

    useEffect(() =>{
        obtenerProductos()
            .then((data) =>{
                const productosFiltrar = data.find((productoData)=> productoData.id === idProducto )
                setProducto(productosFiltrar)
            })
    }, [] )

    return (
        <ItemDetail producto = {producto} />
    )
}

export default ItemDetailContainer
