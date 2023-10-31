import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { PLAN_DATA } from "../Consts";
import { useStepsContext } from "../context/useStepsContext";
import { CycleType, FormData, PlanType, Values } from "../types";
import NextBackButtons from "./NextBackButtons";
import PlanCard from "./PlanCard";
import Title from "./Title";

export default function SelectPlan({
  updateFields,
}: {
  updateFields: (fields: Partial<FormData>) => void;
}) {
  const { stepIndex, next, formData } = useStepsContext();

  const [plan, setPlan] = useState<PlanType>(formData.plan);
  const [cycle, setCycle] = useState<CycleType>(formData.cycle);

  const handlePlanChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPlan(e.target.value as PlanType);
  };

  const { handleSubmit, register } = useForm<Partial<Values>>();

  const onSubmit: SubmitHandler<Partial<Values>> = (data) => {
    updateFields({
      plan: data.plan,
      cycle: data.cycle ? "yearly" : "monthly",
    });
    next();
  };

  return (
    <section className="section">
      <Title
        title={"Select your plan"}
        subTitle={"You have the option of monthly or yearly billing."}
      />

      <form className="flex max-h-[50vh] flex-col gap-6 overflow-auto">
        <div className="flex flex-col justify-between gap-3  md:flex-row md:gap-0">
          <PlanCard
            id={PLAN_DATA.arcade.name}
            plan={plan}
            cycle={cycle}
            handlePlanChange={handlePlanChange}
            register={register}
          />
          <PlanCard
            id={PLAN_DATA.advanced.name}
            plan={plan}
            cycle={cycle}
            handlePlanChange={handlePlanChange}
            register={register}
          />
          <PlanCard
            id={PLAN_DATA.pro.name}
            plan={plan}
            cycle={cycle}
            handlePlanChange={handlePlanChange}
            register={register}
          />
        </div>

        <label
          htmlFor="toggle-cycle"
          className="flex cursor-pointer items-center justify-center gap-2 rounded-lg bg-Magnolia py-2"
        >
          <span
            className={`text-sm font-semibold capitalize 
            ${cycle === "monthly" ? "text-MarineBlue" : "text-CoolGray"}`}
          >
            Monthly
          </span>
          <input
            id="toggle-cycle"
            type="checkbox"
            className="hidden"
            {...register("cycle", {
              value: formData.cycle === "yearly",
              onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
                setCycle(e.target.checked ? "yearly" : "monthly");
              },
            })}
          />
          <div className="toggle-bg relative h-6 w-11 cursor-pointer rounded-full border-2 border-MarineBlue bg-MarineBlue"></div>
          <span
            className={`text-sm font-semibold capitalize 
            ${cycle === "monthly" ? "text-CoolGray" : "text-MarineBlue"}`}
          >
            Yearly
          </span>
        </label>
      </form>

      <NextBackButtons
        step={stepIndex}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
      />
    </section>
  );
}
