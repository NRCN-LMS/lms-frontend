import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from 'react'

const HeroSection = () => {
    return (
        <div className="relative bg-gradient-to-r from-blue-500 to bg-indigo-600 dark:from-gray-800 dark:to-gray-800 py-16 px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-white text-4xl font-bold mb-4">
              Find the Best Animal for you
            </h1>
            <p className="text-gray-200 dark:text-gray-400 mb-8">
              Join us in giving animals the loving homes they deserve. Whether
              you're looking to adopt, buy, or find services for your pets,
              PashuPrani is your one-stop destination for everything animals.
            </p>
            <form action="" className="flex items-center bg-white dark:bg-gray-800 rounded-full shadow-lg overflow-hidden max-w-xl mx-auto">
              <Input
                type="text"
                className="flex-grow border-none focus-within:ring-0 px-6 py-3 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500" 
              />
           <Button className="bg-blue-600 dark:bg-blue-700 text-white px-6 py-3 rounded-r-full hover:bg-blue-700 dark:hover:bg-blue-800">
            Search
           </Button>
            
            </form>
            <Button className="bg-white mt-3 dark:bg-gray-800 text-blue-600  rounded-full hover:bg-gray-200">Explore animals</Button>
          </div>
        </div>
      );

    }


export default HeroSection
