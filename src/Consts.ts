import { PlanType } from "./types";

export const NUM_STEPS = 5;

export const PLAN_DATA: {
  [key in PlanType]: {
    name: PlanType;
    price: { monthly: number; yearly: number };
    icon: string;
  };
} = {
  arcade: {
    name: "arcade",
    price: { monthly: 9, yearly: 90 },
    icon: "/images/icon-arcade.svg",
  },
  advanced: {
    name: "advanced",
    price: { monthly: 12, yearly: 120 },
    icon: "/images/icon-advanced.svg",
  },
  pro: {
    name: "pro",
    price: { monthly: 15, yearly: 150 },
    icon: "/images/icon-pro.svg",
  },
};

export const ADD_ONS = {
  "online-service": "Online service",
  "larger-storage": "Larger storage",
  "customizable-profile": "Customizable profile",
};

export const ADD_ONS_PRICES: {
  [key: string]: { monthly: number; yearly: number };
} = {
  "online-service": {
    monthly: 1,
    yearly: 10,
  },
  "larger-storage": {
    monthly: 2,
    yearly: 20,
  },
  "customizable-profile": {
    monthly: 2,
    yearly: 20,
  },
};
