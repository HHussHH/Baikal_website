//node
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

// components and others
import Footer from "./components/footer/Footer";
import Intro from "./components/intro/Intro";
import Header from "./components/header/Header.js";
import News from "./components/news/News";
import Home from "./page/Home";
import NeedHelpPage from "./page/NeedHelpPage";
import HowHelpPage from "./page/HowHelpPage";
import WeThankPage from "./page/WeThankPage";
import WeThankedPage from "./page/WeThankedPage";
import SmiAboutUsPage from "./page/SmiAboutUsPage";
import ContactsPage from "./page/ContactsPage";
import GiveHelpForm from "./forms/giveHelpForm/GiveHelpForm";
import ScrollToTop from "./utils/ScrollToTop";
import Project from "./components/project/Project";
import SoloNews from "./components/soloNewsPage/SoloNews";
import SoloReviews from "./components/soloReviewsPage/SoloReviews";
import SoloSmiNews from "./components/soloSmiPage/SoloSmiNews";
// Styles
import "./App.css";

function App() {
  const [soloProjectPage, setSoloProjectPage] = useState();
  const [soloNewsPage, setSoloNewsPage] = useState();
  const [idPeopleInNeedsHelp, setIdPeopleToNeedsHelp] = useState();
  const [idReviews, setIdidReviews] = useState();
  const [idSmiNews, setIdSmiNews] = useState();
  const [giveHelpForm, setGiveHelpForm] = useState(false);

  return (
    <div className="App">
      {giveHelpForm ? (
        <GiveHelpForm setForm={setGiveHelpForm} formState={giveHelpForm} />
      ) : null}
      <Router>
        <ScrollToTop />
        <Header setForm={setGiveHelpForm} formState={giveHelpForm} />
        <Intro />
        <Routes>
          <Route
            path="/"
            element={<Home setCurrentProjectId={setSoloProjectPage} />}
          />
          <Route
            path="/project/:id"
            element={<Project currentProjectId={soloProjectPage} />}
          />
          <Route
            path="/News/:id"
            element={<SoloNews currentNewsId={soloNewsPage} />}
          />
          <Route
            path="/HowHelp/:id"
            element={<HowHelpPage useId={idPeopleInNeedsHelp} />}
          />
          <Route
            path="/WeThanked/:id"
            element={<SoloReviews useId={idReviews} />}
          />
          <Route
            path="/SmiAboutUs/:id"
            element={<SoloSmiNews useId={idSmiNews} />}
          />
          <Route
            path="/NeedHelp"
            element={<NeedHelpPage getId={setIdPeopleToNeedsHelp} />}
          />
          <Route path="/HowHelp" element={<HowHelpPage />} />
          <Route path="/WeThank" element={<WeThankPage />} />
          <Route
            path="/WeThanked"
            element={<WeThankedPage setId={setIdidReviews} />}
          />
          <Route
            path="/SmiAboutUs"
            element={<SmiAboutUsPage getId={setIdSmiNews} />}
          />
          <Route path="/Contacts" element={<ContactsPage />} />
        </Routes>
        <News setCurrentNewsId={setSoloNewsPage} />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
