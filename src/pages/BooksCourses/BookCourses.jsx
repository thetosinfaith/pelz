import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../../components/Footer/Footer";
import "./BooksCourses.css";
import Library from "../../components/Library/Library";
import Header from '../../components/Header/Header'

const BooksCourses = () => {
  useEffect(() => {
    window.scrollTo(0, 0);

    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <Header/>
      <Library />
      <Footer />
    </>
  );
};

export default BooksCourses;
