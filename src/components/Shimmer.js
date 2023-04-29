const Shimmer = () => {
  return (
    <>
      <div className="flex flex-wrap mx-auto justify-evenly px-8 mt-36">
        {Array(10)
          .fill("")
          .map((index) => {
            return (
              <div
                key={index}
                className="flex flex-col flex-wrap border-2 h-80 w-72 m-4 p-1 bg-green-100"
              ></div>
            );
          })}
      </div>
    </>
  );
};

export default Shimmer;
