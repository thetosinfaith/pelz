import "./BookItem.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function BookItem({ title, image, isFree }) {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <div
      className="book-item"
      data-aos="fade-up"
      data-aos-duration="1500"
      data-aos-easing="ease-in-out"
    >
      <div className="book-cover">
        <img src={image || "/placeholder.svg"} alt={title} />
      </div>
      <h3 className="book-title">{title}</h3>
      {isFree && <p className="book-price">FREE</p>}
    </div>
  );
}

export default BookItem;
