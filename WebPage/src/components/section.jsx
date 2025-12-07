import { images } from "../assets/images";
import { Button } from "./button";
import { Navbar } from "./navbar";


export function Section(){

    return(
        <>
                
        <div className="w-full"> 
            <Navbar/> 
        <div className="flex h-[100vh] overflow-y-hidden items-center justify-center mx-15 bg-gray-100">
        <div >
            <div className="text-black w-[595px] mb-4 font-bold text-8xl/[102px] ">YOUR FEET DESERVE THE BEST</div>
            <div className="w-[404px] h-[92px] mb-2 ">
             <p className="text-[#5A5959] text-4">YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
            </div>

               <div className="flex gap-[40px] mb-3">
             <Button text="Shop now"/>
             <Button text="Category"/>
               </div>

               <div className="w-[131px] h-[67px] mt-6">
                <p className="w-[131px] h-[19px] mb-2 text-[14px]">Also Available On</p>
                <div className="flex gap-2 ">
                    <img className="size-[32px]" src={images.flipkart} alt="" />
                    <img className="size-[32px]"  src={images.amazon} alt="" />
                </div>
               </div>   
        </div>

          <div className="w-[530px] h-[487px]">
           
            <img src={images.shoes} alt="" />
        </div>
        </div>
       </div> 

        </>
                 
                 

    )
}