import React, { forwardRef, useId } from "react";

function Select({ options, label,className = "", defaultValue, ...props }, ref) {
  // console.log(options);
  const id = useId();
  return (
    <div className="flex flex-col gap-2">
      {label && <label htmlFor={id}>{label}</label>}
      <select
        {...props}
        id={id}
        ref={ref}
        defaultValue={defaultValue}
        className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
      >
        {options?.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default forwardRef(Select);
