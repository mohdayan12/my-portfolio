import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { TfiEmail } from "react-icons/tfi";
import { IoMdContact } from "react-icons/io";
import { SlLocationPin } from "react-icons/sl";
import { FiPhoneCall } from "react-icons/fi";
import { FaXTwitter, FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";
import { SlSocialInstagram } from "react-icons/sl";
import emailjs from "@emailjs/browser";
import ImageCon from '../../assets/contactImage.jpg';

const Contacts = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [errMsg, setErrMsg] = useState("");
    const [successMsg, setSuccessMsg] = useState("");
    const formRef = useRef();

    // ✅ Updated Email Validation: Allows domains like `.org`, `.co`, `.net` etc.
    const emailValidation = () => {
        return String(email).toLowerCase().match(/^\w+([-]?\w+)*@\w+([-]?\w+)*\.\w{2,}$/);
    };

    const handleSend = (e) => {
        e.preventDefault(); // Prevent form refresh

        if (username === "") {
            setErrMsg("Username is required");
        } else if (!emailValidation(email)) {
            setErrMsg("Enter a valid email");
        } else if (message === "") {
            setErrMsg("Message is required");
        } else {
            // ✅ Sending email using EmailJS
            emailjs.sendForm(
                "service_x42dcwo",  // Replace with your EmailJS Service ID
                "template_tdad1bq", // Replace with your EmailJS Template ID
                formRef.current,
                "gJ_qpVhxwOVYw8EDI"   // Replace with your EmailJS Public Key
            )
            .then(
                (result) => {
                    console.log("SUCCESS:", result.text);
                    setSuccessMsg("Your message has been sent successfully!");
                    setUsername("");
                    setEmail("");
                    setMessage("");
                    setErrMsg("");
                },
                (error) => {
                    console.error("ERROR:", error);
                    setErrMsg("Failed to send message. Try again later.");
                }
            );
        }
    };

    return (
        <div id="contact" className='w-full h-min-screen pt-16'>
            <div className='flex justify-center w-full'>
                <motion.h1 
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.5 }}
                    className='text-4xl text-white'>
                    Get In Touch
                </motion.h1>
            </div>

            <div className='flex flex-col lg:flex-row justify-center items-center lg:justify-center lg:items-start mt-10 mb-5'>
                {/* Contact Form */}
                <form ref={formRef} onSubmit={handleSend} className="lg:w-[45%] lg:mr-[2%] w-[90%] border-[1px] border-white bg-gradient-to-r from-black via-slate-800 to-black mb-5 lg:mb-0 rounded-md" style={{ boxShadow: '1px 1px 10px rgb(255,255,255)' }}>
                    <div className="flex flex-col items-center mt-4">
                        {/* Name Input */}
                        <div className="relative mt-10 w-4/5">
                            <IoMdContact className='absolute ml-3 h-12 pt-[4px] text-[20px] text-yellow-600'/>
                            <input name="username" onChange={(e) => setUsername(e.target.value)} value={username}
                                className={`pl-10 h-12 w-full mb-6 rounded-2xl outline-none hover:ring-1 ring-yellow-600 text-lg bg-slate-700 text-white`}
                                type="text" placeholder='Name' />
                        </div>
                        {/* Email Input */}
                        <div className="relative mt-10 w-4/5">
                            <TfiEmail className='absolute ml-3 h-12 pt-[4px] text-[18px] text-yellow-600'/>
                            <input name="email" onChange={(e) => setEmail(e.target.value)} value={email}
                                className={`pl-10 h-12 w-full mb-6 rounded-2xl outline-none hover:ring-1 ring-yellow-600 text-lg bg-slate-700 text-white`}
                                type="email" placeholder='Email' />
                        </div>
                        {/* Message Input */}
                        <div className='w-4/5 my-10'>
                            <textarea name="message" onChange={(e) => setMessage(e.target.value)} value={message}
                                placeholder="Message" className="w-full h-40 rounded-2xl outline-none hover:ring-1 ring-yellow-600 px-2 pt-2 text-lg bg-slate-700 text-white"></textarea>
                        </div>
                        {/* Send Button */}
                        <button type="submit" className="h-12 w-4/5 bg-yellow-600 text-white text-xl font-semibold tracking-wide rounded-2xl">Send Me</button>
                        {/* Error/Success Messages */}
                        <div className='h-10 w-full'>
                            {errMsg && (<p className="text-red-500 text-2xl text-center pt-1 animate-bounce">{errMsg}</p>)}
                            {successMsg && (<p className="text-green-500 text-2xl text-center pt-1 animate-bounce">{successMsg}</p>)}
                        </div>
                    </div>
                </form>

                {/* Contact Info */}
                <div className="lg:w-[45%] w-[90%] border-[1px] border-white rounded-md bg-gradient-to-r from-black via-slate-800 to-black" style={{ boxShadow: '1px 1px 10px rgb(255,255,255)' }}>
                    <div className='lg:h-52 h-32 w-full flex justify-center items-center mt-5'>
                        <img className="lg:h-52 w-[90%] h-32 rounded-sm" src={ImageCon} alt="Contact" />
                    </div>
                    <div className="mt-6 w-[90%] mx-9 text-base font-thin text-white tracking-wider">
                        If you have any queries or ideas, feel free to send me a message anytime.
                    </div>
                    <div className='relative'>
                        <div className='mt-6 ml-12 text-white font-thin tracking-wider'>
                            <p><TfiEmail className="text-2xl text-yellow-600"/> mohdayanmalik7@gmail.com</p>
                            <p><FiPhoneCall className='text-2xl text-yellow-600'/> +91 8476971464</p>
                            <p><SlLocationPin className="text-2xl text-yellow-600"/> Pilibhit, India</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contacts;

