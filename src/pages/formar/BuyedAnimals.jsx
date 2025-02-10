import React from 'react'

import AnimalsList from './AnimalsList';

const BuyedAnimals = () => {
    const isLoading= false;
    const buyedAnimals = [];

  return (
    <div className="max-w-4xl mx-auto my-24 px-4 md:px-0">
        <h1 className="font-bold text-2xl ">Buyed Animals</h1>
        <div className="my-5">
            {
                isLoading ? (
                    <MyAnimalSkeleton/>
                ):(
                    buyedAnimals.lenght===0?(
                        <p>Your Not Buyed Any Animals.</p>
                    ):(
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                         <AnimalsList/>
                          </div>
                       
                    )
                )
            }

        </div>
      
    </div>
  )
}

export default BuyedAnimals

const MyAnimalSkeleton = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {[...Array(3)].map((_, index) => (
        <div
          key={index}
          className="bg-gray-300 dark:bg-gray-700 rounded-lg h-40 animate-pulse"
        ></div>
      ))}
    </div>
  );
