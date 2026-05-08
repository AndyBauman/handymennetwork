import { useState } from "react";
import { addToCart } from "@/lib/cart";

type Props = {
  id: string;
  name: string;
  price: number;
  type: "item" | "bundle";
};

export default function AddToCartButton({ id, name, price, type }: Props) {
  const [added, setAdded] = useState(false);

  function handleClick() {
    addToCart({ id, name, price, type });
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`min-h-[3rem] px-5 rounded-xl font-bold text-lg shadow transition-colors ${
        added
          ? "bg-brand-teal text-white"
          : "bg-brand-amber text-brand-charcoal hover:brightness-95"
      }`}
    >
      {added ? "Added!" : "Add to list"}
    </button>
  );
}
