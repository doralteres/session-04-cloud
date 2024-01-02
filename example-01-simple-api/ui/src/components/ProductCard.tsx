import { currency } from "../utils/formats";

interface ProductCardProps {
  product: { name: string; price: number; imageUrl: string };
  count: number;
  onAdd: () => void;
  onRemove: () => void;
  disabled?: boolean;
}

const ActionButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = (
  props
) => {
  return <button className="font-bold py-1 px-2 text-indigo-700" {...props} />;
};

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  count,
  onAdd,
  onRemove,
  disabled,
}) => {
  return (
    <div
      className={`flex flex-col border items-center rounded-lg overflow-hidden shadow-md transition-all ${
        disabled ? "" : "hover:scale-95"
      }`}
    >
      <img
        src={product.imageUrl}
        alt={product.name}
        className={`h-40 w-full bg-gray-400 aspect-square object-cover ${
          disabled ? "grayscale" : ""
        }`}
      />
      <h4 className="font-semibold capitalize">{product.name}</h4>
      <p>{currency(product.price)}</p>
      <div className="flex items-center">
        <ActionButton onClick={onRemove}>-</ActionButton>
        <div className="px-2">{count}</div>
        <ActionButton onClick={onAdd}>+</ActionButton>
      </div>
    </div>
  );
};

export default ProductCard;
