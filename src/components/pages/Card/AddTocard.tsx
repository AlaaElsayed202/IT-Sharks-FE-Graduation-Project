import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../Card/cartSlice";
import { RootState } from "../../../Store/store";
import { Link } from "react-router-dom";

type CartItem = {
  id: number;
  name: string;
  image: string;
  price: number;
  quantity: number;
};

export const AddToCart: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const tax = 40;
  const total = subtotal + tax;

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cartItems.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Image</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item: CartItem) => (
              <tr key={item.id}>
                <td><img src={item.image} alt={item.name} width="50" /></td>
                <td>{item.name}</td>
                <td>${item.price.toFixed(2)}</td>
                <td>{item.quantity}</td>
                <td>
                <button onClick={() => dispatch(removeFromCart( item.id ))}>
                    ❌
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Your cart is empty</p>
      )}
      
      <div>
        <h3>Subtotal: ${subtotal.toFixed(2)}</h3>
        <h3>Tax: ${tax}</h3>
        <h2>Total: ${total.toFixed(2)}</h2>
        <p>Taxes and shipping will be calculated at checkout.</p>

        <Link to="/Foods">Continue Shopping</Link>
        <Link to="/checkout">Proceed to Checkout</Link>
      </div>
    </div>
  );
};
