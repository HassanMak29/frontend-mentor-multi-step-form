import { ReactNode, useState } from "react";
import { FormData } from "../types";
import StepsContext, { steps } from "./stepsContext";

const INITIAL_DATA: FormData = {
  name: "",
  email: "",
  phone: "",
  plan: "arcade",
  cycle: "monthly",
  "online-service": false,
  "larger-storage": false,
  "customizable-profile": false,
};

export default function StepsContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [formData, setFormData] = useState(INITIAL_DATA);
  const [stepIndex, setStepIndex] = useState(0);

  const next = () => {
    setStepIndex((prev) => {
      if (prev < steps.length - 1) return prev + 1;
      else return prev;
    });
  };
  const back = () => {
    setStepIndex((prev) => {
      if (prev > 0) return prev - 1;
      else return prev;
    });
  };
  const goTo = (index: number) => {
    setStepIndex(index);
  };

  const updateFormData = (data: FormData) => {
    setFormData(data);
  };
  console.log("formData", formData);
  const valuesObject = {
    stepIndex,
    steps,
    next,
    back,
    goTo,
    formData,
    updateFormData,
  };

  return (
    <StepsContext.Provider value={valuesObject}>
      {children}
    </StepsContext.Provider>
  );
}
