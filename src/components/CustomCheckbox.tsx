import React, { useState, ChangeEvent } from "react";
import { Check } from "lucide-react";

interface CustomCheckboxProps {
  id: string;
  label: string;
  checked?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  className?: string;
}
// tetee

export const CustomCheckbox: React.FC<CustomCheckboxProps> = ({
  id,
  label,
  checked: controlledChecked,
  onChange,
  disabled = false,
  className = "",
  ...props
}) => {
  const [internalChecked, setInternalChecked] = useState<boolean>(false);

  const isChecked =
    controlledChecked ?? internalChecked;

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (controlledChecked === undefined) {
      setInternalChecked(!internalChecked);
    }
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <div className={`flex items-center gap-2 select-none ${className}`}>
      <div className="relative">
        <input
          type="checkbox"
          id={id}
          checked={isChecked}
          onChange={handleChange}
          disabled={disabled}
          className={`
            appearance-none w-5 h-5 border-2 border-gray-300 rounded 
            transition-colors duration-200 ease-in-out
            ${
              disabled
                ? "cursor-not-allowed opacity-50"
                : "cursor-pointer hover:border-blue-400"
            }
            ${isChecked && !disabled ? "border-blue-400 bg-blue-400" : ""}
          `}
          style={{background:"#7B76F1"}}
          {...props}
        />
        {isChecked && (
          <Check
            className={`absolute d-none top-0.5 left-0.5 text-white
              ${disabled ? "d-none" : ""}
            `}
            size={16}
            strokeWidth={3}
          />
        )}
          <label
        htmlFor={id}
        className={`custom-label text-sm mx-1
          ${disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"}
        `}
      >
        {label}
      </label>
      </div>
    
    </div>
  );
};
