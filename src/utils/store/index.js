import React from "react";

export const StateContext = React.createContext();
export const DispatchContext = React.createContext();

export const initialState = {
  formData: {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  },
  errors: {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  },
};
