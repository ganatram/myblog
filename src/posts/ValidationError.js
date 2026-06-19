import { FieldError } from "react-hook-form";

export function ValidationError({ fieldError }) {
  if (!fieldError) {
    return null;
  }
  return (
    <div role="alert" className="text-red-500 text-xs mt-1">
      {fieldError.message}
    </div>
  );
}
