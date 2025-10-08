import React from 'react'
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';


const Contact = () => {
    const [result, setResult] = React.useState("");
    console.log(result)

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        console.log(result)
        const formData = new FormData(event.target);

        formData.append("access_key", "cec631e0-6691-4def-8f91-690c6962ac4c");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("");
            console.log(result)
           toast.success("Form Submitted Successfully")     // toastify notification
            event.target.reset();
        } else {
            console.log("Error", data);
            toast.error(data.message)                 // tostify notification
            setResult("");
        }
    };


    return (
        <motion.div
        initial = {{opacity:0, x:-200}}
       transition = {{duration: 1}}
       whileInView = {{opacity:1, x:0}}
       viewport = {{once: true}}

        className='text-center py-20 lg:32 w-full overflow-hidden mx-auto' id='Contact'>
            <h1 className='text-2xl sm:text-4xl font-bold  mb-2 text-center '>Contact  <span className='font-light underline underline-offset-4 decoration-1'>With Us</span></h1>

            <p className='text-center text-gray-500 mb-12 max-w-80 mx-auto'>Ready to Make a Move? Let's Build  Your Future Together</p>
                 
                 {/* --------- form submit ----------- */}
            <form onSubmit={onSubmit} className='max-w-2xl mx-auto text-gray-600 pt-8'>
                <div className='flex flex-wrap'>
                    <div className='w-full md:w-1/2 text-left'>
                        Your Name
                        <input type="text" placeholder='Your Name' name='Name' required className='w-full border border-gray-300 rounded py-3 px-4 mt-2' />
                    </div>
                    <div className='w-full md:w-1/2 text-left md:pl-4'>
                        Your Email
                        <input type="text" placeholder='Your Email' name='Email' required className='w-full border border-gray-300 rounded py-3 px-4 mt-2' />
                    </div>
                </div>

                <div className='text-left my-8'>
                    Message
                    <textarea className='w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none'
                        name="Message" placeholder='Message' required ></textarea>

                    {/*---------- email notification ------------ */}

                    <button className='bg-blue-600 text-white py-2 px-12 mb-10 rounded'>
                        {result ? result : "Send Message"}
                    </button>
                </div>
            </form>


        </motion.div>
    )
}

export default Contact