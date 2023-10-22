import { useStepsContext } from "../context/useStepsContext";
import Step from "./Step";

export default function SideBar() {
  const { goTo, stepIndex } = useStepsContext();

  return (
    <div className="flex basis-1/4 items-start justify-center gap-6 bg-[url('/images/bg-sidebar-mobile.svg')] bg-cover bg-no-repeat p-10 md:basis-1/3 md:flex-col md:justify-start md:rounded-xl md:bg-[url('/images/bg-sidebar-desktop.svg')] md:pl-7">
      <Step step={0} title={"Your Info"} goTo={goTo} stepIndex={stepIndex} />
      <Step step={1} title={"Select plan"} goTo={goTo} stepIndex={stepIndex} />
      <Step step={2} title={"Add-ons"} goTo={goTo} stepIndex={stepIndex} />
      <Step
        step={3}
        title={"Summary"}
        goTo={goTo}
        stepIndex={stepIndex === 4 ? 3 : stepIndex}
      />
    </div>
  );
}
