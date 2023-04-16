import { useState } from "react";

const Panel = ({ isVisible, setIsVisible }) => {
  return (
    <div className="py-4">
      <div className="flex justify-between text-green-800">
        <p className="font-xl font-bold text-green-900 uppercase">question </p>
        {isVisible ? (
          <button
            onClick={() => {
              setIsVisible();
            }}
          >
            Hide
          </button>
        ) : (
          <button
            onClick={() => {
              setIsVisible();
            }}
          >
            Show
          </button>
        )}
      </div>

      {isVisible && (
        <p className="border-2 p-3 rounded-md fond-sm text-green-700 bg-green-50 mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
          perferendis illum earum veritatis sint. Quasi quos in, facere hic
          labore rem eveniet cum aut minus? Delectus quidem quos eius
          dignissimos ipsam, quisquam voluptate provident laudantium adipisci
          eveniet. Dignissimos tenetur, sit voluptatum maxime laborum dolores
          saepe sed! Eius quam aperiam animi?
        </p>
      )}
    </div>
  );
};

const Help = () => {
  const [isVisible, setIsVisible] = useState({
    question1: true,
    question2: false,
    question3: false,
  });

  return (
    <div className="flex flex-col items-center justify-center p-5">
      <div className="w-10/12 min-h-1/2 border rounded-lg border-green-400 p-4">
        <Panel
          isVisible={isVisible.question1}
          setIsVisible={{
            question1: true,
            question2: false,
            question3: false,
          }}
        />
        <Panel isVisible={isVisible.question2} />
        <Panel isVisible={isVisible.question3} />
      </div>
    </div>
  );
};

export default Help;
