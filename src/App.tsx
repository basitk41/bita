import { FC } from "react";
import AppRoutes from "./routes";
import ContextProvider from "@/providers";

const App: FC = () => {
  return (
    <ContextProvider>
      <AppRoutes />
    </ContextProvider>
  );
};

export default App;
