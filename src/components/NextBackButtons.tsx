import { SubmitHandler, UseFormHandleSubmit } from "react-hook-form";
import { useStepsContext } from "../context/useStepsContext";
import { Values } from "../types";

export default function NextBackButtons({
  step,
  handleSubmit,
  onSubmit,
}: {
  step: number;
  handleSubmit: UseFormHandleSubmit<Partial<Values>, undefined>;
  onSubmit: SubmitHandler<Partial<Values>>;
}) {
  const { back } = useStepsContext();
  return (
    <div className="absolute -left-[4%] top-[100dvh] mt-auto flex w-[100vw] translate-x-[-5%] translate-y-[-210%] justify-between bg-white px-10 py-5 md:static md:w-full md:translate-y-[0] md:bg-transparent md:p-0">
      {step > 0 && (
        <button
          type="button"
          onClick={back}
          className="font-semibold capitalize text-CoolGray hover:text-MarineBlueLight"
        >
          Go back
        </button>
      )}
      <button
        type="button"
        onClick={handleSubmit(onSubmit)}
        className={`ml-auto rounded-lg px-4 py-2 capitalize text-white md:py-3 ${
          step === 3
            ? "hover:bg-PurplishBlueLight bg-PurplishBlue"
            : "bg-MarineBlue hover:bg-MarineBlueLight"
        }`}
      >
        {step === 3 ? "Confirm" : "Next step"}
      </button>
    </div>
  );
}
