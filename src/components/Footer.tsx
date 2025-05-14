import { FaRegCopyright } from "react-icons/fa6";

export default function Footer() {
    return (
        <footer
            className="py-4 md:py-6 bg-dark-contactBg dark:bg-light-contactBg text-light-contactText dark:text-dark-contactText shadow-sm"
        >
            <div className="max-w-7xl mx-auto px-4 flex justify-center items-center gap-4 md:gap-0 text-center md:text-left">
                {/* Copyright Text */}
                <p className="text-xs md:text-sm flex items-center gap-1 text-light-contactText dark:text-dark-contactText">
                    <FaRegCopyright className="inline-block size-3" /> {new Date().getFullYear()} Sen Doan
                </p>
            </div>
        </footer>
    );
}