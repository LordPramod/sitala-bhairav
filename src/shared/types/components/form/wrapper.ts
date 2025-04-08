import React from "react";

export type FormWrapperProps = {
  children: React.ReactNode;
  errorText?: string;
  label?: string;
  disabled?: boolean;
  required?: boolean;
};
