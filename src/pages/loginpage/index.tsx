import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "@/components/design-components/input";
import Button from "@/components/design-components/button";
import { useFormValidation } from "@/hooks/useFormValidation";
import FormContainer from "@/components/design-components/form-container";
import { useAuth } from "@/hooks/useAuth";
import { token } from "@/utils";

const GenericLoginForm: React.FC = () => {
  const nivigate = useNavigate();
  const [, setAuth] = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { emailError, passwordError, validateEmail, validatePassword } =
    useFormValidation();

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    if (validateEmail(email) && validatePassword(password)) {
      setAuth(true);
      token.set(email);
      nivigate("/");
    }
  };

  if (token.get()) {
    nivigate("/");
  }

  return (
    <FormContainer>
      <h2>Login</h2>
      <InputField
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        errorMessage={emailError}
      />
      <InputField
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter your password"
        errorMessage={passwordError}
      />
      <Button variat="form" onClick={handleSubmit}>
        Login
      </Button>
    </FormContainer>
  );
};

export default GenericLoginForm;
