//import { NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

import { PiHandWavingFill } from "react-icons/pi";

export default function Navbar() {
    return (
        <nav className="bg-light-bg dark:bg-dark-bg p-4">
            <div className="flex justify-center items-center max-w-7xl mx-auto">
                {/* Left spacer to balance the layout */}
                <div className="w-16"></div>
                {/* Centered name and icon */}
                <div className="flex items-center justify-center flex-grow">
                    <PiHandWavingFill className="text-light-logo dark:text-dark-logo text-2xl" />
                    <h1 className="text-light-logo dark:text-dark-logo text-xl font-bold ml-2">Hi, I'm Sen</h1>
                </div>
                {/* <ul className="flex space-x-4">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive
                                    ? "text-light-accent dark:text-dark-accent"
                                    : "text-light-text dark:text-dark-text hover:text-light-accent dark:hover:text-dark-accent"
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/about"
                            className={({ isActive }) =>
                                isActive
                                    ? "text-light-accent dark:text-dark-accent"
                                    : "text-light-text dark:text-dark-text hover:text-light-accent dark:hover:text-dark-accent"
                            }
                        >
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/projects"
                            className={({ isActive }) =>
                                isActive
                                    ? "text-light-accent dark:text-dark-accent"
                                    : "text-light-text dark:text-dark-text hover:text-light-accent dark:hover:text-dark-accent"
                            }
                        >
                            Projects
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/contact"
                            className={({ isActive }) =>
                                isActive
                                    ? "text-light-accent dark:text-dark-accent"
                                    : "text-light-text dark:text-dark-text hover:text-light-accent dark:hover:text-dark-accent"
                            }
                        >
                            Contact
                        </NavLink>
                    </li>
                </ul> */}
                {/* Right-aligned theme toggle */}
                <div className="w-16 flex justify-end">
                    <ThemeToggle />
                </div>
            </div>
        </nav>
    );
}