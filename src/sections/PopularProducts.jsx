import { products } from "../constants";
import { PopularProductCard } from "../components";

const PopularProducts = () => {
  return (
    <section id='products' className='max-container max-sm:mt-12'>
      <div className='flex flex-col justify-start gap-5'>
        <h2 className='text-4xl font-roboto font-bold'>
          Sản Phẩm<span className='text-coral-red'> Bán Chạy </span>
        </h2>
        <p className='lg:max-w-lg mt-2 font-roboto text-slate-gray'>
          Trải nghiệm những sản phẩm chất lượng được sử dụng phổ biến tại Nauy
        </p>
      </div>

      <div className='mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14'>
        {products.map((product) => (
          <PopularProductCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
