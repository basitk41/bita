import { FC } from "react";
import { AppButton } from "./index.styles";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent) => void;
  variat?: "primary" | "info" | "success" | "warning" | "danger" | "form";
}
const Button: FC<ButtonProps> = ({
  children,
  variat = "primary",
  ...props
}) => {
  return (
    <AppButton $variat={variat} {...props}>
      {children}
    </AppButton>
  );
};

export default Button;
