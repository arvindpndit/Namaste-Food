const Shimmer = () => {
  return (
    <>
      <div className="flex flex-wrap mx-auto justify-evenly px-8 mt-36">
        {Array(12)
          .fill("")
          .map((index) => {
            return (
              <div
                key={index}
                className="flex flex-col flex-wrap border-2 h-80 w-72 m-4 p-3 animate-pulse "
              >
                <div className="h-40 bg-green-100 animate-pulse "></div>
                <h3 className="h-5 bg-green-100 mt-3 w-3/4"></h3>
                <h4 className="h-4 bg-green-100 mt-3 w-1/2"></h4>
                <h5 className="h-3 bg-green-100 mt-3 w-1/3"></h5>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Shimmer;
