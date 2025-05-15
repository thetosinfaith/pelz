import "./BookCollection.css";
import BookItem from "../../components/BookItem/BookItem";
import Book1 from "../../assets/sexbook1.png";
import Book2 from "../../assets/sexbook2.png";
import Book3 from "../../assets/sexbook3.png";
import Book4 from "../../assets/sexbook4.png";
import Book5 from "../../assets/sexbook5.png";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function BookCollection() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  const books = [
    {
      id: 1,
      title: "Personalised Pleasure Coaching",
      image: Book1,
      isFree: true,
      link: "tom.com"

    },
    {
      id: 2,
      title: "Sex Education for Parents/Teachers",
      image: Book2,
      isFree: true,
      link: "ts.com"
    },
    {
      id: 3,
      title: "Speaking engagements and Trainings",
      image: Book3,
      isFree: true,
      link: "ts.com"

    },
    {
      id: 4,
      title: "Let's Talk Sex",
      image: Book4,
      isFree: false,
      link: "ts.com"

    },
    {
      id: 5,
      title: "Women's Pleasure Workbook",
      image: Book5,
      isFree: false,
      link: "ts.com"

    },
  ];

  return (
    <div
      className="book-collection-container"
      data-aos="fade-up"
      data-aos-duration="1500"
      data-aos-easing="ease-in-out"
    >
     <div className="books-grid">
  {books.map((book, index) => (
    <div
      key={book.id}
      data-aos="zoom-in-up"
      data-aos-duration="1500"
      data-aos-delay={index * 150}
    >
      <a
        href={book.link}
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <BookItem
          title={book.title}
          image={book.image}
          isFree={book.isFree}
        />
      </a>
    </div>
  ))}

      </div>
    </div>
  );
}

export default BookCollection;
