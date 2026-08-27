import { useEffect, useRef, useState } from "react";
import { addToCart } from "@/lib/cart";

type Props = {
  id: string;
  name: string;
  price: number;
  type: "item" | "bundle";
};

export default function AddToCartButton({ id, name, price, type }: Props) {
  const [added, setAdded] = useState(false);
  const resetTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => () => clearTimeout(resetTimer.current), []);

  function handleClick() {
    addToCart({ id, name, price, type });
    setAdded(true);
    // Rapid clicks would otherwise stack timers, and a pending one can fire
    // after unmount.
    clearTimeout(resetTimer.current);
    resetTimer.current = setTimeout(() => setAdded(false), 1500);
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={added ? `${name} added to your list` : `Add ${name} to your list`}
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
