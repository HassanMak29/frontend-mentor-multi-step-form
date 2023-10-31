import { SubmitHandler, useForm } from "react-hook-form";
import { ADD_ONS, ADD_ONS_PRICES, PLAN_DATA } from "../Consts";
import { useStepsContext } from "../context/useStepsContext";
import { AddOnsType, CycleType, PlanType, Values } from "../types";
import NextBackButtons from "./NextBackButtons";
import Title from "./Title";

export default function Finish() {
  const { formData, goTo } = useStepsContext();

  const plan: PlanType = formData.plan || Object.keys(PLAN_DATA)[0];
  const cycle: CycleType = formData.cycle;
  const price = PLAN_DATA[plan]["price"][cycle];

  const { handleSubmit } = useForm<Partial<Values>>();
  const { stepIndex, next } = useStepsContext();

  const onSubmit: SubmitHandler<Partial<Values>> = () => {
    if (!formData.name || !formData.email || !formData.phone) {
      goTo(0);
    } else {
      next();
    }
  };

  const totalToPay =
    price +
    Object.keys(ADD_ONS).reduce(
      (acc, ad) =>
        formData[ad as AddOnsType]
          ? acc + ADD_ONS_PRICES[ad as AddOnsType][cycle]
          : acc,
      0,
    );

  return (
    <section className="section">
      <Title
        title={"Finishing up"}
        subTitle={"Double check everything looks OK before confirming."}
      />

      <div className="w-full rounded-lg bg-Magnolia p-7">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold capitalize text-MarineBlue">
              {plan} ({cycle})
            </h3>
            <div
              className="cursor-pointer text-sm text-CoolGray underline"
              onClick={() => goTo(1)}
            >
              Change
            </div>
          </div>
          <span className="text-lg font-semibold text-MarineBlue">
            ${price}/{cycle === "monthly" ? "mo" : "yr"}
          </span>
        </div>
        {Object.keys(ADD_ONS).some((ad) => formData[ad as AddOnsType]) && (
          <>
            <hr className="my-6 border-[0.5px] border-LightGray" />
            <div className="flex flex-col gap-2.5">
              {Object.keys(ADD_ONS).map((ad) => {
                return formData[ad as AddOnsType] ? (
                  <div
                    key={ad}
                    className="flex items-center justify-between text-sm text-CoolGray"
                  >
                    <h4 className="">{ADD_ONS[ad as AddOnsType]}</h4>
                    <span className="text-MarineBlueLight">
                      +$
                      {ADD_ONS_PRICES[ad as AddOnsType][cycle]}/
                      {cycle === "monthly" ? "mo" : "yr"}
                    </span>
                  </div>
                ) : (
                  ""
                );
              })}
            </div>
          </>
        )}
      </div>
      <div className="flex items-center justify-between p-7">
        <div className="text-sm text-CoolGray">
          Total (per {cycle === "monthly" ? "month" : "year"})
        </div>
        <span className="text-xl font-bold text-PurplishBlue">
          +${totalToPay}/{cycle === "monthly" ? "mo" : "yr"}
        </span>
      </div>

      <NextBackButtons
        step={stepIndex}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
      />
    </section>
  );
}
