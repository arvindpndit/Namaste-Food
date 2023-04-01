import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RestaurantItemCard from "./RestaurantItemCard";

const RestaurantMenu = () => {
  //const { id } = useParams();
  const [resList, setResList] = useState();
  useEffect(() => {
    getRestaurantData();
  }, []);

  async function getRestaurantData() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.3164945&lng=78.03219179999999&restaurantId=657142&submitAction=ENTER"
    );
    const json = await data.json();
    const itemCards =
      json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card
        .itemCards;
    console.log(itemCards);
    setResList(itemCards);
    console.log(resList);
  }
  return (
    <div>
      {/* {resList.map((item) => {
        return <RestaurantItemCard item={item} />;
      })} */}
    </div>
  );
};

export default RestaurantMenu;
