import type { Product } from "../info";
import empty_cart from "../assets/illustration-empty-cart.svg";
import delete_icon from "../assets/icon-remove-item.svg";

type CartItem = Product & { quantity: number };

const Your_cart_component = ({ items }: { items: CartItem[] }) => {
  const deleteButton = (id: number) => {
    items.remove();
  };

  const itemCount = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <section className="bg-white">
      <h2 className="font-bold text-[hsl(14,86%,42%)]">
        Your Cart ({itemCount})
      </h2>

      {items.length === 0 ? (
        <div className="flex items-center justify-center flex-col">
          <img src={empty_cart} alt="empty_cart" />
          <p>Your added items will appear here</p>
        </div>
      ) : (
        <ul>
          {items.map((item) => (
            <li
              key={item.id}
              className="flex flex-row justify-between items-center"
            >
              <div className="flex flex-col">
                <span className="font-bold ">{item.name}</span>
                <span className="tracking-widest">
                  <span className="text-[hsl(14,86%,42%)] font-bold">
                    {item.quantity}x
                  </span>
                  @{item.price} ${Number(item.quantity) * Number(item.price)}
                </span>
              </div>
              <button
                type="button"
                onClick={() => deleteButton(item.id)}
                className="border rounded-full p-1"
              >
                <img src={delete_icon} alt="" />
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default Your_cart_component;
