import info from "../info";
import Add_tocart_component from "./Add_tocart_component";

interface ProductListProps {
  quantities: Record<number, number>;
  onQuantityChange: (productId: number, quantity: number) => void;
}

const Product_list_component = ({
  quantities,
  onQuantityChange,
}: ProductListProps) => {
  return (
    <>
      <div className="grid grid-cols-3 gap-2 rounded-2xl">
        {info.map((product) => (
          <div key={product.id} className="relative mb-6">
            <img
              src={product.image}
              alt={product.name}
              className="block w-full rounded-xl"
            />
            <div className="absolute bottom-16 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap">
              <Add_tocart_component
                quantity={quantities[product.id] ?? 0}
                onQuantityChange={(quantity) =>
                  onQuantityChange(product.id, quantity)
                }
              />
            </div>
            <div className="mt-8 text-start">
              <span>{product.shortName}</span>
              <h3 className="text-lg font-bold">{product.name}</h3>
              <p className="text-[hsl(14,86%,42%)]">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Product_list_component;
