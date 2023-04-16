import { createContext } from "react";

const userContext = createContext({
  user: {
    name: "Dummy name",
    email: "dummyemail@gmail.com",
  },
});

export default userContext;
