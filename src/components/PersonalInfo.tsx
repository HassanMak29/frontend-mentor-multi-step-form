import { SubmitHandler, useForm } from "react-hook-form";
import { useStepsContext } from "../context/useStepsContext";
import { FormData, Values } from "../types";
import NextBackButtons from "./NextBackButtons";
import Title from "./Title";

export default function PersonalInfo({
  updateFields,
}: {
  updateFields: (fields: Partial<FormData>) => void;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Partial<Values>>();
  const { stepIndex, next, formData } = useStepsContext();

  const onSubmit: SubmitHandler<Partial<Values>> = (data) => {
    updateFields({
      name: data.name,
      email: data.email,
      phone: data.phone,
    });
    next();
  };

  return (
    <section className="section">
      <Title
        title={"Personal info"}
        subTitle={"Please provide your name, email address, and phone number."}
      />

      <form>
        <div className="mb-1 flex justify-between">
          <label
            htmlFor="name"
            className="block text-sm capitalize text-MarineBlue"
          >
            Name
          </label>
          {errors.name && (
            <span className="text-sm font-semibold text-StrawberryRed">
              {errors.name.message}
            </span>
          )}
        </div>
        <input
          type="text"
          {...register("name", {
            required: "This field is required",
            value: formData.name,
            onChange: (e) => updateFields({ name: e.target.value }),
          })}
          className={`mb-5 block w-full rounded-lg border border-LightGray px-3 py-2 font-semibold text-MarineBlue hover:border-PurplishBlue focus:border-PurplishBlue focus:outline-none ${
            errors.name ? "border-StrawberryRed" : ""
          }`}
          placeholder="e.g. Stephen King"
          autoFocus
        />
        <div className="mb-1 flex justify-between">
          <label
            htmlFor="email"
            className="mb-1 block text-sm capitalize text-MarineBlue"
          >
            Email address
          </label>
          {errors.email && (
            <span className="text-sm font-semibold text-StrawberryRed">
              {errors.email.message}
            </span>
          )}
        </div>
        <input
          type="email"
          {...register("email", {
            required: "This field is required",
            value: formData.email,
            onChange: (e) => updateFields({ email: e.target.value }),
          })}
          className={`mb-5 block w-full rounded-lg border border-LightGray px-3 py-2 font-semibold text-MarineBlue hover:border-PurplishBlue focus:border-PurplishBlue focus:outline-none ${
            errors.email ? "border-StrawberryRed" : ""
          }`}
          placeholder="e.g. stephenking@lorem.com"
        />
        <div className="mb-1 flex justify-between">
          <label
            htmlFor="phone"
            className="block text-sm capitalize text-MarineBlue"
          >
            Phone number
          </label>
          {errors.phone && (
            <span className="text-sm font-semibold text-StrawberryRed">
              {errors.phone.message}
            </span>
          )}
        </div>
        <input
          type="text"
          {...register("phone", {
            required: "This field is required",
            value: formData.phone,
            onChange: (e) => updateFields({ phone: e.target.value }),
          })}
          className={`mb-5 block w-full rounded-lg border border-LightGray px-3 py-2 font-semibold text-MarineBlue hover:border-PurplishBlue focus:border-PurplishBlue focus:outline-none ${
            errors.phone ? "border-StrawberryRed" : ""
          }`}
          placeholder="e.g. +1 234 567 890"
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
