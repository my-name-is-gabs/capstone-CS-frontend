import { createContext, useState } from "react";

const SuccessContext = createContext();

// eslint-disable-next-line react/prop-types
export const SuccessProvider = ({ children }) => {
  const [isSuccessDisplay, setSuccessDisplay] = useState(false);
  return (
    <SuccessContext.Provider value={{ isSuccessDisplay, setSuccessDisplay }}>
      {children}
    </SuccessContext.Provider>
  );
};

export default SuccessContext;
