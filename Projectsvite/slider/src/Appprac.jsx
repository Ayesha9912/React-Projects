import React, { useEffect, useState } from 'react';
import data from './Data'
import { FaQuoteRight } from 'react-icons/fa';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

function Appprac(){
    const [people, setpeople] = useState(data)
    const [index, setindex] = useState(0)
    useEffect(() =>{
        const lastIndex = people.length -1
        if(index < 0){
            setindex(lastIndex)
        }
        if(index > lastIndex){
            setindex(0)
        }
    }, [index , people])
    useEffect(()=>{
        let slider = setInterval(()=>{
         setindex(index + 1)
        }, 5000)
        return ()=>{
            clearInterval(slider)
        }
    }, [index])
    return(
        <div>
            <section className='section'>
                <div className='title'>
                    <h2>
                        <span>/</span>Reviews
                    </h2>
                </div>
                <div className='section-center'>
                    {people.map((person, personIndex)=>{
                        const { id, image,name, title, quote} = person
                        let position = 'nextSlide';
                        if(personIndex === index){
                            position = 'activeSlide'
                        }
                        if(personIndex === index + 1 || 
                        (index === 0 && personIndex === people.length -1)
                        ){
                            position = 'lastslide'
                        }
                        return(
                            <article className={position} key={id}>
                                <img src={image} alt={title} className='person-img'/>
                                <h4>{name}</h4>
                                <p className='title'>{title}</p>
                                <p className='text'>{quote}</p>
                                <FaQuoteRight className='icon'/>
                            </article>
                        )
                    })}
                    <button className='prev' onClick={() => setindex(index - 1)}><FiChevronLeft/></button>
                    <button className='next' onClick={() => setindex(index + 1)}><FiChevronRight/></button>
                </div>
            </section>
        </div>
    )
}
export default Appprac