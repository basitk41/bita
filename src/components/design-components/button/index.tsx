import { FC } from "react";
import { AppButton } from "./index.styles";
import Spinner from "@/components/design-components/spinner";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent) => void;
  variat?: "primary" | "info" | "success" | "warning" | "danger" | "form";
  isLoading?: boolean;
}
const Button: FC<ButtonProps> = ({
  children,
  variat = "primary",
  isLoading = false,
  ...props
}) => {
  return (
    <AppButton $variat={variat} {...props}>
      {isLoading && <Spinner width="13px" height="13px" />}
      {children}
    </AppButton>
  );
};

export default Button;
