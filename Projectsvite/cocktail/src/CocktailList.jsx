import React, { useContext } from 'react';
import { AppContext } from './Context';
import { Link } from 'react-router-dom';
export default function CocktailList(){
  const { cocktail, loading } = useContext(AppContext);
  if (loading){
    return <div className='loading'><div className='lod'></div></div>;
  }
  if (cocktail.length < 1){
    return(
      <h1 className='text-center text-2xl mt-10'>
        No cocktails matched your search criteria
      </h1>
    );
  }
  return(
    <section className='w-[80%] m-auto mt-10'>
      <h1 className='text-4xl font-bold text-center mb-8'>Cocktails</h1>
      <div className='w-full flex justify-center items-center flex-wrap gap-8'>
        {cocktail.map((item) => {
          const { image, id, glass, name, alcoholic } = item;
          return(
            <div
              key={id}
              className='w-full sm:w-[45%] md:w-[30%] lg:w-[22%] bg-white shadow-lg rounded-lg overflow-hidden transition transform hover:scale-105'
            >
              <img src={image} alt={name} className='w-full h-48 object-cover' />
              <div className='p-4'>
                <p className='text-xl font-semibold'>{name}</p>
                <p className='text-gray-600'>{glass}</p>
                <p className='text-gray-600'>{alcoholic}</p>
                <Link to={`/cocktail/${id}`}>
                <button className='w-[100px] mt-6 bg-green-400 rounded-md cursor-pointer p-2 '>Details</button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
