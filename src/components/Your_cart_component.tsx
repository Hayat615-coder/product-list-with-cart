import type { Product } from "../info";
import emptyCart from "../assets/illustration-empty-cart.svg";
import deleteIcon from "../assets/icon-remove-item.svg";
import carbon_free from "../assets/icon-carbon-neutral.svg";

type CartItem = Product & { quantity: number };

interface YourCartProps {
  items: CartItem[];
  onQuantityChange: (productId: number, quantity: number) => void;
  onConfirmOrder: () => void;
}

const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

const Your_cart_component = ({
  items,
  onQuantityChange,
  onConfirmOrder,
}: YourCartProps) => {
  const itemCount = items.reduce((total, item) => total + item.quantity, 0);

  const orderTotal = items.reduce((total, item) => {
    const price = Number(item.price.replace("$", ""));
    return total + price * item.quantity;
  }, 0);

  return (
    <section className="mt-1 h-fit rounded-xl bg-white p-5 sm:p-6">
      <h2 className="text-xl font-bold text-[hsl(14,86%,42%)]">
        Your Cart ({itemCount})
      </h2>

      {items.length === 0 ? (
        <div className="flex flex-col items-center justify-center gap-4 py-6">
          <img src={emptyCart} alt="" />
          <p>Your added items will appear here</p>
        </div>
      ) : (
        <>
          <ul className="divide-y divide-gray-300">
            {items.map((item) => {
              const price = Number(item.price.replace("$", ""));

              return (
                <li
                  key={item.id}
                  className="flex items-center justify-between gap-4 py-4"
                >
                  <div className="flex flex-col">
                    <span className="font-bold">{item.name}</span>
                    <span className="tracking-wide">
                      <span className="mr-3 font-bold text-[hsl(14,86%,42%)]">
                        {item.quantity}x
                      </span>
                      <span className="text-gray-600">
                        @ {currencyFormatter.format(price)}
                      </span>
                      <span className="ml-2 font-semibold">
                        {currencyFormatter.format(price * item.quantity)}
                      </span>
                    </span>
                  </div>

                  <button
                    type="button"
                    aria-label={`Remove ${item.name} from cart`}
                    onClick={() => onQuantityChange(item.id, 0)}
                    className="rounded-full border p-1"
                  >
                    <img src={deleteIcon} alt="" />
                  </button>
                </li>
              );
            })}
          </ul>

          <div className="flex justify-between border-t py-4">
            <span>Order total</span>
            <strong>{currencyFormatter.format(orderTotal)}</strong>
          </div>
          <div className="flex flex-row rounded-md gap-2 p-1 bg-[hsl(13,31%,94%)]">
            <img src={carbon_free} alt="carbon_free" />
            <p className="text-sm">
              This is a <span className="font-bold">Carbon-neutral</span>{" "}
              delivery
            </p>
          </div>
          <button
            type="button"
            onClick={onConfirmOrder}
            className="mt-4 w-full rounded-full bg-[hsl(14,86%,42%)] py-3 font-bold text-white hover:bg-[hsl(14,86%,35%)] focus:outline-none focus:ring-2 focus:ring-[hsl(14,86%,42%)] focus:ring-offset-2"
          >
            Confirm Order
          </button>
        </>
      )}
    </section>
  );
};

export default Your_cart_component;
