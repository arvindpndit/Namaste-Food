import { useState } from "react";

const Panel = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className="py-4">
      <div className="flex justify-between text-green-800">
        <p className="font-xl font-bold text-green-900 uppercase">question </p>
        {isVisible ? (
          <button
            onClick={() => {
              setIsVisible(false);
            }}
          >
            Hide
          </button>
        ) : (
          <button
            onClick={() => {
              setIsVisible(true);
            }}
          >
            Show
          </button>
        )}
      </div>

      {isVisible ? (
        <p className="border-b-2 py-4 fond-sm text-green-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
          perferendis illum earum veritatis sint. Quasi quos in, facere hic
          labore rem eveniet cum aut minus? Delectus quidem quos eius
          dignissimos ipsam, quisquam voluptate provident laudantium adipisci
          eveniet. Dignissimos tenetur, sit voluptatum maxime laborum dolores
          saepe sed! Eius quam aperiam animi?
        </p>
      ) : (
        <p></p>
      )}
    </div>
  );
};

const Help = () => {
  return (
    <div className="flex flex-col items-center justify-center p-5">
      <div className="w-10/12 min-h-1/2 border rounded-lg border-green-400 p-4">
        {Array(10)
          .fill("")
          .map((index) => {
            return <Panel key={index} />;
          })}
      </div>
    </div>
  );
};

export default Help;
