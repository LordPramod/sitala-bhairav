import { FormWrapperProps } from "../../../types";
import { Field } from "../../../ui/field";

export const FormWrapper = ({
  children,
  label,
  disabled,
  errorText,
  required,
}: FormWrapperProps) => {
  return (
    <Field
      label={label}
      invalid={!!errorText && !disabled}
      disabled={disabled}
      required={required}
      errorText={errorText}
    >
      {children}
    </Field>
  );
};
