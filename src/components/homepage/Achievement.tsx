import { Link } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import Skills from "./Skills";

export default function Achievement() {
    const { theme } = useTheme();

    return (
        <div className="flex flex-col items-start justify-start md:min-h-screen bg-dark-contactBg dark:bg-light-contactBg text-light-text dark:text-dark-text md:text-light-buttonText md:dark:text-dark-buttonText md:bg-light-bg md:dark:bg-dark-bg">
            <h1 className="hidden md:flex text-2xl md:text-8xl font-bold text-light-buttonText dark:text-dark-buttonText animate-fade-in-delay md:py-0 py-4 w-full text-center md:text-left">
                Skills & Achievements
            </h1>
            <div className="flex flex-col md:flex-row items-stretch justify-center w-full md:min-h-screen md:h-screen md:gap-0 gap-4">
                <Skills />
                <div className="flex flex-col items-center justify-center w-full max-w-2xl bg-light-contactBg dark:bg-dark-contactBg p-4 md:p-6 gap-2 md:gap-4 md:py-0 py-6">
                    <h1 className="md:hidden text-2xl md:text-8xl font-bold text-dark-contactBg dark:text-light-buttonText animate-fade-in-delay md:py-0 py-4 w-full text-center">
                        Achievements
                    </h1>
                    <div className="flex w-full max-w-sm md:max-w-lg justify-center items-center animate-slide-left animationDelay-github">
                        <a href="https://github.com/SenDTT">
                            <img
                                src={`https://github-widgetbox.vercel.app/api/profile?username=SenDTT&data=followers,repositories,stars,commits&theme=${theme == 'light' ? 'cheesecake' : 'metropolis'}`}
                                alt="sendoan's - GitHub Widgetbox"
                                width="100%"
                                className="h-full mx-auto"
                            />
                        </a>
                    </div>
                    <div className="flex w-full max-w-sm md:max-w-lg justify-center items-center animate-slide-right animationDelay-leetcard mb-3 px-1.5">
                        <Link to="https://leetcode.com/sendoan/" target="_blank" rel="noopener noreferrer">
                            <img
                                className=""
                                src={`https://leetcard.jacoblin.cool/sendoan?theme=${theme == 'light' ? "forest" : "nord"}&radius=25`}
                                alt="LeetCode profile card"
                            />
                        </Link>
                    </div>
                    <div className="flex items-center justify-center w-full max-w-sm md:max-w-lg mx-auto animate-slide-left animationDelay-awsbadge px-1.5 mb-6 md:mb-0">
                        <div className="flex flex-row justify-center bg-dark-awsBadge dark:bg-dark-awsBadge rounded-3xl p-6 md:p-8 w-full max-w-sm md:max-w-lg shadow-xl text-center animationDelay-awsbadge animate-slide-left">
                            <div
                                className=""
                                data-iframe-width="345"
                                data-iframe-height="200"
                                data-share-badge-id="1bd674bf-bab2-4026-84bd-ffeb7b70df1c"
                                data-share-badge-host="https://www.credly.com"
                            ></div>
                            <script type="text/javascript" async src="https://cdn.credly.com/assets/utilities/embed.js"></script>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}