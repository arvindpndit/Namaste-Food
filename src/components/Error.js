import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div className="flex flex-col justify-center items-center h-screen gap-5">
      <h1 className="text-3xl font-sans font-bold">
        Oop!! Something went wrong
      </h1>
      <h2 className="text-xl font-sans font-bold">
        {err.status + ":" + err.statusText}
      </h2>
    </div>
  );
};

export default Error;
