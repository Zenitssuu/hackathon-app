import React, { useId } from "react";
import { forwardRef } from "react";

const Input = forwardRef(function Input(
  { label, placeholder, className="",name, type, ...props },
  ref
) {
  const id = useId();
  return (
    <div className="flex flex-col w-full gap-3 items-start">
        {label && <label>{label}</label>}
      <input
        name={name}
        id={id}
        type={type}
        placeholder={placeholder}
        ref={ref}
        {...props}
        className={`border border-black/20 w-full p-2 rounded-lg ${className}`}
      />
    </div>
  );
});

export default Input;
