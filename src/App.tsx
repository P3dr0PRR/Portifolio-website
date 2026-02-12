import { Router } from "./Router";
import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/Header";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
        <main>
          <Router />
        </main>
    </BrowserRouter>
  );
};
   

export default App;
