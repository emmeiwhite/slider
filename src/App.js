import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import data from "./data";
function App() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState();
  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span> Reviews
        </h2>
      </div>

      <div className="section-center">
        {people.map((person, personIndex) => {
          const { id, title, image, quote, name } = person;

          return (
            <article key={id}>
              <img src={image} alt="person" className="person-img" />
              <h4>{name}</h4>
              <p className="title">{title}</p>
              <p className="quote">{quote}</p>
              <FaQuoteRight className="icon" />
            </article>
          );
        })}

        <button className="prev">
          <FiChevronLeft />
        </button>

        <button className="next">
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}

export default App;
