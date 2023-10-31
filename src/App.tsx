import AddOns from "./components/AddOns";
import Finish from "./components/Finish";
import PersonalInfo from "./components/PersonalInfo";
import SelectPlan from "./components/SelectPlan";
import SideBar from "./components/SideBar";
import ThankYou from "./components/ThankYou";
import { useStepsContext } from "./context/useStepsContext";
import { FormData } from "./types";

function App() {
  const { stepIndex, formData, updateFormData } = useStepsContext();

  const updateFields = (fields: Partial<FormData>) =>
    updateFormData({ ...formData, ...fields });

  return (
    <main className="relative flex h-screen w-full items-center justify-center bg-Magnolia font-ubunto">
      <div className="flex h-screen w-full flex-col bg-Magnolia shadow-sm md:flex md:h-[600px] md:w-[800px] md:flex-row md:rounded-2xl md:bg-white md:p-4">
        <SideBar />
        {stepIndex === 0 && <PersonalInfo updateFields={updateFields} />}
        {stepIndex === 1 && <SelectPlan updateFields={updateFields} />}
        {stepIndex === 2 && <AddOns updateFields={updateFields} />}
        {stepIndex === 3 && <Finish />}
        {stepIndex === 4 && <ThankYou />}
      </div>

      <div className="absolute bottom-5 hidden md:block">
        Challenge by &nbsp;
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noreferrer"
          className="text-blue-800 hover:text-blue-600"
        >
          Frontend Mentor
        </a>
        . &nbsp;Coded by &nbsp;
        <a
          href="https://www.makhloufi.me"
          target="_blank"
          rel="noreferrer"
          className="text-blue-800 hover:text-blue-600"
        >
          Abdelmounaim H. Makhloufi
        </a>
        .
      </div>
    </main>
  );
}

export default App;
