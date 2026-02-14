import { Router } from "./Router";
import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <main className="flex justify-center bg-blue-300">
  <div className="w-full max-w-6xl px-6">
    <Router />
  </div>
</main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
