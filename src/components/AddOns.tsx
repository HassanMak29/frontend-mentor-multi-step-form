import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useStepsContext } from "../context/useStepsContext";
import { FormData, Values } from "../types";
import AddOnsCard from "./AddOnsCard";
import NextBackButtons from "./NextBackButtons";
import Title from "./Title";

export default function AddOns({
  updateFields,
}: {
  updateFields: (fields: Partial<FormData>) => void;
}) {
  const { register, handleSubmit } = useForm<Partial<Values>>();
  const { formData, stepIndex, next } = useStepsContext();
  const [selected, setSelected] = useState({
    "online-service": formData["online-service"],
    "larger-storage": formData["larger-storage"],
    "customizable-profile": formData["customizable-profile"],
  });

  const onSubmit: SubmitHandler<Partial<Values>> = (data) => {
    updateFields({
      "online-service": data["online-service"],
      "larger-storage": data["larger-storage"],
      "customizable-profile": data["customizable-profile"],
    });
    next();
  };

  return (
    <section className="section">
      <Title
        title={"Pick add-ons"}
        subTitle={"Add-ons help enhance your gaming experience."}
      />

      <form className="flex flex-col gap-3">
        <AddOnsCard
          id={"online-service"}
          title={"Online service"}
          description={"access to multiplayer games"}
          register={register}
          setSelected={setSelected}
          selected={selected}
        />
        <AddOnsCard
          id={"larger-storage"}
          title={"Larger storage"}
          description={"Extra 1TB of cloud save"}
          register={register}
          setSelected={setSelected}
          selected={selected}
        />
        <AddOnsCard
          id={"customizable-profile"}
          title={"Customizable profile"}
          description={"Custom theme on your profile"}
          register={register}
          setSelected={setSelected}
          selected={selected}
        />
      </form>

      <NextBackButtons
        step={stepIndex}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
      />
    </section>
  );
}
