import { useState } from "react";
import "./App.css";
import info, { type Product } from "./info";
import Product_list_component from "./components/Product_list_component";
import Your_cart_component from "./components/Your_cart_component";
import OrderConfirmedComponent from "./components/order_confirmed_component";

type CartItem = Product & { quantity: number };

function App() {
  const [quantities, setQuantities] = useState<Record<number, number>>({});
  const [isOrderConfirmed, setIsOrderConfirmed] = useState(false);

  function updateQuantity(productId: number, quantity: number) {
    setQuantities((current) => {
      const next = { ...current };

      if (quantity > 0) {
        next[productId] = quantity;
      } else {
        delete next[productId];
      }

      return next;
    });
  }

  const cartItems: CartItem[] = info.flatMap((product) => {
    const quantity = quantities[product.id] ?? 0;
    return quantity > 0 ? [{ ...product, quantity }] : [];
  });

  return (
    <main className="grid grid-cols-1 gap-6 bg-[hsl(13,31%,94%)] p-3 sm:gap-8 sm:p-6 lg:grid-cols-[2.5fr_1fr]">
      <Product_list_component
        quantities={quantities}
        onQuantityChange={updateQuantity}
      />
      <Your_cart_component
        items={cartItems}
        onQuantityChange={updateQuantity}
        onConfirmOrder={() => setIsOrderConfirmed(true)}
      />
      {isOrderConfirmed && (
        <OrderConfirmedComponent
          items={cartItems}
          onStartNewOrder={() => {
            setQuantities({});
            setIsOrderConfirmed(false);
          }}
        />
      )}
    </main>
  );
}

export default App;
