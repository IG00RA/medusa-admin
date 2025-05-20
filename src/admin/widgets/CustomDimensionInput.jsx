import React from "react";
import { Controller } from "react-hook-form";

const CustomDimensionInput = ({ name, control, label }) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <div>
          <label>{label}</label>
          <input
            type="text"
            pattern="[0-9]*"
            inputMode="numeric"
            autoComplete="off"
            value={field.value ?? ""}
            onChange={(e) => field.onChange(e.target.value)}
            style={{ padding: "8px", margin: "8px 0", width: "100%" }}
            {...field}
          />
        </div>
      )}
    />
  );
};

export default CustomDimensionInput;
