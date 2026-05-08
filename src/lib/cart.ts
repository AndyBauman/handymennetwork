export type CartItem = {
  id: string;
  type: "item" | "bundle";
  name: string;
  price: number;
  quantity: number;
};

const CART_KEY = "hn-cart";

function read(): CartItem[] {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(localStorage.getItem(CART_KEY) || "[]");
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
    existing.quantity += 1;
  } else {
    items.push({ ...item, quantity: 1 });
  }
  write(items);
}

export function removeFromCart(id: string) {
  write(read().filter((i) => i.id !== id));
}

export function updateQuantity(id: string, quantity: number) {
  const items = read();
  const item = items.find((i) => i.id === id);
  if (item) {
    item.quantity = Math.max(0, quantity);
    write(item.quantity === 0 ? items.filter((i) => i.id !== id) : items);
  }
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
