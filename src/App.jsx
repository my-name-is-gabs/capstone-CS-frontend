import { useLayoutEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Navigation } from "./components";
import {
  Home,
  About,
  Guidelines,
  StartingPage,
  RetrieveApp,
  StartApp,
  Monitor,
} from "./pages";
import BaseForm from "./forms/BaseForm";

function App() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Navigation />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/:message" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/guidelines" element={<Guidelines />} />
        <Route path="/startscholar" element={<StartingPage />} />
        <Route path="/startapp" element={<StartApp />} />
        <Route path="/retrieve" element={<RetrieveApp />} />
        <Route path="/monitor" element={<Monitor />} />
        <Route path="/forms" element={<BaseForm />} />
      </Routes>
      <footer className="footer">
        <p className="text-end fw-bold fs-5 me-5">©DEVGROUP 2023</p>
      </footer>
    </>
  );
}

export default App;
