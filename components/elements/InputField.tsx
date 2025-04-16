"use client";
/**
 * Input field component is customizable by label text, placeholder,
 * hint text, error message and supports states: normal, filled,
 * focused, disabled, and error message.
 */

import { useState } from "react";

// customizable with props
type InputProps = {
  id: string;
  type: string;
  label: string;
  placeholder?: string;
  hint?: string;
  errorMessage?: string;
  isDisabled?: boolean;
};

function classNames(...args: string[]) {
  return args.filter(Boolean).join(" ");
}

// semantic html for better a11y
// make modular component, add layout and style
export default function InputField({
  id,
  type = "text",
  label,
  placeholder,
  hint,
  errorMessage,
  isDisabled = false,
}: InputProps) {
  // userInput state to handle filled state
  const [userInput, setUserInput] = useState("");

  // isFocused state to handle styling input with a red outline only when input has focus and there's an error message:
  const [isFocused, setIsFocused] = useState(false);
  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  return (
    // Clicking on the label focuses on the <input>
    <label
      htmlFor={`${id}-input`}
      className="font-medium text-sm text-neutral-700"
    >
      {label}
      <input
        // Hint text / error message are associated with the <input>
        aria-describedby={`${id}-hint ${id}-error`}
        placeholder={placeholder}
        id={`${id}-input`}
        name={id}
        type={type}
        autoComplete={type}
        required
        className={classNames(
          "w-full bg-neutral-50 px-3.5 py-2.5 rounded border border-solid border-neutral-200 my-3 font-normal text-sm text-neutral-500 outline-none transition-colors duration-300",
          isDisabled
            ? "text-neutral-400 cursor-not-allowed"
            : "text-neutral-900",
          userInput ? "text-neutral-900" : "text-neutral-500",
          errorMessage && isFocused
            ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-200"
            : "focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
        )}
        disabled={isDisabled}
        onFocus={handleFocus}
        onBlur={handleBlur}
        value={userInput}
        onChange={(event) => setUserInput(event?.target.value)}
      />

      {hint && (
        <div id={`${id}-hint`} className="font-normal text-sm text-neutral-500">
          {hint}
        </div>
      )}

      {errorMessage && (
        <div id={`${id}-error`} className="font-normal text-sm text-red-600">
          {errorMessage}
        </div>
      )}
    </label>
  );
}
