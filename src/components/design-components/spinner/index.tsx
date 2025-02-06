import { Spinner } from "./index.styles";

interface ILoadingSpinnerProps {
  color?: string;
}
const LoadingSpinner: React.FC<ILoadingSpinnerProps> = ({ color = "#fff" }) => {
  return <Spinner $color={color} />;
};

export default LoadingSpinner;
