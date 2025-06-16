import { Link } from 'react-router-dom';
import profileImage from '../../assets/images/profile/profile_1.jpg';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa6';
import { MdOutlineMail } from 'react-icons/md';
import { FaMedium } from 'react-icons/fa';

export default function Contact() {

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-dark-contactBg dark:bg-light-contactBg text-light-text dark:text-dark-text">
            <div className="max-w-7xl md:w-full w-11/12 p-4 md:p-6 bg-light-contactBg dark:bg-dark-contactBg rounded-lg flex flex-col md:flex-row justify-center md:items-center gap-0 md:gap-4">
                <div className='w-full md:w-1/2 mx-auto flex justify-center items-center mb-4 md:mb-0 animate-fade-in-delay'>
                    <img src={profileImage} alt="Profile" className="w-full" />
                </div>
                <div className='flex flex-col items-center justify-center w-full max-w-sm md:max-w-lg p-4 md:p-6 gap-2 mx-auto'>
                    <h1 className="text-center text-3xl md:text-5xl font-bold text-dark-contactBg dark:text-light-buttonText animate-fade-in-delay">
                        Contact Me
                    </h1>
                    <p className="text-center text-sm md:text-base mb-4 md:mb-6 opacity-80 text-dark-contactBg dark:text-light-buttonText">
                        I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                    </p>
                    <div className="flex gap-3 md:gap-4">
                        <Link
                            to="https://linkedin.com/in/sendoan"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-dark-contactBg dark:text-light-contactBg transform hover:rotate-12 transition-transform duration-200"
                        >
                            <FaLinkedinIn className="inline-block size-4 md:size-5" />
                        </Link>
                        <Link
                            to="https://github.com/SenDTT"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-dark-contactBg dark:text-light-contactBg transform hover:rotate-12 transition-transform duration-200"
                        >
                            <FaGithub className="inline-block size-4 md:size-5" />
                        </Link>
                        <Link
                            to="mailto:sendoan.sophie@gmail.com"
                            className="text-dark-contactBg dark:text-light-contactBg transform hover:rotate-12 transition-transform duration-200"
                        >
                            <MdOutlineMail className="inline-block size-4 md:size-5" />
                        </Link>
                        <Link to="https://medium.com/@sendoan.sophie"
                            className="text-dark-contactBg dark:text-light-contactBg transform hover:rotate-12 transition-transform duration-200">
                            <FaMedium className="inline-block size-4 md:size-5" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}