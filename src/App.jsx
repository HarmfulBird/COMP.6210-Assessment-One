import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useParams,
  ScrollRestoration,
} from "react-router-dom";
import FrontPage from "./components/FrontPage";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import ScrollToTop from "./components/ScrollToTop";

function MainContentWrapper() {
  const { subject } = useParams();
  return <MainContent subject={subject} />;
}

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/scp/:subject" element={<MainContentWrapper />} />
          <Route path="/" element={<FrontPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
