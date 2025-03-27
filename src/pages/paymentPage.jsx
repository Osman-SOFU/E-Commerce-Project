import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCards,
  addCard,
  deleteCard,
  updateCard,
} from "../redux/actions/cardActions";
import { toast } from "react-toastify";

const PaymentPage = () => {
  const dispatch = useDispatch();
  const { cards, loading, error } = useSelector((state) => state.cards);
  const [selectedCardId, setSelectedCardId] = useState(null);
  const [use3DSecure, setUse3DSecure] = useState(false);
  const [contractAccepted, setContractAccepted] = useState(false);

  const [newCard, setNewCard] = useState({
    id: null,
    card_no: "",
    expire_month: "",
    expire_year: "",
    name_on_card: "",
  });

  useEffect(() => {
    dispatch(fetchCards());
  }, [dispatch]);

  const handleAddOrUpdateCard = (e) => {
    e.preventDefault();
    if (newCard.id) {
      dispatch(updateCard(newCard)).then(() => {
        toast.success("Kart güncellendi!");
        resetForm();
      });
    } else {
      dispatch(addCard(newCard)).then(() => {
        toast.success("Kart eklendi!");
        resetForm();
      });
    }
  };

  const resetForm = () => {
    setNewCard({
      id: null,
      card_no: "",
      expire_month: "",
      expire_year: "",
      name_on_card: "",
    });
  };

  const handleEditCard = (card) => {
    setNewCard({
      id: card.id,
      card_no: card.card_no,
      expire_month: card.expire_month,
      expire_year: card.expire_year,
      name_on_card: card.name_on_card,
    });
  };

  const handleDeleteCard = (cardId) => {
    dispatch(deleteCard(cardId)).then(() => toast.info("Kart silindi."));
    if (newCard.id === cardId) resetForm();
  };

  const isPayEnabled = selectedCardId && contractAccepted;

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Kayıtlı Kartlar</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {cards.map((card) => (
          <div
            key={card.id}
            className={`border rounded-xl p-4 shadow cursor-pointer transition-all duration-200 ${
              selectedCardId === card.id
                ? "border-orange-500 bg-orange-100"
                : "border-gray-300"
            }`}
            onClick={() => setSelectedCardId(card.id)}
          >
            <div className="flex justify-between items-center">
              <div>
                <p className="font-semibold text-lg">
                  **** **** **** {card.card_no.slice(-4)}
                </p>
                <p className="text-sm text-gray-600">
                  {card.expire_month}/{card.expire_year} - {card.name_on_card}
                </p>
              </div>
              <div className="flex flex-col items-end gap-1">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleEditCard(card);
                  }}
                  className="text-blue-500 text-sm hover:underline"
                >
                  Düzenle
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDeleteCard(card.id);
                  }}
                  className="text-red-500 text-sm hover:underline"
                >
                  Sil
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Yeni Kart Ekleme / Güncelleme */}
      <div className="mt-8">
        <h2 className="text-xl font-bold mb-2">
          {newCard.id !== null ? "Kartı Güncelle" : "Yeni Kart Ekle"}
        </h2>
        <form
          onSubmit={handleAddOrUpdateCard}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-gray-50 p-4 rounded-xl"
        >
          <input
            type="text"
            placeholder="Kart Numarası"
            value={newCard.card_no}
            onChange={(e) =>
              setNewCard({ ...newCard, card_no: e.target.value })
            }
            className="p-2 border rounded"
            required
          />
          <input
            type="text"
            placeholder="Kart Üzerindeki İsim"
            value={newCard.name_on_card}
            onChange={(e) =>
              setNewCard({ ...newCard, name_on_card: e.target.value })
            }
            className="p-2 border rounded"
            required
          />
          <input
            type="number"
            placeholder="Ay"
            value={newCard.expire_month}
            onChange={(e) =>
              setNewCard({ ...newCard, expire_month: e.target.value })
            }
            className="p-2 border rounded"
            required
          />
          <input
            type="number"
            placeholder="Yıl"
            value={newCard.expire_year}
            onChange={(e) =>
              setNewCard({ ...newCard, expire_year: e.target.value })
            }
            className="p-2 border rounded"
            required
          />
          <div className="flex gap-2 col-span-1 md:col-span-2">
            <button
              type="submit"
              className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600"
            >
              {newCard.id !== null ? "Güncelle" : "Kaydet"}
            </button>
            {newCard.id && (
              <button
                type="button"
                onClick={resetForm}
                className="text-gray-600 underline"
              >
                İptal
              </button>
            )}
          </div>
        </form>
      </div>

      {/* 3D Secure ve Taksit */}
      <div className="mt-6">
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={use3DSecure}
            onChange={(e) => setUse3DSecure(e.target.checked)}
            className="w-4 h-4"
          />
          <span>3D Secure ile ödemek istiyorum</span>
        </label>
      </div>

      {/* Placeholder: Taksit seçenekleri */}
      <div className="mt-4">
        <label className="font-semibold block mb-2">
          Taksit Seçeneği (örnek):
        </label>
        <select className="p-2 border rounded w-full">
          <option>Tek çekim</option>
          <option>3 Taksit</option>
          <option>6 Taksit</option>
        </select>
      </div>

      {/* Sözleşme onayı */}
      <div className="mt-6">
        <label className="flex items-start">
          <input
            type="checkbox"
            checked={contractAccepted}
            onChange={(e) => setContractAccepted(e.target.checked)}
            className="mt-1 mr-2"
          />
          <span>
            Ön Bilgilendirme Koşulları’nı ve Mesafeli Satış Sözleşmesi’ni
            okudum, onaylıyorum.
          </span>
        </label>
      </div>

      {/* Ödeme Butonu */}
      <div className="mt-6">
        <button
          disabled={!isPayEnabled}
          className={`w-full py-3 rounded text-white text-lg font-semibold transition ${
            isPayEnabled
              ? "bg-orange-500 hover:bg-orange-600"
              : "bg-gray-400 cursor-not-allowed"
          }`}
        >
          Ödeme Yap
        </button>
      </div>
    </div>
  );
};

export default PaymentPage;
