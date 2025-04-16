import InputField from "@/components/elements/InputField";

export default function Page() {
  // storing properties in prop objects and using spread props syntax to pass props
  const baseInputProps = {
    type: "email",
    label: "Email",
    placeholder: "name@email.com",
    hint: "This is a hint text.",
  };
  const inputProps = {
    id: "input-normal-state",
    ...baseInputProps,
  };

  const filledInputProps = {
    id: "input-filled-state",
    ...baseInputProps,
  };

  const errorInputProps = {
    id: "input-error-state",
    ...baseInputProps,
    hint: "",
    errorMessage: "This is an error message.",
  };

  const disabledInputProps = {
    id: "input-disabled-state",
    ...baseInputProps,
    isDisabled: true,
  };

  return (
    <div className="flex flex-col items-center bg-white py-28">
      <div className="w-[340px] flex flex-col justify-center gap-12">
        <InputField {...inputProps} />
        <InputField {...filledInputProps} />
        <InputField {...disabledInputProps} />
        <InputField {...errorInputProps} />
      </div>
    </div>
  );
}
