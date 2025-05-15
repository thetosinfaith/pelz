import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./layouts/Homepage/Homepage";
import Home from "./pages/Home/Home";
import Booking from "./pages/Booking/Booking";
import FAQPage from "./pages/FAQPage/FAQPage";
import ContactUs from "./pages/ContactUs/ContactUs";
import AboutUs from "./pages/AboutUs/AboutUs";
import Blog from "./pages/Blog/Blog";
import Speaking from "./pages/Speaking/Speaking";
import About from "./pages/About/About";
import BooksCourses from "./pages/BooksCourses/BookCourses";

const router = createBrowserRouter([
  { path: "/services", element: <AboutUs /> },
  { path: "/", element: <Homepage /> },
  { path: "/home", element: <Home /> },
  { path: "/booking", element: <Booking /> },
  { path: "/faq", element: <FAQPage /> },
  { path: "/contact-us", element: <ContactUs /> },
  { path: "Speaking", element: <Speaking /> },
  { path: "blog", element: <Blog /> },
  { path: "about", element: <About /> },
  {path: "books", element: <BooksCourses/>}
  
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
