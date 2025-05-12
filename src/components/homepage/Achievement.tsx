import { Link } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import Skills from "./Skills";

export default function Achievement() {
    const { theme } = useTheme();

    return (
        <div className="flex flex-col items-start justify-start min-h-screen">
            <h1 className="text-3xl md:text-8xl font-bold text-light-buttonText dark:text-dark-buttonText animate-fade-in-delay">
                Skills & Achievements
            </h1>
            <div className="flex flex-col md:flex-row items-stretch justify-center w-full min-h-screen h-screen">
                <Skills />
                <div className="flex flex-col items-center justify-center w-full max-w-2xl bg-light-contactBg dark:bg-dark-contactBg p-4 md:p-6 gap-2 md:gap-4">
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
                    <div className="flex w-full max-w-sm md:max-w-lg justify-center items-center animate-slide-right animationDelay-leetcard mb-3">
                        <Link to="https://leetcode.com/sendoan/" target="_blank" rel="noopener noreferrer">
                            <img
                                className=""
                                src={`https://leetcard.jacoblin.cool/sendoan?theme=${theme == 'light' ? "forest" : "nord"}&radius=25`}
                                alt="LeetCode profile card"
                            />
                        </Link>
                    </div>
                    <div className="flex items-center justify-center w-full max-w-sm md:max-w-lg mx-auto animate-slide-left animationDelay-awsbadge">
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