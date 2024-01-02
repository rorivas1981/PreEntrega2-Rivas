import cart from './assets/cart.png'
import './CartWidget.css'

const CartWidget = () => {
    return (
        <div>
            <img src={cart} alt="cart widget" className="cart-widget-image" />
            0
        </div>
    );
}

export default CartWidget
