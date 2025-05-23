import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import ProjectDetails from "./pages/ProjectDetails";
import Contact from "./pages/Contact";
import HomeFour from "./pages/HomeFour";
import HomeOne from "./pages/HomeOne";
import HomeThree from "./pages/HomeThree";
import HomeTwo from "./pages/HomeTwo";
import Service from "./pages/Service";
import ServiceDetails from "./pages/ServiceDetails";
import Team from "./pages/Team";
import TeamDetails from "./pages/TeamDetails";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import ScrollToTop from "react-scroll-to-top";
import HomeFive from "./pages/HomeFive";
import HomeSix from "./pages/HomeSix";
import HomeSeven from "./pages/HomeSeven";
import HomeEight from "./pages/HomeEight";
import HomeNine from "./pages/HomeNine";
import HomeTen from "./pages/HomeTen";
import ServiceTwo from "./pages/ServiceTwo";
import ServiceThree from "./pages/ServiceThree";
import ServiceFour from "./pages/ServiceFour";
import ServiceFive from "./pages/ServiceFive";
import TeamTwo from "./pages/TeamTwo";
import TeamThree from "./pages/TeamThree";
import PriceOne from "./pages/PriceOne";
import PriceTwo from "./pages/PriceTwo";
import BlogTwo from "./pages/BlogTwo";
import BlogThree from "./pages/BlogThree";
import BlogFour from "./pages/BlogFour";
import Project from "./pages/Project";
import ProjectTwo from "./pages/ProjectTwo";
import ProjectThree from "./pages/ProjectThree";
import HomeEleven from "./pages/HomeEleven";
import { AuthProvider } from "./components/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Chatbot from "./pages/ChatBot";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";

function App() {
  useEffect(() => {
    AOS.init({
      offset: 0,
      easing: "ease",
      once: true,
    });
    AOS.refresh();
  }, []);
  return (
    <I18nextProvider i18n={i18n}>
      {" "}
      <AuthProvider>
        <Chatbot />
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<HomeOne />} />
            <Route exact path="/business-factoring" element={<HomeTwo />} />
            <Route exact path="/partner-factoring" element={<HomeThree />} />
            <Route exact path="/index-4" element={<HomeFour />} />
            <Route exact path="/index-5" element={<HomeFive />} />
            <Route exact path="/index-6" element={<HomeSix />} />
            <Route exact path="/index-7" element={<HomeSeven />} />
            <Route exact path="/index-8" element={<HomeEight />} />
            <Route exact path="/index-9" element={<HomeNine />} />
            <Route exact path="/index-10" element={<HomeTen />} />
            <Route exact path="/index-11" element={<HomeEleven />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/blog" element={<Blog />} />
            <Route exact path="/blog-2" element={<BlogTwo />} />
            <Route exact path="/blog-3" element={<BlogThree />} />
            <Route exact path="/blog-4" element={<BlogFour />} />
            <Route exact path="/about-us" element={<BlogDetails />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/vacancies" element={<Service />} />
            <Route exact path="/service-2" element={<ServiceTwo />} />
            <Route exact path="/service-3" element={<ServiceThree />} />
            <Route exact path="/service-4" element={<ServiceFour />} />
            <Route exact path="/service-5" element={<ServiceFive />} />
            <Route exact path="/service-details" element={<ServiceDetails />} />
            <Route exact path="/team" element={<Team />} />
            <Route exact path="/team-details" element={<TeamDetails />} />
            <Route exact path="/team-2" element={<TeamTwo />} />
            <Route exact path="/team-3" element={<TeamThree />} />
            <Route exact path="/pricing" element={<PriceOne />} />
            <Route exact path="/pricing-2" element={<PriceTwo />} />
            <Route exact path="/project" element={<Project />} />
            <Route exact path="/project-2" element={<ProjectTwo />} />
            <Route exact path="/project-3" element={<ProjectThree />} />
            <Route exact path="/chatbot" element={<Chatbot />} />
            <Route exact path="/leasing" element={<ProjectDetails />} />

            {/* <Route
              exact
              path="/leasing"
              element={<ProtectedRoute element={ProjectDetails} />}
            /> */}
          </Routes>
          <ScrollToTop smooth color="#01B2C9" />
        </BrowserRouter>
      </AuthProvider>
    </I18nextProvider>
  );
}

export default App;
