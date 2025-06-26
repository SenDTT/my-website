import { Link } from 'react-router-dom';
import profileImage from '../../assets/images/profile/profile.png';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa6';
import { MdOutlineMail } from 'react-icons/md';
import { FaMedium } from 'react-icons/fa';

export default function Hero({className = ''}: { className?: string }) {

    return (
        <section className={`md:min-h-screen flex flex-col md:flex-row items-center md:justify-center gap-6 md:gap-8 p-4 md:p-6 text-light-buttonText dark:text-dark-buttonText bg-light-bg dark:bg-dark-bg my-6 md:my-0 ${className ?? ''}`}>
            <div className="backdrop-blur-md animated-bg-light dark:animated-bg-dark border-2 border-light-buttonHoverBg/20 dark:border-dark-buttonHoverBg/20 rounded-2xl p-6 md:p-8 w-full max-w-sm md:max-w-md shadow-xl text-center animate-slide-right animationDelay-slideleft">
                {/* Profile Picture */}
                <div className="flex justify-center mb-4 md:mb-6">
                    <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-light-buttonHoverBg dark:border-dark-buttonHoverBg bg-dark-buttonText dark:bg-dark-buttonText">
                        <Link to="/">
                            <img
                                src={profileImage}
                                alt="Profile"
                                className="absolute inset-1 w-[calc(100%-8px)] h-[calc(100%-8px)] object-cover rounded-full transition-transform duration-200 transform hover:scale-105"
                            />
                        </Link>
                    </div>
                </div>
                <h1 className="text-2xl md:text-3xl font-bold mb-1 md:mb-2 text-light-buttonText">
                    Sen Doan
                </h1>
                <p className="text-light-buttonText font-medium text-sm md:text-base">
                    Software Engineer
                </p>
            </div>

            {/* Introduction */}
            <div className="max-w-sm md:max-w-xl text-center md:text-left animate-slide-left animationDelay-slideleft">
                <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4 leading-tight text-light-buttonText dark:text-dark-buttonText">
                    Building Scalable Apps <br /> with Beautiful Interfaces
                </h2>
                <p className="text-xs md:text-sm mb-4 md:mb-6 opacity-80 text-light-buttonText dark:text-dark-buttonText">
                    I love building things for the web — simple, smooth and smart.
                </p>
                <div className="flex gap-3 md:gap-4 justify-center md:justify-start">
                    <Link
                        to="https://linkedin.com/in/sendoan"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-light-text dark:text-dark-logo hover:text-light-accent dark:hover:text-dark-accent transform hover:rotate-12 transition-transform duration-200"
                    >
                        <FaLinkedinIn className="inline-block size-4 md:size-5" />
                    </Link>
                    <Link
                        to="https://github.com/SenDTT"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-light-text dark:text-dark-logo hover:text-light-accent dark:hover:text-dark-accent transform hover:rotate-12 transition-transform duration-200"
                    >
                        <FaGithub className="inline-block size-4 md:size-5" />
                    </Link>
                    <Link
                        to="mailto:sendoan.sophie@gmail.com"
                        className="text-light-text dark:text-dark-logo hover:text-light-accent dark:hover:text-dark-accent transform hover:rotate-12 transition-transform duration-200"
                    >
                        <MdOutlineMail className="inline-block size-4 md:size-5" />
                    </Link>

                    <Link to="https://medium.com/@sendoan.sophie"
                        className="text-light-text dark:text-dark-logo hover:text-light-accent dark:hover:text-dark-accent transform hover:rotate-12 transition-transform duration-200">
                        <FaMedium className="inline-block size-4 md:size-5" />
                    </Link>
                </div>
            </div>
        </section>
    );
}