import React from "react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { AvatarFallback } from "@/components/ui/avatar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Loader2 } from "lucide-react";
import AnimalsList from "./AnimalsList";
import { useLoadUserQuery } from "@/features/api/authApi";


const Profile = () => {

  const {data,isLoading} = useLoadUserQuery(); 
  
  const purchased_animals = [1];

  if(!isLoading) return <h1>Profile Loading...</h1>;
  const user =  data;
  
  return (
    <div className="max-w-4xl mx-auto my-24 px-4">
      <h1 className="font-bold text-2xl text-center md:text-left">Profile</h1>
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 my-5">
        <div className="flex flex-col items-center">
          <Avatar className="h-24 w-24 md:h-32 md:w-32 ">
            <AvatarImage
              // src={user.photoUrl || "https://github.com/shadcn.png"}
              alt="@shadcn"
              className=""
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
        <div>
          <div className="mb-2">
            <h1 className="font-semibold text-gray-900 dark:text-gray-100">
              Name:-
              <span className="font-normal text-gray-700 dark:text-gray-300 ml-2">
                {user.name}
              </span>
            </h1>
          </div>
          <div className="mb-2">
            <h1 className="font-semibold text-gray-900 dark:text-gray-100">
              Email:-
              <span className="font-normal text-gray-700 dark:text-gray-300 ml-2">
                Demo@gmail.com
              </span>
            </h1>
          </div>
          <div className="mb-2">
            <h1 className="font-semibold text-gray-900 dark:text-gray-100">
              Role:-
              <span className="font-normal text-gray-700 dark:text-gray-300 ml-2">
                Buyer \ Seller
              </span>
            </h1>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button size="sm" className="mt-2">
                Edit Profile
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Edit Profile</DialogTitle>
                <DialogDescription>
                  Make Changed to your profile here. Click save when you are
                  done.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label>Name</Label>
                  <Input
                    type="text"
                    placeholder="Please enter your name"
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label>Profile Photo</Label>
                  <Input type="file" accept="image/*" className="col-span-3" />
                </div>
              </div>
              <DialogFooter>
                <Button disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Please wait
                    </>
                  ) : (
                    "Save Changes"
                  )}
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <div>
        <h1 className="font-medium text-lg">Animals Purchased History</h1>
        <div className="grid grid-cols-1 sd:grid-cols-2 md:grid-cols-3 gap-4 my-5">
          {purchased_animals.length === 0 ? (
            <h1> Your Haven't purchased any animals yet</h1>
          ) : (
            purchased_animals.map((animal, index) => (
              <AnimalsList key={index} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
