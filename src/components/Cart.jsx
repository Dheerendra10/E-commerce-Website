
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, updateQuantity } from "../features/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const { cartItems, totalPrice } = useSelector((state) => state.cart);

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleQuantityChange = (id, quantity) => {
    dispatch(updateQuantity({ id, quantity: parseInt(quantity, 10) }));
  };

  return (
    <>
     <div style={styles.container}>
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} style={styles.item}>
              <img
                src={item.image}
                alt={item.title}
                style={styles.image}
              />
              <div>
                <h3>{item.title}</h3>
                <p>Price: ${item.price}</p>
                <p>
                  Quantity:{" "}
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) =>
                      handleQuantityChange(item.id, e.target.value)
                    }
                    style={styles.quantityInput}
                  />
                </p>
                <button
                  onClick={() => handleRemove(item.id)}
                  style={styles.removeButton}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
        </div>
      )}
    </div>
    </>
   
  );
};

const styles = {
  container: { padding: "20px" },
  item: { display: "flex", alignItems: "center", marginBottom: "20px" },
  image: { width: "100px", height: "100px", marginRight: "20px" },
  quantityInput: { width: "50px", marginLeft: "10px" },
  removeButton: { backgroundColor: "red", color: "#fff", border: "none" },
};

export default Cart;
