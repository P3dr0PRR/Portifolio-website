import { Router } from "./Router";
import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { CanvasGalaxy } from "./components/CanvasGalaxy";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <CanvasGalaxy />

      <div className="relative min-h-screen text-gray-100">
        <Header />

        <main className="flex justify-center">
          <div className="w-full max-w-6xl px-6">
            <Router />
          </div>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
