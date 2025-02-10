import { AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import React from "react";
import { Badge } from "@/components/ui/badge"


const AnimalsList = () => {
  return (
    <Card className="bg-white shadow-lg hover:shadow-2xl transistion-all duration-300 transform hover:scale-105 rounded-lg overflow-hidden dark:bg-gray-200">
      <div className="relative cursor-pointer">
        <img
          src="https://www.pashuprani.com/static/media/Buffalo.ca6f9391b3e7ca132c81.jpg"
          className="w-full h-36 object-cover rounded-t-lg"
          alt="Buffalo"
        />
      </div>
      <div>
        <CardContent className="px-5 py-4 space-y-4">
          <h1 className="hover:underline font-bold text-lg truncate text-center">
            Animal Details
          </h1>
         <div className="flex items-center justify-between">
         <div className="flex items-center justify-between gap-3">
            <Avatar>
              <AvatarImage
                src="https://github.com/shadcn.png"
                alt="@shadcn"
                className="cursor-pointer h-8 w-8"
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <h1 className="font-medium text-sm">Owner Name</h1>
          </div>
          <Badge className={'bg-blue-600 text-white px-1 py-1 text-xs rounded-full text-center'}>Location</Badge>
         </div>
         <div className="text-lg font-bold ">
            <span> ₹ 60000</span>
         </div>
        </CardContent>
      </div>
    </Card>



  );
};

export default AnimalsList;
