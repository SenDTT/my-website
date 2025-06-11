import { Link, Outlet } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import ThemeToggle from "./ThemeToggle";

export default function LayoutWithoutFooter() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-light-bg to-light-bg dark:from-dark-bg dark:to-dark-bg text-white font-mono">
            <div className="min-h-full flex flex-col">
                <nav className="bg-light-bg dark:bg-dark-bg p-4">
                    <div className="flex justify-left items-left max-w-7xl mx-auto">
                        {/* Centered name and icon */}
                        <div className="flex items-left justify-left flex-grow">
                            <Link to="/" className="flex items-left justify-left flex-grow">
                                <FaArrowLeft className="size-6 text-dark-bg dark:text-light-bg" />
                            </Link>
                        </div>
                        <div className="w-16 flex justify-end">
                            <ThemeToggle />
                        </div>
                    </div>
                </nav>
                <Outlet />
            </div>
        </div>
    );
}