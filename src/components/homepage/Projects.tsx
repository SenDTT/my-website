import { useEffect, useRef } from 'react';
import portfolioImage from '../../assets/images/portfolio.png';

export default function Projects() {
    const scrollRef = useRef<HTMLDivElement>(null);

    const projects = [
        {
            title: "Applancer JSC (TopDev): Top IT Recruitment platform in Vietnam",
            image: "https://c.topdevvn.com/v4/assets/images/td-logo.png",
            link: "https://topdev.vn/",
        },
        {
            title: "QR Code: QR Code Generator",
            image: "https://c.topdevvn.com/vws/uploads/2025/03/2-Medium.jpeg",
            link: "https://topdev.vn/vws/",
        },
        {
            title: "miStable",
            image: "https://media.mistable.com/img/brand/logo.svg",
            link: "https://mistable.com/",
        },
        {
            title: "E-Commerce: TooleCommerce",
            image: "https://toolecommerce.com/wp-content/uploads/2023/06/White-Logo-1.png",
            link: "https://toolecommerce.com/",
        },
        {
            title: "Tomia",
            image: "https://dea2fb0dyoiuo.cloudfront.net/wp-content/uploads/2022/01/logo-2.png",
            link: "https://tomia.vn/",
        },
        {
            title: "Portfolio Website with Theme Toggle",
            image: portfolioImage,
            link: "https://github.com/SenDTT/my-website",
        },
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-fade-in-slide');
                    }
                });
            },
            { threshold: 0.2 }
        );

        if (scrollRef.current) {
            const cards = scrollRef.current.querySelectorAll('.project-card');
            cards.forEach((card) => observer.observe(card));

            return () => {
                cards.forEach((card) => observer.unobserve(card));
            };
        }
        return;
    }, []);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-light-buttonText dark:text-dark-buttonText bg-light-bg dark:bg-dark-bg p-4 md:p-6">
            <h1 className="text-3xl md:text-8xl font-bold text-light-buttonText dark:text-dark-buttonText animate-fade-in-delay w-full text-center md:text-right">
                Projects
            </h1>
            <div
                ref={scrollRef}
                className="w-full overflow-x-auto flex flex-row gap-6 p-4 scroll-smooth snap-x snap-mandatory scrollbar-thin scrollbar-light dark:scrollbar-dark"
                role="region"
                aria-label="Projects carousel"
            >
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="project-card snap-start flex-none w-80 md:w-96 bg-dark-bg dark:bg-dark-popupText rounded-2xl shadow-lg p-6 flex flex-col animationDelay-slideleft"
                        tabIndex={0}
                    >
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-4 py-2 rounded transition-colors text-center"
                        >
                            <div className='flex justify-center items-center mb-4 h-48 animate-fade-in'>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-contain rounded-lg mb-4 border-2 border-white bg-white p-2 transition-transform duration-200 transform hover:scale-105"
                                />
                            </div>

                            <h2 className="text-base md:text-lg font-mono text-dark-buttonText dark:text-light-buttonText mb-2">
                                {project.title}
                            </h2>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}