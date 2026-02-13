import { Router } from "./Router";
import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Router />
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
