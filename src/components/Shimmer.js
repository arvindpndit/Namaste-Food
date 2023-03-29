const Shimmer = () => {
  return (
    <>
      <div className="h-10 w-72 bg-slate-200 rounded-md mx-auto"></div>
      <div className="flex flex-wrap mx-auto justify-evenly px-8">
        {Array(10)
          .fill("")
          .map((index) => {
            return (
              <div
                key={index}
                className="flex flex-col flex-wrap border-2 h-80 w-52 m-4 rounded-md p-1 bg-slate-200"
              ></div>
            );
          })}
      </div>
    </>
  );
};

export default Shimmer;
