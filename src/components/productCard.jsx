import { useHistory } from "react-router-dom";

const ProductCard = ({ product }) => {
  const history = useHistory();

  const handleClick = () => {
    history.push(`/product/${product.id}`);
  };

  return (
    <div
      onClick={handleClick}
      className="flex flex-col items-center flex-1 min-w-[250px] max-w-[295px] bg-white shadow-md p-4 rounded-lg"
    >
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-[360px] object-cover rounded-lg"
      />
      <h3 className="text-gray-900 font-bold text-lg mt-4">{product.title}</h3>
      <p className="text-gray-500 text-sm">{product.department}</p>
      <div className="flex gap-2 mt-2">
        <span className="text-gray-400 line-through">${product.oldPrice}</span>
        <span className="text-green-500 font-bold">${product.newPrice}</span>
      </div>
    </div>
  );
};

export default ProductCard;
