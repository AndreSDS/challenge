import React from "react";
import { InputForm, InputField } from "./style";

function Input({ref, handleSubmit, handleText, value, type, name, placeholder}) {

  return (
    <InputForm ref={ref}>
      <InputField
        onBlur={(e) => handleSubmit(e)}
        onChange={(e) => handleText(e)}
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
      />
    </InputForm>
  );
}

export default Input;
