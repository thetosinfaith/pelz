import "./Library.css";
import BookCollection from "../../components/BookCollection/BookCollection";
import AOS from "aos";
import "aos/dist/aos.css";

function Library() {
  AOS.init();

  return (
    <div
      className="library-container"
      data-aos="fade-up"
      data-aos-duration="1500"
      data-aos-easing="ease-in-out"
    >
      <div
        className="library-content"
        data-aos="fade-right"
        data-aos-duration="1500"
        data-aos-delay="300"
      >
        <h1 className="library-h1">My Books</h1>

        <blockquote className="library-quote">
          If you find reading dull, it's likely because you haven't explored a
          book by OAK.
        </blockquote>

        <p className="welcome-text">
          Welcome to a bouquet of wisdom, intellectualism, and exceptional
          living.
        </p>
      </div>
      <div data-aos="fade-up" data-aos-duration="1500" data-aos-delay="500">
        <BookCollection />
      </div>
    </div>
  );
}

export default Library;
