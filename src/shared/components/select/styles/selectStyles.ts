import { StylesConfig } from "react-select";

export const selectStyles: StylesConfig = {
  container: (styles, { isDisabled }) => ({
    ...styles,
    width: "100%",
    height: "40px",
    opacity: isDisabled ? 0.5 : 1,
    pointerEvents: "auto",
  }),

  control: (styles, { isDisabled }) => ({
    ...styles,
    borderColor: "gray.600",
    boxShadow: "none",
    height: "100%",
    padding: "0",
    backgroundColor: "white",
    cursor: isDisabled ? "not-allowed" : undefined,
  }),

  option: (styles, { isSelected, isFocused }) => ({
    ...styles,
    height: "36px",
    fontSize: "14px",
    color: isSelected ? "white" : "black",
    backgroundColor: isSelected ? "#0e53b3" : isFocused ? "#d6e7ff" : "white",

    ":hover": {
      backgroundColor: isSelected ? "#0e53b3" : "#d6e7ff",
    },
  }),

  input: (styles) => ({ ...styles, fontSize: "14px" }),
  placeholder: (styles) => ({ ...styles, fontSize: "14px" }),
  singleValue: (styles) => ({ ...styles, fontSize: "14px", cursor: "pointer" }),
};
