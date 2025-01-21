import React, { useState, useEffect } from "react";
import pageLogo from "./../assets/images/png/header-logo.png";
import { SearchIcon } from "../utils/icons";

const Header = () => {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (open && window.innerWidth < 1024) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);


    const handleOpen = () => {
        setOpen(!open);
    };

    return (
        <div className="flex justify-between items-center shadow-custom-1 mt-2.5 mb-[17px] w-full max-w-[1128px] mx-auto rounded-[20px] overflow-hidden py-2.5 pe-3 xl:ps-[38px] lg:ps-6 sm:ps-4 ps-3">
            <button onClick={handleOpen} className={`hidden size-7 justify-center max-lg:absolute max-lg:right-4 relative z-[70] max-lg:flex flex-col overflow-hidden`}>
                <span className={`w-6 transition-all duration-300 min-h-[2px] max-h-[2px] mb-1 bg-black relative after:w-full after:h-full  after:absolute after:top-0 after:left-0 ${open ? "rotate-45 after:rotate-90 after:bg-black !bg-black" : ""}`}></span>
                <span className={`w-6 transition-all duration-300 min-h-[2px] max-h-[2px] mb-1 bg-black ${open ? "hidden" : ""}`}></span>
                <span className={`w-6 transition-all duration-300 min-h-[2px] max-h-[2px] mb-1 bg-black after:!bg-black ${open ? "-translate-x-10 !bg-black" : ""}`}></span>
            </button>
            <a href="/">
                <img className="xl:max-w-[135px] lg:max-w-28 max-w-24 max-h-[88px]" src={pageLogo} alt="page-logo" />
            </a>
            <div className={`flex xl:gap-[30px] max-lg:px-4 bg-white relative w-full mx-auto justify-center lg:gap-7 gap-6 !text-black lg:max-h-max max-lg:fixed max-lg:top-0 max-lg:h-full max-lg:w-full max-lg:flex-col max-lg:bg-hero-pattern max-lg:duration-300 max-lg:justify-center max-lg:items-center z-[60] ${open ? "max-lg:left-0" : "max-lg:left-full"}`}>
                <div className="w-full xl:max-w-[650px] lg:max-w-lg md:max-w-md flex justify-between items-center ps-[30px] py-1.5 pe-[7px] border border-off-white rounded-full">
                    <input className="pe-6 outline-none w-full lg:block max-lg:hidden bg-transparent max-h-max lg:placeholder:text-sm placeholder:text-xs placeholder:text-light-brown" type="text" placeholder="What do you feel like listening to right now ?" />
                    <input className="pe-4 outline-none max-w-[328px] w-full lg:hidden max-lg:block bg-transparent max-h-max lg:placeholder:text-sm placeholder:text-xs placeholder:text-light-brown" type="text" placeholder="Search..." />
                    <div className="bg-black lg:min-w-[39px] min-w-8 lg:min-h-[39px] min-h-8 cursor-pointer justify-center items-center flex rounded-full">
                        <SearchIcon />
                    </div>
                </div>
                <div className="lg:hidden max-lg:block">
                <div className="gap-4 flex">
                    <button className="text-black font-medium transition-all duration-300 ease-linear hover:bg-black hover:text-white px-6 py-[9px] rounded-[9px]">Login</button>
                    <button className="bg-black text-white px-6 py-[9px] whitespace-nowrap rounded-[9px] hover:text-black hover:bg-transparent font-medium transition-all duration-300 ease-linear">Sign Up</button>
                </div>
                </div>
            </div>
            <div className="lg:block max-lg:hidden ">
                <div className="gap-4 flex">
                    <button className="text-black font-medium transition-all duration-300 ease-linear hover:bg-black hover:text-white px-6 py-[9px] rounded-[9px]">Login</button>
                    <button className="bg-black text-white px-[22px] py-[9.5px] whitespace-nowrap rounded-[9px] hover:text-black hover:bg-transparent font-medium transition-all duration-300 ease-linear">Sign Up</button>
                </div>
            </div>
        </div>
    );
};

export default Header;
