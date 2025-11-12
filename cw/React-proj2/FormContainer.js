import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateField, submitForm, resetForm } from "./FormSlice";
import FormComponent from "./FormComponent";
import Child2 from "./Child2";

const FormContainer = () => {
  const dispatch = useDispatch();
  const { data, submitted } = useSelector((state) => state.loginForm);

  const handleSubmit = useCallback(() => {
    dispatch(submitForm());
  }, [dispatch]);

  const handleReset = useCallback(() => {
    dispatch(resetForm());
  }, [dispatch]);

  const handleChange = useCallback(
    (field, value) => {
      dispatch(updateField({ field, value }));
    },
    [dispatch]
  );

  return (
    <div className="FormContainer">
      <FormComponent
        formData={data}
        onChange={handleChange}
        onSubmit={handleSubmit}
        onReset={handleReset}
        submitted={submitted}
      />

      {submitted && <Child2 formData={data} />}
    </div>
  );
};

export default FormContainer;
