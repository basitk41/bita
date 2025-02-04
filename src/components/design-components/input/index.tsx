import React from "react";
import { Input, ErrorMessage } from "./index.styles";

interface InputFieldProps {
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errorMessage?: string;
  placeholder: string;
}

const InputField: React.FC<InputFieldProps> = ({
  type,
  value,
  onChange,
  errorMessage,
  placeholder,
  ...props
}) => {
  return (
    <>
      <Input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        {...props}
      />
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </>
  );
};

export default InputField;
