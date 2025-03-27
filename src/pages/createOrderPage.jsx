import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  fetchAddresses,
  setShippingAddress,
  setBillingAddress,
} from "../redux/actions/shoppingCartActions";
import api from "../services/api";

const CreateOrderPage = () => {
  const [newAddress, setNewAddress] = useState(false);
  const [editingAddress, setEditingAddress] = useState(null);
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
  const addresses = useSelector((state) => state.shoppingCart.addresses);
  const dispatch = useDispatch();
  const history = useHistory();

  const [selectedShippingAddress, setSelectedShippingAddress] = useState(null);
  const [selectedBillingAddress, setSelectedBillingAddress] = useState(null);
  const [isContractAccepted, setIsContractAccepted] = useState(false);
  const [sameAddress, setSameAddress] = useState(true);

  useEffect(() => {
    dispatch(fetchAddresses());
  }, [dispatch]);

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
          { headers: { Authorization: token } }
        );
      } else {
        await api.post("/user/address", formData, {
          headers: { Authorization: token },
        });
      }
      setNewAddress(false);
      setEditingAddress(null);
      dispatch(fetchAddresses());
    } catch (error) {
      console.error("Failed to save address", error);
    }
  };

  const handleDelete = async (addressId) => {
    try {
      await api.delete(`/user/address/${addressId}`, {
        headers: { Authorization: token },
      });
      dispatch(fetchAddresses());
    } catch (error) {
      console.error("Failed to delete address", error);
    }
  };

  const handleEdit = (address) => {
    setFormData({ ...address });
    setEditingAddress(address.id);
    setNewAddress(true);
  };

  const renderAddressCard = (address, selectedId, onSelect, color) => (
    <div
      key={address.id}
      className={`p-4 border rounded-lg cursor-pointer shadow-sm ${
        selectedId === address.id
          ? `border-${color}-500 bg-${color}-100`
          : "border-gray-300"
      }`}
      onClick={() => onSelect(address)}
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
  );

  const handleSelectShipping = (address) => {
    setSelectedShippingAddress(address.id);
    dispatch(setShippingAddress(address));
    if (sameAddress) {
      setSelectedBillingAddress(address.id);
      dispatch(setBillingAddress(address));
    }
  };

  const handleSelectBilling = (address) => {
    setSelectedBillingAddress(address.id);
    dispatch(setBillingAddress(address));
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Teslimat Adresi Seçin</h2>
      <div className="grid grid-cols-2 gap-4">
        {addresses.map((address) =>
          renderAddressCard(
            address,
            selectedShippingAddress,
            handleSelectShipping,
            "blue"
          )
        )}
        <button
          className="p-4 border border-dashed border-gray-400 text-gray-500 rounded-lg flex items-center justify-center hover:bg-gray-100"
          onClick={() => setNewAddress(true)}
        >
          + Yeni Adres Ekle
        </button>
      </div>

      <label className="flex items-center mt-4">
        <input
          type="checkbox"
          checked={sameAddress}
          onChange={(e) => {
            setSameAddress(e.target.checked);
            if (e.target.checked) {
              const selected = addresses.find(
                (a) => a.id === selectedShippingAddress
              );
              setSelectedBillingAddress(selected?.id || null);
              if (selected) dispatch(setBillingAddress(selected));
            }
          }}
          className="mr-2"
        />
        Faturamı Aynı Adrese Gönder
      </label>

      {!sameAddress && (
        <>
          <h2 className="text-xl font-bold mt-8 mb-4">Fatura Adresi Seçin</h2>
          <div className="grid grid-cols-2 gap-4">
            {addresses.map((address) =>
              renderAddressCard(
                address,
                selectedBillingAddress,
                handleSelectBilling,
                "blue"
              )
            )}
          </div>
        </>
      )}

      {newAddress && (
        <div className="mt-6 p-4 border rounded-lg shadow-md bg-white">
          <h3 className="text-lg font-semibold">
            {editingAddress ? "Adres Güncelle" : "Yeni Adres Ekle"}
          </h3>
          <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4 mt-4">
            <input
              name="title"
              placeholder="Adres Başlığı"
              value={formData.title}
              onChange={handleInputChange}
              className="p-2 border rounded"
            />
            <input
              name="name"
              placeholder="Ad"
              value={formData.name}
              onChange={handleInputChange}
              className="p-2 border rounded"
            />
            <input
              name="surname"
              placeholder="Soyad"
              value={formData.surname}
              onChange={handleInputChange}
              className="p-2 border rounded"
            />
            <input
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
              <option value="İstanbul">İstanbul</option>
              <option value="Ankara">Ankara</option>
              <option value="İzmir">İzmir</option>
              <option value="Sakarya">Sakarya</option>
            </select>
            <input
              name="district"
              placeholder="İlçe"
              value={formData.district}
              onChange={handleInputChange}
              className="p-2 border rounded"
            />
            <input
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
            />
            <button
              type="submit"
              className="bg-orange-500 text-white py-2 px-4 rounded col-span-2 hover:bg-orange-600"
            >
              {editingAddress ? "Güncelle" : "Kaydet"}
            </button>
          </form>
        </div>
      )}

      <div className="mt-6 flex items-start">
        <input
          type="checkbox"
          checked={isContractAccepted}
          onChange={(e) => setIsContractAccepted(e.target.checked)}
          className="mt-1 mr-2"
        />
        <label>
          <span className="font-medium">Ön Bilgilendirme Koşulları’nı</span> ve{" "}
          <span className="font-medium">Mesafeli Satış Sözleşmesi’ni</span>{" "}
          okudum, onaylıyorum.
        </label>
      </div>

      <button
        className={`py-3 w-full rounded mt-6 text-white ${
          selectedShippingAddress &&
          selectedBillingAddress &&
          isContractAccepted
            ? "bg-orange-500 hover:bg-orange-600"
            : "bg-gray-400 cursor-not-allowed"
        }`}
        disabled={
          !(
            selectedShippingAddress &&
            selectedBillingAddress &&
            isContractAccepted
          )
        }
        onClick={() => {
          history.push("/payment");
        }}
      >
        Kaydet ve Devam Et
      </button>
    </div>
  );
};

export default CreateOrderPage;
