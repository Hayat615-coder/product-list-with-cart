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
      <section className="h-fit rounded-xl bg-[hsl(13,31%,94%)] p-1 sm:p-2">
        <h2 className="mb-4 text-3xl font-bold text-[#260f08]">Desserts</h2>
        <div className="grid grid-cols-1 gap-x-4 gap-y-7 sm:grid-cols-2 lg:grid-cols-3">
          {info.map((product) => (
            <article key={product.id} className="min-w-0">
              <div className="relative">
                <picture>
                  <source
                    media="(max-width: 639px)"
                    srcSet={product.mobileImage}
                  />
                  <img
                    src={product.image}
                    alt={product.name}
                    className={`block aspect-[1.55] w-full rounded-lg object-cover sm:aspect-square ${
                      quantities[product.id]
                        ? "ring-2 ring-[hsl(14,86%,42%)]"
                        : ""
                    }`}
                  />
                </picture>
                <div className="absolute bottom-0 left-1/2 z-10 -translate-x-1/2 translate-y-1/2 whitespace-nowrap">
                  <Add_tocart_component
                    quantity={quantities[product.id] ?? 0}
                    onQuantityChange={(quantity) =>
                      onQuantityChange(product.id, quantity)
                    }
                  />
                </div>
              </div>
              <div className="pt-7 text-start">
                <span className="text-sm text-gray-500">{product.shortName}</span>
                <h3 className="font-bold text-[#260f08]">{product.name}</h3>
                <p className="font-semibold text-[hsl(14,86%,42%)]">
                  {product.price}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
};

export default Product_list_component;
