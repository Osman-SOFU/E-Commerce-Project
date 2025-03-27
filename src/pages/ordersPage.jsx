import { useEffect, useState } from "react";
import api from "../services/api";
import { showError } from "../utils/toast";

const OrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get("/order")
      .then((res) => {
        setOrders(res.data);
        setLoading(false);
      })
      .catch((err) => {
        showError("Siparişler alınamadı.");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="text-center mt-6">Yükleniyor...</p>;
  }

  if (!orders.length) {
    return <p className="text-center mt-6">Henüz siparişiniz yok.</p>;
  }

  return (
    <div className="max-w-5xl mx-auto mt-10 px-4">
      <h2 className="text-3xl font-bold mb-8 text-center">
        Sipariş Geçmişiniz
      </h2>

      <div className="space-y-6">
        {orders.map((order) => (
          <div
            key={order.id}
            className="border rounded-lg shadow-md overflow-hidden"
          >
            <div className="bg-gray-100 px-4 py-3 flex flex-col sm:flex-row sm:justify-between sm:items-center">
              <div>
                <p className="font-semibold">
                  Sipariş No: <span className="text-gray-700">#{order.id}</span>
                </p>
                <p className="text-sm text-gray-600">
                  {new Date(order.order_date).toLocaleString()}
                </p>
              </div>
              <div className="mt-2 sm:mt-0 text-sm text-gray-600">
                <p>Kart Sahibi: {order.card_name}</p>
                <p>
                  Kart: **** **** **** {String(order.card_no).slice(-4)} |{" "}
                  {order.card_expire_month}/{order.card_expire_year}
                </p>
              </div>
            </div>

            <div className="divide-y">
              {order.products.map((product, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row gap-4 p-4 items-center"
                >
                  <img
                    src={product.images[0]?.url}
                    alt={product.name}
                    className="w-24 h-24 object-cover rounded-md"
                  />
                  <div className="flex-1">
                    <p className="font-semibold text-lg">{product.name}</p>
                    <p className="text-gray-600 text-sm mt-1">
                      {product.description}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm">Adet: {product.count}</p>
                    <p className="font-semibold">
                      {(product.price * product.count).toFixed(2)} ₺
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gray-50 px-4 py-3 text-right">
              <span className="font-bold text-lg">
                Toplam: {order.price.toFixed(2)} ₺
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrdersPage;
