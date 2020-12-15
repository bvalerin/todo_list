import { useState } from "react";

export const useForm = (initialState = {}) => {
  const [formvalues, setFormValues] = useState(initialState);

  const reset = () => {
    setFormValues(initialState);
  };

  const getInputChange = ({ target }) => {
    setFormValues({
      ...formvalues,
      [target.name]: target.value,
    });
  };

  return [formvalues, getInputChange, reset];
};
