import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './Data';
function App(){
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);
  useEffect(() =>{
    const lastIndex = people.length - 1;   // 3
    if (index < 0){
      setIndex(lastIndex);
    }
    if (index > lastIndex){
      setIndex(0);
    }
  }, [index, people]);
  useEffect(() =>{
    let slider = setInterval(() =>{
      setIndex(index + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);
  return(
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span>reviews
        </h2>
      </div>
      <div className="section-center">
        {people.map((person, personIndex) =>{
          console.log("PersonIndex: ", personIndex);
          const { id, image, name, title, quote} = person;
          let position = 'nextSlide';
          if(personIndex === index){
            position = 'activeSlide';
            console.log("Active Slide");
          }
          if(
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          ){
            position = 'lastSlide';
            console.log("LastSlide");
          }
          return(
            <article className={position} key={id}>
              <img src={image} alt={name} className="person-img"/>
              {/* <h4>{id}</h4> */}
              <h4>{name}</h4>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
              <FaQuoteRight className="icon"/>
            </article>
          );
        })}
        <button className="prev" onClick={() => setIndex(index - 1)}>
          <FiChevronLeft/>
        </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
          <FiChevronRight/>
        </button>
      </div>
    </section>
  );
}
export default App;
