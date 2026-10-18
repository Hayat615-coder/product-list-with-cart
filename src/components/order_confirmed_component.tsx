import confirmedIcon from "../assets/icon-order-confirmed.svg";
import type { Product } from "../info";

type CartItem = Product & { quantity: number };

interface OrderConfirmedProps {
  items: CartItem[];
  onStartNewOrder: () => void;
}

const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

const OrderConfirmedComponent = ({
  items,
  onStartNewOrder,
}: OrderConfirmedProps) => {
  const orderTotal = items.reduce((total, item) => {
    const price = Number(item.price.replace("$", ""));
    return total + price * item.quantity;
  }, 0);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      role="presentation"
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="order-confirmed-title"
        className="max-h-[90vh] w-full max-w-md overflow-y-auto rounded-xl bg-white p-6 shadow-xl sm:p-8"
      >
        <img src={confirmedIcon} alt="" className="mb-4 h-12 w-12" />
        <h2
          id="order-confirmed-title"
          className="text-3xl font-bold text-[#260f08]"
        >
          Order Confirmed
        </h2>
        <p className="mt-2 text-sm text-gray-500">
          We hope you enjoy your food!
        </p>

        <ul className="mt-6 divide-y rounded-lg bg-[#fcf8f6] px-4">
          {items.map((item) => {
            const unitPrice = Number(item.price.replace("$", ""));

            return (
              <li
                key={item.id}
                className="flex items-center justify-between gap-3 py-4"
              >
                <div className="flex min-w-0 items-center gap-3">
                  <img
                    src={item.image}
                    alt=""
                    className="h-12 w-12 shrink-0 rounded object-cover"
                  />
                  <div className="min-w-0">
                    <h3 className="truncate text-sm font-semibold">
                      {item.name}
                    </h3>
                    <p className="mt-1 text-sm">
                      <span className="mr-3 font-semibold text-[hsl(14,86%,42%)]">
                        {item.quantity}x
                      </span>
                      <span className="text-gray-500">
                        @ {currencyFormatter.format(unitPrice)}
                      </span>
                    </p>
                  </div>
                </div>
                <span className="shrink-0 text-sm font-semibold">
                  {currencyFormatter.format(unitPrice * item.quantity)}
                </span>
              </li>
            );
          })}

          <li className="flex items-center justify-between py-4">
            <span className="text-sm">Order Total</span>
            <strong className="text-xl">
              {currencyFormatter.format(orderTotal)}
            </strong>
          </li>
        </ul>

        <button
          type="button"
          onClick={onStartNewOrder}
          className="mt-5 w-full rounded-full bg-[hsl(14,86%,42%)] py-3 text-sm font-semibold text-white hover:bg-[hsl(14,86%,35%)] focus:outline-none focus:ring-2 focus:ring-[hsl(14,86%,42%)] focus:ring-offset-2"
        >
          Start New Order
        </button>
      </section>
    </div>
  );
};

export default OrderConfirmedComponent;
