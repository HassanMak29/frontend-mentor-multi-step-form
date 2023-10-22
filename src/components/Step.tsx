export default function Step({
  title,
  step,
  stepIndex,
  goTo,
}: {
  title: string;
  step: number;
  stepIndex: number;
  goTo: (step: number) => void;
}) {
  const active = step === stepIndex;

  return (
    <div
      className="flex cursor-pointer items-center justify-start gap-4"
      onClick={() => goTo(step)}
    >
      <div
        className={`${
          active ? "bg-LightBlue text-MarineBlue" : ""
        } flex h-8 w-8 items-center justify-center rounded-full border border-white text-sm  text-white`}
      >
        {step}
      </div>
      <div className="hidden flex-col md:flex">
        <span className="text-xs font-thin uppercase text-LightGray">
          Step {step}
        </span>
        <span className="text-sm font-semibold uppercase text-white">
          {title}
        </span>
      </div>
    </div>
  );
}
