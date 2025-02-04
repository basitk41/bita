import { FC } from "react";
import { Form } from "./index.styles";

interface FormProps {
  children: React.ReactNode;
}
const FormContainer: FC<FormProps> = ({ children }) => {
  return <Form>{children}</Form>;
};

export default FormContainer;
