import { Spinner } from "./index.styles";
import { ISpinnerProps } from "@/types";

const LoadingSpinner: React.FC<ISpinnerProps> = ({
  color = "#fff",
  width = "40px",
  height = "40px",
}) => {
  return <Spinner $color={color} $width={width} $height={height} />;
};

export default LoadingSpinner;
