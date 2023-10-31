import { UseFormRegister } from "react-hook-form";
import { ADD_ONS_PRICES } from "../Consts";
import { useStepsContext } from "../context/useStepsContext";
import { Values } from "../types";

interface Selected {
  "online-service": boolean;
  "larger-storage": boolean;
  "customizable-profile": boolean;
}

export default function AddOnsCard({
  id,
  title,
  description,
  register,
  setSelected,
  selected,
}: {
  id: "online-service" | "larger-storage" | "customizable-profile";
  title: string;
  description: string;
  register: UseFormRegister<Partial<Values>>;
  setSelected: (s: Selected) => void;
  selected: Selected;
}) {
  const { formData } = useStepsContext();
  const cycle = formData.cycle;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === id) setSelected({ ...selected, [id]: !selected[id] });
    else setSelected({ ...selected, [id]: false });
  };

  return (
    <label
      htmlFor={id}
      className={`cursor-pointer rounded-lg border p-5 ${
        selected[id] === true
          ? "border-MarineBlueLight bg-Magnolia"
          : "border-LightGray"
      }`}
    >
      <div className="flex items-center justify-between gap-5">
        <input
          id={id}
          type="checkbox"
          checked={selected[id] === true}
          className={`h-5 w-5 rounded text-PurplishBlue focus:ring-0 ${"border border-LightGray border-MarineBlueLight"}`}
          {...register(id, { onChange: handleChange })}
        />
        <div className="flex flex-1 flex-col items-start">
          <h3 className="text-sm font-semibold text-MarineBlue">{title}</h3>
          <span className="text-sm text-CoolGray">{description}</span>
        </div>
        <span className="text-sm text-PurplishBlue">{`+$${
          ADD_ONS_PRICES[id][cycle]
        }/${cycle === "yearly" ? "yr" : "mo"}`}</span>
      </div>
    </label>
  );
}
