export type PlanType = "arcade" | "advanced" | "pro";
export type CycleType = "monthly" | "yearly";
export type AddOnsType =
  | "online-service"
  | "larger-storage"
  | "customizable-profile";

export interface FormData {
  name: string;
  email: string;
  phone: string;
  plan: PlanType;
  cycle: CycleType;
  "online-service": boolean;
  "larger-storage": boolean;
  "customizable-profile": boolean;
}

export interface Values {
  name: string;
  email: string;
  phone: string;
  plan: PlanType;
  cycle: boolean;
  "online-service": boolean;
  "larger-storage": boolean;
  "customizable-profile": boolean;
}
