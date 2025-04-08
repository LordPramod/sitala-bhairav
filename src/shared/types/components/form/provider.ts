import React from "react";
import { FieldValues, SubmitHandler, UseFormReturn } from "react-hook-form";
import { TestContext } from "yup";

export type FormProviderProps<TFieldValues extends FieldValues> = {
  methods: UseFormReturn<TFieldValues, TestContext>;
  children: React.ReactNode;
  onSubmit: SubmitHandler<TFieldValues>;
};
