import React from "react";
import cn from "classnames";

const ServiceOptionsDesktop = ({
  serviceOptions,
  selectedOption,
  setSelectedOption,
}) => (
  <div className="flex gap-4">
    {Object.values(serviceOptions).map((option) => (
      <button
        key={option.id}
        className={cn(
          { "text-slate-400": option.id !== selectedOption.id },
          { "text-indigo-500": option.id === selectedOption.id }
        )}
        onClick={() => setSelectedOption(option)}
      >
        {option.label}
      </button>
    ))}
  </div>
);

export default ServiceOptionsDesktop;
