import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAddress } from "../redux/actions/shoppingCartActions";
import api from "../services/api"; // API modülünü içe aktar

const CreateOrderPage = () => {
  const [addresses, setAddresses] = useState([]);
  const [newAddress, setNewAddress] = useState(false);
  const [editingAddress, setEditingAddress] = useState(null);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    name: "",
    surname: "",
    phone: "",
    city: "",
    district: "",
    neighborhood: "",
    address: "",
  });

  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchAddresses = async () => {
      try {
        const response = await api.get("/user/address"); // Base URL ile çağır
        console.log("API Response:", response.data);
        setAddresses(Array.isArray(response.data) ? response.data : []);
      } catch (error) {
        console.error("Failed to fetch addresses", error);
        setAddresses([]);
      }
    };

    fetchAddresses();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingAddress) {
        await api.put(
          "/user/address",
          { id: editingAddress, ...formData },
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
      } else {
        await api.post("/user/address", formData, {
          headers: { Authorization: `Bearer ${token}` },
        });
      }

      setNewAddress(false);
      setEditingAddress(null);

      const response = await api.get("/user/address", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setAddresses(response.data);
    } catch (error) {
      console.error("Failed to save address", error);
    }
  };

  const handleDelete = async (addressId) => {
    try {
      await api.delete(`/user/address/${addressId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      const response = await api.get("/user/address", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setAddresses(response.data);
    } catch (error) {
      console.error("Failed to delete address", error);
    }
  };

  const handleEdit = (address) => {
    setFormData({
      title: address.title,
      name: address.name,
      surname: address.surname,
      phone: address.phone,
      city: address.city,
      district: address.district,
      neighborhood: address.neighborhood,
      address: address.address,
    });
    setEditingAddress(address.id);
    setNewAddress(true);
  };

  const handleSelectAddress = (address) => {
    setSelectedAddress(address.id);
    dispatch(setAddress(address));
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Adres Bilgileri</h2>

      {/* Adres Listesi */}
      <div className="grid grid-cols-2 gap-4">
        {Array.isArray(addresses) && addresses.length > 0 ? (
          addresses.map((address) => (
            <div
              key={address.id}
              className={`p-4 border rounded-lg cursor-pointer shadow-sm ${
                selectedAddress === address.id
                  ? "border-orange-500 bg-orange-100"
                  : "border-gray-300"
              }`}
              onClick={() => handleSelectAddress(address)}
            >
              <div className="flex justify-between items-center">
                <span className="font-semibold">{address.title}</span>
                <div>
                  <button
                    className="text-blue-500 hover:underline mr-2"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleEdit(address);
                    }}
                  >
                    Düzenle
                  </button>
                  <button
                    className="text-red-500 hover:underline"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDelete(address.id);
                    }}
                  >
                    Sil
                  </button>
                </div>
              </div>
              <p>
                {address.name} {address.surname}
              </p>
              <p>{address.phone}</p>
              <p>
                {address.city}, {address.district}, {address.neighborhood}
              </p>
              <p>{address.address}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">Kayıtlı adres bulunamadı.</p>
        )}

        {/* Yeni Adres Ekleme Butonu */}
        <button
          className="p-4 border border-dashed border-gray-400 text-gray-500 rounded-lg flex items-center justify-center hover:bg-gray-100"
          onClick={() => setNewAddress(true)}
        >
          + Yeni Adres Ekle
        </button>
      </div>

      {/* Adres Ekleme / Güncelleme Formu */}
      {newAddress && (
        <div className="mt-6 p-4 border rounded-lg shadow-md bg-white">
          <h3 className="text-lg font-semibold">
            {editingAddress ? "Adres Güncelle" : "Yeni Adres Ekle"}
          </h3>
          <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4 mt-4">
            <input
              type="text"
              name="title"
              placeholder="Adres Başlığı"
              value={formData.title}
              onChange={handleInputChange}
              className="p-2 border rounded"
            />
            <input
              type="text"
              name="name"
              placeholder="Ad"
              value={formData.name}
              onChange={handleInputChange}
              className="p-2 border rounded"
            />
            <input
              type="text"
              name="surname"
              placeholder="Soyad"
              value={formData.surname}
              onChange={handleInputChange}
              className="p-2 border rounded"
            />
            <input
              type="text"
              name="phone"
              placeholder="Telefon"
              value={formData.phone}
              onChange={handleInputChange}
              className="p-2 border rounded"
            />
            <select
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              className="p-2 border rounded"
            >
              <option value="">Şehir Seçin</option>
              <option value="istanbul">İstanbul</option>
              <option value="ankara">Ankara</option>
              <option value="izmir">İzmir</option>
              <option value="sakarya">Sakarya</option>

              {/* Diğer şehirler buraya eklenebilir */}
            </select>
            <input
              type="text"
              name="district"
              placeholder="İlçe"
              value={formData.district}
              onChange={handleInputChange}
              className="p-2 border rounded"
            />
            <input
              type="text"
              name="neighborhood"
              placeholder="Mahalle"
              value={formData.neighborhood}
              onChange={handleInputChange}
              className="p-2 border rounded"
            />
            <textarea
              name="address"
              placeholder="Adres Detayları"
              value={formData.address}
              onChange={handleInputChange}
              className="p-2 border rounded col-span-2"
            ></textarea>
            <button
              type="submit"
              className="bg-orange-500 text-white py-2 px-4 rounded col-span-2 hover:bg-orange-600"
            >
              {editingAddress ? "Güncelle" : "Kaydet"}
            </button>
          </form>
        </div>
      )}

      {/* Kaydet ve Devam Et Butonu */}
      <button className="bg-orange-500 text-white py-3 w-full rounded mt-6 hover:bg-orange-600">
        Kaydet ve Devam Et
      </button>
    </div>
  );
};

export default CreateOrderPage;
