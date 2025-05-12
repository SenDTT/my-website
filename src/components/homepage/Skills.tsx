import { useTheme } from "../../context/ThemeContext";

export default function Skills() {
    const { theme } = useTheme();
    
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-dark-contactBg dark:bg-light-contactBg text-light-text dark:text-dark-text p-4 md:p-6 gap-2 md:gap-4">
            <div className="animate-slide-right animationDelay-awsbadge">
                <img src={`https://github-widgetbox.vercel.app/api/skills?languages=js,ts,java,php,python,html,css,xml,json,yaml,postgresql,mysql,sass,graphql&includeNames=true&theme=${theme == 'light' ? 'metropolis' : 'cheesecake'}`} alt="sendoan's - GitHub Widgetbox" width="68%" className="mx-auto" />
            </div>
            <div className="animate-slide-left animationDelay-awsbadge">
                <img src={`https://github-widgetbox.vercel.app/api/skills?frameworks=vue,react,next,bootstrap,nest,tailwind,express,angular,laravel&includeNames=true&theme=${theme == 'light' ? 'metropolis' : 'cheesecake'}`} alt="sendoan's - GitHub Widgetbox" width="68%" className="mx-auto" />
            </div>
        </div>
    )
}