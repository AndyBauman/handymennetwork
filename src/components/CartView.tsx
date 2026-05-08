import { useState, useEffect } from "react";
import {
  getCart,
  removeFromCart,
  updateQuantity,
  clearCart,
  cartTotal,
  type CartItem,
} from "@/lib/cart";

export default function CartView() {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    setItems(getCart());
    const handler = (e: Event) => setItems([...(e as CustomEvent).detail]);
    window.addEventListener("cart-updated", handler);
    return () => window.removeEventListener("cart-updated", handler);
  }, []);

  const total = cartTotal(items);

  if (items.length === 0) {
    return (
      <div className="rounded-2xl bg-white border-2 border-brand-green/20 p-8 text-center">
        <p className="text-xl font-semibold text-brand-charcoal">Your list is empty</p>
        <p className="mt-2 text-lg text-brand-charcoal/70">
          Browse our repair menu and add items to get started.
        </p>
        <a
          href="/services"
          className="mt-6 inline-flex min-h-[3.5rem] items-center px-6 rounded-xl bg-brand-amber text-brand-charcoal font-bold text-lg shadow hover:brightness-95"
        >
          Browse repairs
        </a>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="rounded-2xl bg-white border-2 border-brand-green/20 overflow-hidden">
        <div className="divide-y divide-brand-green/10">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-5"
            >
              <div className="flex-1">
                <p className="font-semibold text-lg text-brand-charcoal">{item.name}</p>
                <p className="text-brand-charcoal/70">
                  ${item.price} each
                  {item.type === "bundle" && (
                    <span className="ml-2 text-sm bg-brand-teal/10 text-brand-teal px-2 py-0.5 rounded-full font-semibold">
                      Bundle
                    </span>
                  )}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center border-2 border-brand-green/20 rounded-lg overflow-hidden">
                  <button
                    type="button"
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="w-10 h-10 flex items-center justify-center text-xl font-bold hover:bg-brand-stone"
                    aria-label="Decrease quantity"
                  >
                    −
                  </button>
                  <span className="w-10 h-10 flex items-center justify-center font-bold text-lg border-x-2 border-brand-green/20">
                    {item.quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="w-10 h-10 flex items-center justify-center text-xl font-bold hover:bg-brand-stone"
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>
                <span className="font-bold text-lg text-brand-green min-w-[5rem] text-right">
                  ${item.price * item.quantity}
                </span>
                <button
                  type="button"
                  onClick={() => removeFromCart(item.id)}
                  className="w-10 h-10 flex items-center justify-center text-brand-charcoal/50 hover:text-red-600 rounded-lg"
                  aria-label={`Remove ${item.name}`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5">
                    <path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m3 0v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6h14" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-2xl bg-white border-2 border-brand-green/20 p-5 space-y-4">
        <div className="flex justify-between text-xl font-bold">
          <span>Total</span>
          <span className="text-brand-green">${total}</span>
        </div>
        <p className="text-brand-charcoal/70">
          Price shown is for the described scope of work. No hidden fees.
        </p>

        <div className="border-t border-brand-green/10 pt-4 space-y-4">
          <div>
            <label htmlFor="address" className="block font-semibold text-lg mb-1">
              Service address
            </label>
            <input
              type="text"
              id="address"
              placeholder="Enter your full address"
              className="w-full p-3 rounded-lg border-2 border-brand-green/20 text-lg focus:border-brand-green focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="notes" className="block font-semibold text-lg mb-1">
              Notes for your handyman <span className="font-normal text-brand-charcoal/60">(optional)</span>
            </label>
            <textarea
              id="notes"
              rows={3}
              placeholder="Parking info, gate code, pets, special instructions..."
              className="w-full p-3 rounded-lg border-2 border-brand-green/20 text-lg focus:border-brand-green focus:outline-none resize-y"
            />
          </div>

          <div className="flex items-start gap-3 p-4 bg-brand-stone rounded-xl">
            <input
              type="checkbox"
              id="familiar-pro"
              className="mt-1 w-5 h-5 rounded border-brand-green/30 accent-brand-green"
            />
            <div>
              <label htmlFor="familiar-pro" className="font-semibold text-lg cursor-pointer">
                I can wait for a familiar pro
              </label>
              <p className="text-brand-charcoal/70 mt-1">
                If you've had a highly-rated handyman before, we'll hold your request up to 2 hours
                for them to become available. If they can't make it, we'll match you with the next
                best pro.
              </p>
            </div>
          </div>
        </div>

        <button
          type="button"
          className="w-full min-h-[3.5rem] rounded-xl bg-brand-green text-brand-cream font-bold text-xl shadow hover:brightness-110 transition-all"
          onClick={() =>
            alert(
              "Payment integration coming soon. Your cart is saved — sign in to complete checkout.",
            )
          }
        >
          Continue to payment — ${total}
        </button>

        <div className="flex justify-between items-center pt-2">
          <a href="/services" className="text-brand-green font-semibold underline hover:no-underline">
            Add more repairs
          </a>
          <button
            type="button"
            onClick={() => {
              clearCart();
              setItems([]);
            }}
            className="text-brand-charcoal/50 hover:text-red-600 font-semibold"
          >
            Clear list
          </button>
        </div>
      </div>
    </div>
  );
}
