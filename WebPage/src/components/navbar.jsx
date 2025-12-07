import { images } from "../assets/images";
import { Button } from "./button";
export function Navbar(){

    return(
    <div className="top-0 left-0 fixed  flex justify-between bg-transparent w-full px-8 my-8">

        <img className= "w-[76px] h-[42px]" src={images.nike} alt="" />

        <div className="flex h-[24px] w-[333px] gap-[24px] hover:cursor-pointer">
            <ul>Menu</ul>
            <ul>Location</ul>
            <ul>Status</ul>
            <ul>About</ul>
        </div>
       <Button text="Login"/>
    </div>
    )
}