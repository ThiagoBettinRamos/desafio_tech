import { AxiosInterceptor } from "./components/AxiosInterceptor";
import { AuthProvider } from "./providers/AuthProvider";
import { RoutesMain } from "./routes";
import GlobalStyles from "./styles/GlobalStyles"

function App() {
  return (
    <>
      <GlobalStyles />
      <AxiosInterceptor>
        <AuthProvider>
          <RoutesMain />
        </AuthProvider>
      </AxiosInterceptor>
    </>
  );
}

export default App;