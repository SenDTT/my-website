import { Link, Outlet } from "react-router-dom";
import { FaArrowLeft, FaRegCopyright } from "react-icons/fa6";

export default function LayoutWithoutFooter() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-light-bg to-light-bg text-white font-mono">
            <div className="min-h-full flex flex-col">
                <nav className="bg-light-bg fixed top-0 left-0 right-0 z-50 shadow-md">
                    <div className="flex justify-left items-left sm:px-0 px-4 py-4 max-w-7xl mx-auto">
                        {/* Centered name and icon */}
                        <div className="flex items-left justify-left flex-grow">
                            <Link to="/" className="flex items-left justify-left flex-grow">
                                <FaArrowLeft className="size-6 text-light-logo dark:text-dark-logo" />
                            </Link>
                        </div>

                    </div>
                    <div className=" bg-dark-bg/80 my-progress-bar"></div>
                </nav>

                <div className="mt-16 sm:mt-20">
                    <Outlet />
                </div>

                <footer className="py-4 md:py-6 bg-light-bg text-dark-bg shadow-md mt-4">
                    <div className="max-w-7xl mx-auto px-4 flex justify-center items-center gap-4 md:gap-0 text-center md:text-left">
                        {/* Copyright Text */}
                        <p className="text-xs md:text-sm flex items-center gap-1 text-light-logo dark:text-dark-logo ">
                            <FaRegCopyright className="inline-block size-3" /> {new Date().getFullYear()} Sen Doan
                        </p>
                    </div>
                </footer>
            </div>
        </div>
    );
}