import { useContext } from "react";
import stepsContext from "./stepsContext";

export const useStepsContext = () => {
  const context = useContext(stepsContext);
  if (!context) throw new Error("The context was used outside its provider");
  return context;
};
