import React, { InputHTMLAttributes } from "react";

import { InputBlock } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
}

const Input: React.FC<InputProps> = ({ label, name, ...rest }) => {
  return (
    <InputBlock>
      <label htmlFor={name}>{label}</label>
      <input type="text" name={name} id={name} {...rest} />
    </InputBlock>
  );
};

export default Input;
