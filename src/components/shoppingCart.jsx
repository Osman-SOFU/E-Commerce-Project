import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  removeFromCart,
  updateCartItemCount,
  toggleCartItemSelection,
} from "../redux/actions/shoppingCartActions";

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.shoppingCart.cart);
  const history = useHistory();

  const handleRemove = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const handleCountChange = (productId, count) => {
    if (count >= 1) {
      dispatch(updateCartItemCount(productId, count));
    }
  };

  const handleToggleSelection = (productId) => {
    dispatch(toggleCartItemSelection(productId));
  };

  const handleCreateOrder = () => {
    history.push("/create-order");
  };

  const totalAmount = cart
    .filter((item) => item.checked)
    .reduce((total, item) => total + item.product.price * item.count, 0);

  return (
    <div className="shopping-cart-container p-4 md:p-6">
      <h2 className="text-2xl font-semibold mb-4">Shopping Cart</h2>

      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-200 hidden md:table">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-3">Select</th>
                <th className="border p-3">Product</th>
                <th className="border p-3">Price</th>
                <th className="border p-3">Quantity</th>
                <th className="border p-3">Total</th>
                <th className="border p-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.product.id} className="border-b">
                  <td className="border p-3 text-center">
                    <input
                      type="checkbox"
                      checked={item.checked}
                      onChange={() => handleToggleSelection(item.product.id)}
                    />
                  </td>
                  <td className="border p-3 flex items-center space-x-2">
                    <img
                      src={item.product.images[0]?.url}
                      alt={item.product.name}
                      className="w-12 h-12 object-cover rounded"
                    />
                    <span>{item.product.name}</span>
                  </td>
                  <td className="border p-3 text-center">
                    ${item.product.price}
                  </td>
                  <td className="border p-3 text-center">
                    <button
                      className="px-2 py-1 border rounded bg-gray-300"
                      onClick={() =>
                        handleCountChange(item.product.id, item.count - 1)
                      }
                      disabled={item.count <= 1}
                    >
                      -
                    </button>
                    <span className="mx-2">{item.count}</span>
                    <button
                      className="px-2 py-1 border rounded bg-gray-300"
                      onClick={() =>
                        handleCountChange(item.product.id, item.count + 1)
                      }
                    >
                      +
                    </button>
                  </td>
                  <td className="border p-3 text-center">
                    ${(item.product.price * item.count).toFixed(2)}
                  </td>
                  <td className="border p-3 text-center">
                    <button
                      className="bg-red-500 text-white px-3 py-1 rounded"
                      onClick={() => handleRemove(item.product.id)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Mobil Görünüm - Kart Listesi */}
          <div className="block md:hidden">
            {cart.map((item) => (
              <div
                key={item.product.id}
                className="border rounded-lg p-4 mb-4 shadow-md flex flex-col"
              >
                <div className="flex items-center space-x-4">
                  <input
                    type="checkbox"
                    checked={item.checked}
                    onChange={() => handleToggleSelection(item.product.id)}
                    className="w-5 h-5"
                  />
                  <img
                    src={item.product.images[0]?.url}
                    alt={item.product.name}
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold">
                      {item.product.name}
                    </h3>
                    <p className="text-gray-600">${item.product.price}</p>
                  </div>
                </div>

                <div className="mt-3 flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <button
                      className="px-2 py-1 border rounded bg-gray-300"
                      onClick={() =>
                        handleCountChange(item.product.id, item.count - 1)
                      }
                      disabled={item.count <= 1}
                    >
                      -
                    </button>
                    <span>{item.count}</span>
                    <button
                      className="px-2 py-1 border rounded bg-gray-300"
                      onClick={() =>
                        handleCountChange(item.product.id, item.count + 1)
                      }
                    >
                      +
                    </button>
                  </div>
                  <p className="text-lg font-semibold">
                    ${(item.product.price * item.count).toFixed(2)}
                  </p>
                </div>

                <button
                  className="mt-2 bg-red-500 text-white px-3 py-1 rounded w-full"
                  onClick={() => handleRemove(item.product.id)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="mt-4 flex flex-col md:flex-row justify-between items-center">
        <h3 className="text-lg font-semibold mb-2 md:mb-0">
          Total Amount: ${totalAmount.toFixed(2)}
        </h3>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded w-full md:w-auto"
          onClick={handleCreateOrder}
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default ShoppingCart;
