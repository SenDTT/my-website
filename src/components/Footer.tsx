import { FaRegCopyright } from "react-icons/fa6";

export default function Footer() {
    return (
        <footer
            className="mt-12 py-4 md:py-6 bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text border-t border-light-border dark:border-dark-border shadow-sm"
        >
            <div className="max-w-7xl mx-auto px-4 flex justify-center items-center gap-4 md:gap-0 text-center md:text-left">
                {/* Copyright Text */}
                <p className="text-xs md:text-sm flex items-center gap-2 text-light-logo dark:text-dark-logo">
                    <FaRegCopyright className="inline-block size-3" /> {new Date().getFullYear()} Sen Doan. All rights reserved.
                </p>
            </div>
        </footer>
    );
}