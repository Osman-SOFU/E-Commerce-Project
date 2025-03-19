import { useDispatch, useSelector } from "react-redux";
import {
  removeFromCart,
  updateCartItemCount,
  toggleCartItemSelection,
} from "../redux/actions/shoppingCartActions";

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.shoppingCart.cart);

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

  // Calculate totals
  const productTotal = cart
    .filter((item) => item.checked)
    .reduce((total, item) => total + item.product.price * item.count, 0);

  const shippingCost = productTotal > 150 ? 0 : 29.99; // Free shipping if total > 150
  const discount = productTotal > 500 ? 20 : 0; // Example: $20 discount on orders above $500
  const grandTotal = productTotal + shippingCost - discount;

  return (
    <div className="shopping-cart-container p-4 md:p-6 flex flex-col-reverse md:flex-row gap-6">
      {/* Shopping Cart List */}
      <div className="md:w-2/3 w-full">
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

            {/* Mobile View - Cart List */}
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
      </div>

      {/* Order Summary Box - Appears on top in mobile, right in desktop */}
      <div className="md:w-1/3 w-full">
        <div className="border rounded-lg p-6 shadow-lg bg-white">
          <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
          <div className="flex justify-between text-gray-700">
            <span>Products Total:</span>
            <span>${productTotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-gray-700 mt-2">
            <span>Shipping Cost:</span>
            <span>${shippingCost.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-green-600 mt-2">
            <span>Discount:</span>
            <span>- ${discount.toFixed(2)}</span>
          </div>
          <hr className="my-3" />
          <div className="flex justify-between text-black font-semibold text-lg">
            <span>Grand Total:</span>
            <span>${grandTotal.toFixed(2)}</span>
          </div>
          <button className="bg-orange-500 text-white w-full py-2 mt-4 rounded">
            Create Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
