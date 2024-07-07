
import "./itemListContainer.css";

import { obtenerProductos } from "../data/data";
import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import useLoading from "./Loading/useLoading";
import Loading from "./Loading/Loading";
import  { useParams } from "react-router-dom";


const ItemListContainer = ({titulo}) => {

  const [productos, setProductos] = useState( [] );

  //pantalla de carga
  const { isLoading, showLoading, hideLoading } = useLoading ()  

  

  const {idCategoria} = useParams();




  useEffect(() => {
//mostrar pantalla de carga
    showLoading();

//para que la ejecucion de la promesa se realice solo una vez
    
  obtenerProductos()
    .then((respuesta)=> {
        if(idCategoria){
          const productosFiltrar = respuesta.filter((producto) => producto.categoria === idCategoria)
          setProductos(productosFiltrar)
        }else {
          //guardamos los productos 
          setProductos(respuesta);
        }
    })
    .catch((error) => {
        console.log(error)
    })
    .finally(()=>{
      //ocultar pantalla de carga
      hideLoading()
      
    });

  }, [idCategoria]);



  return (
    <div className="item-list-container container">
      <h1 className="bienvenida"> {titulo} </h1>
      { //si is loading es true se muestra la pantalla de carga, si es falso muestra 
      //los productos
        isLoading ? <Loading />  : <ItemList productos = {productos} />
      }
      
    </div>


  );
};

export default ItemListContainer
