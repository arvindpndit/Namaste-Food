import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RestaurantItemCard from "./RestaurantItemCard";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const { id } = useParams();
  console.log(id);
  const [resList, setResList] = useState(null);
  useEffect(() => {
    getRestaurantData();
  }, []);

  async function getRestaurantData() {
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
  }

  return !resList ? (
    <Shimmer />
  ) : (
    <div>
      <p className="text-xl uppercase font-bold w-9/12 mx-auto pl-5 mb-5">
        Recommended
      </p>
      {resList.map((item) => {
        return <RestaurantItemCard item={item} key={item.card.info.id} />;
      })}
    </div>
  );
};

export default RestaurantMenu;
