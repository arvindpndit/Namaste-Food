import foodPic from "../assets/Photo.png";
import rectangle1 from "../assets/Rectangle 10.png";
import rectangle2 from "../assets/Rectangle 11.png";
import rectangle3 from "../assets/Rectangle 12.png";
import rectangle4 from "../assets/Rectangle 13.png";
import downloadApp from "../assets/downloadApp.png";
import photo1 from "../assets/Photo-base.png";
import union1 from "../assets/Group 29.png";
import photo2 from "../assets/Photo-base2.png";
import union2 from "../assets/Union.png";
import photo3 from "../assets/Photo-base3.png";
import union3 from "../assets/Union2.png";
import photo4 from "../assets/Photo-base4.png";
import union4 from "../assets/Union3.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col items-center mt-36">
      <div className="flex flex-col-reverse md:flex-row  mx-16 justify-between">
        <div className="flex flex-col w-full  md:w-2/5">
          <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-4 md:mt-28 mb-7 ">
            <p className="text-4xl md:text-8xl font-bold text-[#3F4255]">
              food
            </p>
            <div className="flex  gap-1 md:flex-col justify-center">
              <p className="text-4xl md:text-5xl font-bold text-[#9093A6]">
                that
              </p>
              <p className="text-4xl md:text-5xl font-bold text-[#9093A6]">
                excites:)
              </p>
            </div>
          </div>
          <p className="text-md text-center md:text-left w-[100%] text-[#909090]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            non nam praesentium! Commodi modi alias exercitationem possimus hic
            quas
          </p>
          <Link to="/body">
            <button className="bg-[#9093A6] rounded-full w-full md:w-44 py-4 mt-7 text-white hover:shadow-lg hover:bg-[#3F4255] font-semibold">
              Order Now
            </button>
          </Link>

          <div>
            <p className="font-bold text-sm mt-12">5 stars Rating</p>
            <p className="text-sm text-[#909090]">Based on 1788 reviews</p>
          </div>
        </div>
        <div>
          <img src={foodPic} className="w-[580px]" />
        </div>
      </div>

      <div className="w-4/5 bg-green-200 flex rounded-md h-80  md:h-80 my-14 md:my-36">
        <div className="flex flex-col justify-center gap-5">
          <div className="w-2/3  text-xl md:text-4xl mx-12 md:leading-[64px]">
            Food Delivery helps you bring food to your front door
          </div>
          <div>
            <button className="mx-12 bg-green-600 py-3 px-4  rounded-full font-semibold">
              Download App
            </button>
          </div>
        </div>
        <div className="mr-12 hidden md:flex items-center ">
          <img src={downloadApp} className="h-44 w-80 hover:cursor-pointer" />
        </div>
      </div>

      <div className="w-11/12 md:min-h-96  my-14 md:my-24 flex flex-col  justify-between">
        <div className="flex justify-between mb-7 ">
          <p className="text-3xl md:text-4xl text-[#3F4255]">Restaurants</p>
          <button className="px-3 py-2 font-semibold text-[#9093A6]  bg-[#F2F4FA]">
            show all
          </button>
        </div>
        <div className="flex justify-evenly md:justify-between flex-wrap ">
          <div className="h-72 mb-10 w-72 hover:scale-105 duration-300 hover:shadow-lg ">
            <img src={photo1} alt="" />
            <div className="h-28 flex justify-center items-center">
              <img src={union1} alt="" />
            </div>
          </div>
          <div className="h-72 mb-10 w-72 hover:scale-105 duration-300 hover:shadow-lg ">
            <img src={photo2} alt="" />
            <div className="h-28 flex justify-center items-center">
              <img src={union2} alt="" />
            </div>
          </div>
          <div className="h-72 mb-10 w-72 hover:scale-105 duration-300 hover:shadow-lg ">
            <img src={photo3} alt="" />
            <div className="h-28 flex justify-center items-center">
              <img src={union3} alt="" />
            </div>
          </div>
          <div className="h-72 mb-10 w-72 hover:scale-105 duration-300 hover:shadow-lg ">
            <img src={photo4} alt="" />
            <div className="h-28 flex justify-center items-center">
              <img src={union4} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="min-h-96 w-11/12 mx-auto flex flex-col ">
        <p className="text-3xl md:text-4xl py-5 mb-4 text-[#3F4255]  text-center md:text-left">
          #namastefood <span className=" text-[#9093A6]">in instagram</span>
        </p>
        <div className="flex flex-wrap justify-evenly md:justify-between">
          <img
            src={rectangle1}
            className="w-72 h-72 grayscale hover:grayscale-0 hover:scale-105 duration-300 hover:shadow-lg mb-8"
          />
          <img
            src={rectangle2}
            className="w-72 h-72 mb-8 grayscale hover:grayscale-0  hover:scale-105 duration-300 hover:shadow-lg"
          />
          <img
            src={rectangle3}
            className="w-72 h-72 mb-8 grayscale hover:grayscale-0 hover:scale-105 duration-300 hover:shadow-lg"
          />
          <img
            src={rectangle4}
            className="w-72 h-72 mb-8 grayscale hover:grayscale-0 hover:scale-105 duration-300 hover:shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
