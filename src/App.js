import logo from './logo.svg';
import './App.css';
import Nav1 from './NTI Tech Academy Components/Navbar1 Com/Nav1';
import Nav2 from './NTI Tech Academy Components/Navbar2 Com/Nav2';
import HomePage from './NTI Tech Academy Components/Home View page Com/HomePage';
import AcademyDes from './NTI Tech Academy Components/AcademyDescription Com/AcademyDes';
import ComFac from './NTI Tech Academy Components/Company faculty Com/ComFac';
import AboutNti from './NTI Tech Academy Components/About NTI Com/AboutNti';
import CourseSec from './NTI Tech Academy Components/Course Section Com/CourseSec';
import ChooseUsSec from './NTI Tech Academy Components/Choose Us Section Com/ChooseUsSec';
import TeachersSection from './NTI Tech Academy Components/Teachers Section Com/TeachersSection';
import TestimonialsSection from './NTI Tech Academy Components/Testimonials Section Com/TestimonialsSection';
import CampusInfoSection from './NTI Tech Academy Components/Campus Info Section Com/CampusInfoSection';
import TopCourses from './NTI Tech Academy Components/Our Top Courses Com/TopCourses';
import Contact from './NTI Tech Academy Components/Contact Com/Contact';
import Footer from './NTI Tech Academy Components/Footer Com/Footer';

function App() {
  return (
    <>
      <Nav1 />
      <Nav2 />
      <HomePage />
      <AcademyDes />
      <ComFac />
      <AboutNti />
      <CourseSec />
      <ChooseUsSec />
      <TopCourses/>
      <TeachersSection />
      <TestimonialsSection />
      <CampusInfoSection />
      <Contact />
      <Footer/>
    </>
  );
}

export default App;
