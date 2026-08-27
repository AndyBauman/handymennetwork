export type CartItem = {
  id: string;
  type: "item" | "bundle";
  name: string;
  price: number;
  quantity: number;
};

const CART_KEY = "hn-cart";
const MAX_QUANTITY = 99;

function isCartItem(value: unknown): value is CartItem {
  const i = value as CartItem;
  return (
    !!i &&
    typeof i === "object" &&
    typeof i.id === "string" &&
    (i.type === "item" || i.type === "bundle") &&
    typeof i.name === "string" &&
    Number.isFinite(i.price) &&
    Number.isFinite(i.quantity)
  );
}

function read(): CartItem[] {
  if (typeof window === "undefined") return [];
  try {
    const parsed = JSON.parse(localStorage.getItem(CART_KEY) || "[]");
    // Anything hand-edited or written by an older schema would otherwise crash
    // every consumer that calls .find/.filter/.reduce on it.
    return Array.isArray(parsed) ? parsed.filter(isCartItem) : [];
  } catch {
    return [];
  }
}

function write(items: CartItem[]) {
  localStorage.setItem(CART_KEY, JSON.stringify(items));
  window.dispatchEvent(new CustomEvent("cart-updated", { detail: items }));
}

export function getCart(): CartItem[] {
  return read();
}

export function addToCart(item: Omit<CartItem, "quantity">) {
  const items = read();
  const existing = items.find((i) => i.id === item.id && i.type === item.type);
  if (existing) {
    existing.quantity = Math.min(MAX_QUANTITY, existing.quantity + 1);
  } else {
    items.push({ ...item, quantity: 1 });
  }
  write(items);
}

export function removeFromCart(id: string, type: CartItem["type"] = "item") {
  write(read().filter((i) => !(i.id === id && i.type === type)));
}

export function updateQuantity(id: string, quantity: number, type: CartItem["type"] = "item") {
  const items = read();
  const item = items.find((i) => i.id === id && i.type === type);
  if (!item) return;
  item.quantity = Math.max(0, Math.min(MAX_QUANTITY, Math.floor(quantity)));
  write(item.quantity === 0 ? items.filter((i) => i !== item) : items);
}

export function clearCart() {
  write([]);
}

export function cartTotal(items: CartItem[]): number {
  return items.reduce((sum, i) => sum + i.price * i.quantity, 0);
}

export function cartCount(items: CartItem[]): number {
  return items.reduce((sum, i) => sum + i.quantity, 0);
}

export function formatUsd(amount: number): string {
  return `$${amount.toLocaleString("en-US")}`;
}
