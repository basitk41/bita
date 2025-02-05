import { FC } from "react";
import AppRoutes from "./routes";
import ContextProvider from "@/providers";
import { QueryClient, QueryClientProvider } from "react-query";

const App: FC = () => {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <ContextProvider>
        <AppRoutes />
      </ContextProvider>
    </QueryClientProvider>
  );
};

export default App;
