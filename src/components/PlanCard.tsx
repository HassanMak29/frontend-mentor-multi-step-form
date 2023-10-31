import { UseFormRegister } from "react-hook-form";
import { PLAN_DATA } from "../Consts";
import { CycleType, PlanType, Values } from "../types";

export default function PlanCard({
  id,
  plan,
  cycle,
  handlePlanChange,
  register,
}: {
  id: PlanType;
  plan: PlanType;
  cycle: CycleType;
  handlePlanChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  register: UseFormRegister<Partial<Values>>;
}) {
  return (
    <label
      className={`flex cursor-pointer flex-row gap-5 rounded-lg border border-LightGray p-4 hover:border-MarineBlue hover:bg-Magnolia md:h-40 md:w-32 md:flex-col md:justify-between md:gap-0 
      ${plan === id ? "border-MarineBlue bg-Magnolia" : ""} 
      `}
      htmlFor={id}
    >
      <img src={PLAN_DATA[id].icon} width={38} />
      <div className="mt-auto">
        <h3 className="font-semibold capitalize text-MarineBlue">{id}</h3>
        <span className="block text-CoolGray">{`$${
          PLAN_DATA[id].price[cycle]
        }/${cycle === "monthly" ? "mo" : "yr"}`}</span>
        {cycle !== "monthly" && (
          <span className="block text-sm text-MarineBlue">2 months free</span>
        )}
      </div>
      <input
        type="radio"
        id={id}
        value={id}
        checked={plan === id}
        className="absolute hidden"
        {...register("plan", {
          onChange: handlePlanChange,
        })}
      />
    </label>
  );
}
