import { useEffect, useRef } from 'react';
import portfolioImage from '../../assets/images/portfolio_light.png';
import portfolioDark from '../../assets/images/portfolio_dark.png';
import topdev from '../../assets/images/topdev.png';
import vnwebsubmit from '../../assets/images/vnwebsubmit.jpeg';
import cslantImage from '../../assets/images/cslant.jpeg';
import toole from '../../assets/images/toole.png';
import tomia from '../../assets/images/tomia.png';
import mistableapps from '../../assets/images/mistable_apps.png';
import mistable from '../../assets/images/mistable.svg';
import landmarkPoseAi from '../../assets/images/landmark_pose_ai.png';
import blueone from '../../assets/images/blueone.png';
import { Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';

export default function Projects({className = ''}: {className?: string}) {
    const scrollRef = useRef<HTMLDivElement>(null);
    const { theme } = useTheme();

    const projects = [
        {
            title: "Landmark Pose AI",
            image: landmarkPoseAi,
            link: "https://medium.com/@sendoan.sophie/landmark-pose-ai-79e8b087b8c6",
        },
        {
            title: "Portfolio Website with Theme Toggle",
            image: theme == 'light' ? portfolioImage : portfolioDark,
            link: "https://github.com/SenDTT/my-website",
        },
        {
            title: "Applancer JSC (TopDev): Top IT Recruitment platform in Vietnam",
            image: topdev,
            link: "https://topdev.vn/",
        },
        {
            title: "QR Code: QR Code Generator",
            image: vnwebsubmit,
            link: "https://topdev.vn/vws/",
        },
        {
            title: "miStable: Horse Trainer Communication Software, Syndication, Studs, Mobile App",
            image: mistable,
            link: "https://mistable.com/",
        },
        {
            title: "miStable - Owner & Trainer App",
            image: mistableapps,
            link: "https://apps.apple.com/au/developer/99digital/id1023561068",
        },
        {
            title: "E-Commerce: Ecommerce Web Apps And Tools",
            image: toole,
            link: "https://toolecommerce.com/",
        },
        {
            title: "TOMIA - Modern AI School Management Software",
            image: tomia,
            link: "https://tomia.vn/",
        },
        {
            title: "BlueOne - makes AdBlue and auto chemicals",
            image: blueone,
            link: "https://blueone.vn/en/",
        },
        {
            title: "CSlant | Open Source Developer Team",
            image: cslantImage,
            link: "https://cslant.com/",
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
        <div className={`flex flex-col items-center justify-center py-8 md:py-0 md:min-h-screen text-light-buttonText dark:text-dark-buttonText bg-light-bg dark:bg-dark-bg px-4 md:px-6 gap-4 ${className ?? ''}`}>
            <h1 className="text-2xl md:text-8xl font-bold text-light-buttonText dark:text-dark-buttonText animate-fade-in-delay w-full text-center md:text-right mt-6 md:mt-0">
                Projects
            </h1>
            <p className="text-sm md:text-base mb-4 md:mb-6 opacity-80 text-light-buttonText dark:text-dark-buttonText text-center md:text-right w-full">
                Here are some of the projects I have worked on. Click on the images to view them.
            </p>
            <div
                ref={scrollRef}
                className="w-full overflow-x-auto flex flex-row gap-6 p-4 scroll-smooth snap-x snap-mandatory scrollbar-thin scrollbar-light dark:scrollbar-dark mb-6 md:mb-0"
                role="region"
                aria-label="Projects carousel"
            >
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="project-card snap-start flex-none w-80 md:w-85 bg-dark-bg dark:bg-dark-popupText rounded-2xl shadow-lg p-6 flex flex-col animationDelay-slideleft"
                        tabIndex={0}
                    >
                        <Link
                            to={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-4 py-2 rounded transition-colors text-center"
                        >
                            <div className='flex justify-center items-center mb-4 h-40 animate-fade-in p-6'>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-contain rounded-lg mb-4 border-2 border-white bg-white p-2 transition-transform duration-200 transform hover:scale-105"
                                />
                            </div>

                            <h2 className="text-sm md:text-base font-mono text-dark-buttonText dark:text-light-buttonText mb-2">
                                {project.title}
                            </h2>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
