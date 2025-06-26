import { useRef } from "react";
import Seo from "../utils/SEO";
import Achievement from "./homepage/Achievement";
import Contact from "./homepage/Contact";
import Hero from "./homepage/Hero";
import Projects from "./homepage/Projects";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useGSAP } from "@gsap/react";

// Register plugins
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default function Home() {
    const main = useRef<HTMLElement | null>(null);
    const scrollTween = useRef<gsap.core.Tween | null>(null);

    useGSAP(() => {
        const panels = gsap.utils.toArray<HTMLElement>(".panel");

        const goToSection = (i: number) => {
            scrollTween.current = gsap.to(window, {
                scrollTo: { y: i * window.innerHeight, autoKill: false },
                duration: 1,
                onComplete: () => (scrollTween.current = null),
                overwrite: true,
            });
        };

        panels.forEach((panel, i) => {
            ScrollTrigger.create({
                trigger: panel,
                start: "top bottom",
                end: "+=100%",
                onToggle: (self) => {
                    if (self.isActive && !scrollTween.current) {
                        goToSection(i);
                    }
                },
                id: "panel-" + i,
                //markers: true,
            });
        });

        ScrollTrigger.create({
            start: 0,
            end: "max",
            snap: 1 / (panels.length - 1),
        });

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, { scope: main });

    return (
        <main ref={main}>
            <Seo
                title="Portfolio - Sen Doan"
                description="Explore the portfolio of Sen Doan, a skilled web developer and designer. View projects, skills, and contact information to collaborate on innovative web solutions."
                keywords="Sen Doan, portfolio, web developer, web designer, React developer, front-end developer, UI/UX designer, JavaScript, TypeScript, web development, web design, software engineer, full-stack developer"
                author="Sen Doan"
                url="https://sendoan.com"
                image="https://sendoan.com/images/portfolio.png?force=1"
            />
            <Hero className="panel" />
            <Achievement className="panel" />
            <Projects className="panel" />
            <Contact className="panel" />
        </main>
    );
}
