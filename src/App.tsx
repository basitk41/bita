import { FC } from "react";
import AppRoutes from "./routes";
import AuthProvider from "@/providers/authProvider";

const App: FC = () => {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
};

export default App;
