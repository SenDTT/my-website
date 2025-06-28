import { Link, Outlet } from "react-router-dom";

export default function LayoutEmpty() {
    return (
        <>
            <Outlet />

            <footer
                className="fixed right-0 bottom-0 rounded-tl-lg px-4 md:px-4 bg-dark-contactBg dark:bg-light-contactBg text-light-contactText dark:text-dark-contactText shadow-sm"
            >
                <div className="max-w-7xl mx-auto flex p-2 justify-center items-center gap-4 md:gap-0 text-center md:text-left">
                    {/* Copyright Text */}
                    <Link target="top" to="/" className="flex items-center justify-center flex-grow">
                        Learn more about me
                    </Link>
                </div>
            </footer>
        </>
    );
}