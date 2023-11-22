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
  MonitorApp,
} from "./pages";
import BaseForm from "./forms/BaseForm";
import RetrieveBaseForm from "./retrieveForms/RetrieveBaseForm";
import Login from "./client/login/Login";
import ClientLandingPage from "./client/home/ClientLandingPage";
import PrivateRouting from "./utils/PrivateRouting";
import FormProtectedRoute from "./utils/FormProtectedRoute";
import ReviewAndProcess from "./pages/Review/ReviewAndProcess";
import PageNotFound from "./PageNotFound";
import MonitorRoute from "./utils/MonitorRoute";

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
        {/* <Route path="/:message" element={<Home />} /> */}
        <Route path="/about" element={<About />} />
        <Route path="/guidelines" element={<Guidelines />} />
        <Route path="/startscholar" element={<StartingPage />} />
        {/* <Route path="/forms" element={<BaseForm />} /> */}
        <Route element={<FormProtectedRoute />}>
          <Route path="/startapp" element={<StartApp />} />
          <Route path="/forms" element={<BaseForm />} />
          <Route
            path="/review_and_process/:id"
            element={<ReviewAndProcess />}
          />
        </Route>
        {/* Retrieve routing */}
        <Route path="/retrieve" element={<RetrieveApp />} />
        <Route element={<FormProtectedRoute />}>
          <Route path="/retrieveForm" element={<RetrieveBaseForm />} />
        </Route>
        {/* Monitor Routing */}
        <Route path="/monitor" element={<Monitor />} />
        <Route element={<MonitorRoute />}>
          <Route path="/monitor/:id" element={<MonitorApp />} />
        </Route>

        <Route path="/login" element={<Login />} />
        {/* private routing in reactjs */}
        <Route element={<PrivateRouting />}>
          <Route exact path="/scholar" element={<ClientLandingPage />} />
        </Route>
        {/* <Route path="/testing" element={<SurveyPage />} /> */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
