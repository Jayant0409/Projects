    import pictures from "../assets/pictures"
    export function Navbar(){
        return(
        <>
        <div className="container mx-auto my-4 w-[1280px] h-10 bg-white flex items-center justify-between  ">
        
            <img className="size-[72px]" src = {pictures.logo}
            alt="logo" />
            <ul className="flex gap-4">
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>

        </div>
        </>

        )
    }