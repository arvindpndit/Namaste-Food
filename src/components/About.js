import { useContext } from "react";
import userContext from "../utils/userContext";

const About = () => {
  const { user, setUser } = useContext(userContext);
  return (
    <div className="flex flex-col justify-center items-center h-[100vh]">
      {/* <div>This is About us Page</div>
      <div>{user.name}</div>
      <div>{user.email}</div> */}
    </div>
  );
};

export default About;
