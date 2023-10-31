/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext } from "react";
import { NUM_STEPS } from "../Consts";
import { FormData } from "../types";

export const steps = new Array(NUM_STEPS).fill(null).map((_, i) => i);

export default createContext({
  stepIndex: 0,
  steps: steps,
  formData: {} as FormData,
  next: () => {},
  back: () => {},
  goTo: (_index: number) => {},
  updateFormData: (_obj: FormData) => {},
});
