import { shoe8 } from "../assets/images";
import { Button } from "../components";

const SuperQuality = () => {
  return (
    <section
      id='about-us'
      className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container'
    >
      <div className='flex flex-1 flex-col'>
        <h2 className='font-palanquin capitalize text-4xl lg:max-w-lg font-bold'>
        NorVi Express Mang
          <span className='text-coral-red'> Chất Lượng </span>
          <span className='text-coral-red'>Dầu Cá Na Uy </span> Đến 
          Từng Gia Đình Việt
        </h2>
        <p className='mt-4 lg:max-w-lg info-text'>
        Chào mừng bạn đến với NorVi Express, nơi mang đến những sản phẩm dầu cá chất lượng hàng đầu từ Na Uy 
        đến mọi gia đình Việt Nam. Chúng tôi tự hào là cầu nối đưa những dưỡng chất quý giá từ biển cả Bắc Âu vào từng bữa ăn của bạn, 
        với mong muốn giúp mọi người dân Việt Nam nâng cao sức khỏe và sống khỏe mạnh hơn mỗi ngày.
        </p>
        <p className='mt-6 lg:max-w-lg info-text'>
        Liên hệ với chúng tôi qua tin nhắn hoặc số điện thoại Zalo: 0933664968 để đặt hàng và nhận thêm thông tin chi tiết.
        </p>
        <div className='mt-11'>
          <Button label='View details' />
        </div>
      </div>

      <div className='flex-1 flex justify-center items-center'>
        <img
          src={shoe8}
          alt='product detail'
          width={570}
          height={522}
          className='object-contain'
        />
      </div>
    </section>
  );
};

export default SuperQuality;
