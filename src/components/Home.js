import foodPic from "./assets/food.png";

const Home = () => {
  return (
    <div className="flex mx-16 justify-between">
      <div className="flex flex-col flex-wrap w-2/5">
        <div className="flex gap-3 mt-36">
          <p className="text-8xl font-bold text-[#FF7E00] leading-[118px]">
            Namaste
          </p>
          <div className="flex flex-col justify-center">
            <p className="text-5xl font-bold leading-[40px]">Food</p>
            <p className="text-5xl font-bold leading-[40px]">Delivery</p>
          </div>
        </div>
        <p className="text-md text-[#909090]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit non
          nam praesentium! Commodi modi alias exercitationem possimus hic quas
        </p>
        <button className="bg-[#2F2F2F] rounded-full w-44 py-4 text-white hover:shadow-lg hover:bg-emerald-800 font-semibold">
          Feed your Tummy
        </button>
        <div>
          <p className="font-bold text-sm mt-12">5 stars Rating</p>
          <p className="text-sm text-[#909090]">Based on 1788 reviews</p>
        </div>
      </div>
      <div>
        <img src={foodPic} className="w-[580px]" />
      </div>
    </div>
  );
};

export default Home;
