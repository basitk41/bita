import { Spinner } from "./index.styles";

interface ILoadingSpinnerProps {
  color?: string;
  width?: string;
  height?: string;
}
const LoadingSpinner: React.FC<ILoadingSpinnerProps> = ({
  color = "#fff",
  width = "40px",
  height = "40px",
}) => {
  return <Spinner $color={color} $width={width} $height={height} />;
};

export default LoadingSpinner;
