import { useTheme } from "../../context/ThemeContext";

export default function Skills() {
    const { theme } = useTheme();
    
    return (
        <div className="flex flex-col items-center justify-center md:min-h-screen bg-dark-contactBg dark:bg-light-contactBg text-light-text dark:text-dark-text p-4 md:p-6 gap-2 md:gap-4">
            <h1 className="md:hidden text-2xl md:text-8xl font-bold text-light-contactBg dark:text-dark-buttonText animate-fade-in-delay md:py-0 py-4 w-full text-center">
                Skills
            </h1>
            <div className="animate-slide-right animationDelay-awsbadge">
                <img src={`https://github-widgetbox.vercel.app/api/skills?languages=js,ts,java,php,python,html,css,xml,json,yaml,postgresql,mysql,sass,graphql&includeNames=true&theme=${theme == 'light' ? 'metropolis' : 'cheesecake'}`} alt="sendoan's - GitHub Widgetbox" className="mx-auto w-full md:w-[68%]" />
            </div>
            <div className="animate-slide-left animationDelay-awsbadge mb-6 md:mb-0">
                <img src={`https://github-widgetbox.vercel.app/api/skills?frameworks=vue,react,next,bootstrap,nest,tailwind,express,angular,laravel&includeNames=true&theme=${theme == 'light' ? 'metropolis' : 'cheesecake'}`} alt="sendoan's - GitHub Widgetbox" className="mx-auto w-full md:w-[68%]" />
            </div>
        </div>
    )
}