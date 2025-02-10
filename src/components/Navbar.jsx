import { Menu, School } from "lucide-react";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import DarkMode from "@/DarkMode";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,

  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Logo from './../assets/logo.png'
import { Link } from "react-router-dom";


const Navbar = () => {
  const user = true;
 
  return (
    <div className="h-16 dark:bg-[#0A0A0A0A] duration-300 z-30 bg-white border-b dark:border-b-gray-800 border-b-gray-200 fixed top-0 right-0 left-0">
      <div className="max-w-7xl mx-auto hidden md:flex justify-between items-center gap-10 h-full">
        <div className="flex items-center gap-2">
         <img src={Logo}  width="5%" />
          <h1 className="hidden md:block font-extrabold text-2xl">
            PashuParni
          </h1>
        </div>
      <div>
        
      </div>

        <div className="flex items-center gap-8">
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Avatar>
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                    className="cursor-pointer"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem ><Link to="buyed-animals">Buyed animals</Link></DropdownMenuItem>
                  <DropdownMenuItem><Link to="profile">Edit Profile</Link></DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Log out</DropdownMenuItem>
                <DropdownMenuItem>Dashboard</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="flex items-center gap-2">
              <Button variant="outline">Login</Button>
              <Button>SignUp</Button>
            </div>
          )}

          <DarkMode/>
        </div>

      </div>
    <div className="flex md:hidden items-center justify-between px-4 h-full">
 <div className="flex items-center text-2xl gap-2">
 <img src={Logo}  width="10%" />
          <h1 className="md:block">
            PashuParni
          </h1>
 </div>
    <MobileNavBar/>
    </div>
      </div>
  );
};

export default Navbar;

const MobileNavBar = ()=>{
  const role = "instrutor";
  return(
    <Sheet>
    <SheetTrigger asChild>
      <Button size="icon" className="rounded-full bg-gray-200 hover:bg-gray-200" variant="outline"><Menu/></Button>
    </SheetTrigger>
    <SheetContent className="flex flex-col space-y-4">
      <SheetHeader className="flex flex-row items-center justify-between mt-2">
        <SheetTitle>PashuParni</SheetTitle>
        <DarkMode/>
      </SheetHeader>
      <nav className="flex flex-col space-y-4">
        <span>My Animals</span>
        <span>Edit Profile</span>
        <span>Logout</span>
      </nav>

      {
        role==="instrutor" &&(
          <SheetFooter>
        <SheetClose asChild>
          <Button type="submit">Dashboard</Button>
        </SheetClose>
      </SheetFooter>

        )
      }
      
    </SheetContent>
  </Sheet>
  )
}
