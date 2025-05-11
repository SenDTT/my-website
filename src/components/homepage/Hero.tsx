export default function Hero() {

    return (
        <section
            className={`min-h-screen flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 p-4 md:p-6 text-light-text dark:text-dark-text bg-light-bg dark:bg-dark-bg`}
        >
            {/* Glassmorphism Card without Profile Image */}
            <div
                className={`backdrop-blur-md bg-light-bg/10 dark:bg-dark-bg/10 border border-light-border/20 dark:border-dark-border/20 rounded-2xl p-6 md:p-8 w-full max-w-sm md:max-w-md shadow-xl text-center`}
            >
                <h1 className="text-2xl md:text-3xl font-bold mb-1 md:mb-2 text-light-logo dark:text-dark-logo">
                    Sen Doan
                </h1>
                <p className={`text-light-accent dark:text-dark-accent font-medium text-sm md:text-base`}>
                    Software Engineer
                </p>
            </div>

            {/* Introduction */}
            <div className="max-w-sm md:max-w-xl text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4 leading-tight">
                    Building Scalable Apps <br /> with Beautiful Interfaces
                </h2>
                <p className="text-sm md:text-base mb-4 md:mb-6 opacity-80">
                    Over 5 years of experience in full stack development with expertise in PHP, Laravel, React, Next.js, and UI/UX design. Currently pursuing a Master's in CS.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center md:justify-start">
                    <a
                        href="#projects"
                        className={`bg-light-accent dark:bg-dark-accent hover:bg-opacity-90 px-4 md:px-6 py-2 md:py-3 rounded-full font-semibold text-light-bg dark:text-dark-bg transition-opacity duration-200`}
                    >
                        See My Work
                    </a>
                    <a
                        href="#contact"
                        className={`border border-light-accent dark:border-dark-accent hover:bg-light-accent dark:hover:bg-dark-accent px-4 md:px-6 py-2 md:py-3 rounded-full font-semibold hover:text-light-bg dark:hover:text-dark-bg transition-colors duration-200`}
                    >
                        Contact Me
                    </a>
                </div>
            </div>
        </section>
    );
}