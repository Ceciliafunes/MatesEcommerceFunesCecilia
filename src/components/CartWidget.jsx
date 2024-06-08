import { FaShoppingCart } from "react-icons/fa";

const CartWidget = () => {
    return (
        <div>
            
            <FaShoppingCart size={50} color="yellow" />
            <span className="numeroCarrito">
                1
            </span>
        </div>


        
    )
}




export default CartWidget
