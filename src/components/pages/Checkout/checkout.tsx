import { useSelector } from "react-redux";
import { RootState } from "../../../Store/store";
import { Link } from "react-router-dom";


const Checkout: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);


  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const tax = 40;
  const total = subtotal + tax;

  return (
    <div >
      <h2>Checkout</h2>
      <div >
        <h3>Subtotal: ${subtotal.toFixed(2)}</h3>
        <h3>Tax: ${tax}</h3>
        <h2>Total: ${total.toFixed(2)}</h2>
        <p>Confirm your details and proceed to payment.</p>

        <button >Proceed to Payment</button>
        <Link to="/login" >Login to Continue</Link>
      </div>
    </div>
  );
};

export default Checkout;
