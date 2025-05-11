import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Contact() {
    return (
        <>
            {/* Social Links */}
            <div className="flex gap-3 md:gap-4">
                <Link
                    to="https://linkedin.com/in/sendoan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-light-text dark:text-dark-logo hover:text-light-accent dark:hover:text-dark-accent transform hover:rotate-12 transition-transform duration-200`}
                >
                    <FaLinkedinIn className="inline-block size-4 md:size-5" />
                </Link>
                <Link
                    to="https://github.com/SenDTT"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-light-text dark:text-dark-logo hover:text-light-accent dark:hover:text-dark-accent transform hover:rotate-12 transition-transform duration-200`}
                >
                    <FaGithub className="inline-block size-4 md:size-5" />
                </Link>
                <Link
                    to="mailto:sendoan.sophie@gmail.com"
                    className={`text-light-text dark:text-dark-logo hover:text-light-accent dark:hover:text-dark-accent transform hover:rotate-12 transition-transform duration-200`}
                >
                    <MdOutlineMail className="inline-block size-4 md:size-5" />
                </Link>
            </div>
        </>
    )
}