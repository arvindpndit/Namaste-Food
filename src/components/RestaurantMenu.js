import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RestaurantItemCard from "./RestaurantItemCard";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const { id } = useParams();
  const [resList, setResList] = useState(null);
  useEffect(() => {
    getRestaurantData();
  }, []);

  async function getRestaurantData() {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.3164945&lng=78.03219179999999&restaurantId=" +
          id +
          "&submitAction=ENTER"
      );
      const json = await data.json();
      const itemCards =
        json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
          ?.card?.itemCards;
      setResList(itemCards);
    } catch (error) {
      console.error(`Opps!!! Something went wrong ${error}`);
    }
  }

  return !resList ? (
    <Shimmer />
  ) : (
    <div>
      <p className="text-xl text-[#3F4255] uppercase font-bold w-11/12 md:w-9/12 mx-auto pl-5 mb-5 mt-32">
        Recommended
      </p>
      {resList.map((item) => {
        return <RestaurantItemCard item={item} key={item.card.info.id} />;
      })}
    </div>
  );
};

export default RestaurantMenu;
