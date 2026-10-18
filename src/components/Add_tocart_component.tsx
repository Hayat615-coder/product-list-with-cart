import cart from "../assets/icon-add-to-cart.svg";
import increment from "../assets/icon-increment-quantity.svg";
import decrement from "../assets/icon-decrement-quantity.svg";

interface AddToCartProps {
  quantity: number;
  onQuantityChange: (quantity: number) => void;
}

const Add_tocart_component = ({
  quantity,
  onQuantityChange,
}: AddToCartProps) => {
  return (
    <>
      {quantity === 0 ? (
        <button
          onClick={() => onQuantityChange(1)}
          type="button"
          className="border flex flex-row items-center justify-between rounded-full py-2 px-8 gap-1 bg-white text-black"
        >
          <img src={cart} alt="" />
          <span className="font-bold hover:text-[hsl(14,86%,42%)]">
            Add to cart
          </span>
        </button>
      ) : (
        <div className="border flex flex-row items-center justify-between rounded-full py-2 px-4 gap-6 bg-[hsl(14,86%,42%)] text-white">
          <button
            type="button"
            aria-label="Decrease quantity"
            onClick={() => onQuantityChange(quantity - 1)}
            className=" rounded-full p-2 py-3 border border-white hover:bg-white"
          >
            <span
              aria-hidden="true"
              className="group block h-0.5 w-2.5 bg-white group-hover:bg-[hsl(14,86%,42%)]"
              style={{
                WebkitMaskImage: `url("${decrement}")`,
                maskImage: `url("${decrement}")`,
                maskRepeat: "no-repeat",
                maskPosition: "center",
                maskSize: "contain",
              }}
            />
          </button>

          <span>{quantity}</span>

          <button
            type="button"
            aria-label="Increase quantity"
            onClick={() => onQuantityChange(quantity + 1)}
            className="group rounded-full p-2 border border-white hover:bg-white"
          >
            <span
              aria-hidden="true"
              className="block h-2.5 w-2.5 bg-white group-hover:bg-[hsl(14,86%,42%)]"
              style={{
                WebkitMaskImage: `url("${increment}")`,
                maskImage: `url("${increment}")`,
                maskRepeat: "no-repeat",
                maskPosition: "center",
                maskSize: "contain",
              }}
            />
          </button>
        </div>
      )}
    </>
  );
};

export default Add_tocart_component;
