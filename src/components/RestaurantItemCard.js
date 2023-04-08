const RestaurantItemCard = (props) => {
  return (
    <div>
      <div className="flex w-9/12 mx-auto gap-4 pt-5">
        <div className="w-9/12">
          <h2 className="font-xl font-bold">{props.item.card.info.name}</h2>
          <p>{props?.item?.card?.info?.description}</p>
        </div>

        <img
          className="w-52 h-32 object-cover"
          src={
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/" +
            props.item.card.info.imageId
          }
        />
      </div>
    </div>
  );
};

export default RestaurantItemCard;
