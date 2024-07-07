import { useState, useEffect } from "react";
import { obtenerProductos } from "../../data/data.js";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import Loading from "../Loading/Loading.jsx";
import useLoading from "../Loading/useLoading.jsx";
const ItemDetailContainer = () => {

    const [producto, setProducto] = useState({})
    const {idProducto} = useParams()
    const { isLoading, showLoading, hideLoading } = useLoading ()  

    useEffect(() =>{
        //primero cargamos la pagina
        showLoading();

        obtenerProductos()
            .then((data) =>{
                const productosFiltrar = data.find((productoData)=> productoData.id === Number (idProducto) )
                setProducto(productosFiltrar)
            })
            .finally(()=>{
                hideLoading()
            })
    }, [idProducto] )

    return (
        <div>
            {
                isLoading ? <Loading />  : <ItemDetail producto = {producto} />
            }
        </div>

    );
};

export default ItemDetailContainer
