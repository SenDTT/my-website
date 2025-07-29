import { useContext, useRef } from "react";
import Seo from "../utils/SEO";
import Achievement from "./homepage/Achievement";
import Contact from "./homepage/Contact";
import Hero from "./homepage/Hero";
import Projects from "./homepage/Projects";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import TransitionContext from "../context/TransitionContext";

export default function Home() {
    const main = useRef<HTMLElement | null>(null);
    const scrollTween = useRef<gsap.core.Tween | null>(null);
    const snapTriggers = useRef<ScrollTrigger[]>([]);
    const { completed } = useContext(TransitionContext);

    const { contextSafe } = useGSAP(
        () => {
            if (!completed) return;
            let panels = gsap.utils.toArray('.section-panel'),
                scrollStarts = [0],
                snapScroll = (value: number) => value; // for converting a pixel-based scroll value to the closest panel scroll position

            // create a ScrollTrigger for each panel that's only concerned about figuring out when its top hits the top of the viewport. We'll use the "start" of that ScrollTrigger to figure out snapping positions.
            panels.forEach((panel, i) => {
                snapTriggers.current[i] = ScrollTrigger.create({
                    trigger: panel as HTMLElement,
                    start: "top top"
                });
            });

            // once all the triggers have calculated their start/end, create the snap function that'll accept an overall progress value for the overall page, and then return the closest panel snapping spot based on the direction of scroll
            ScrollTrigger.addEventListener("refresh", () => {
                scrollStarts = snapTriggers.current.map(trigger => trigger.start); // build an Array with just the starting positions where each panel hits the top of the viewport
                snapScroll = ScrollTrigger.snapDirectional(scrollStarts); // get a function that we can feed a pixel-based scroll value to and a direction, and then it'll spit back the closest snap position (in pixels)
            });

            ScrollTrigger.observe({
                type: "wheel,touch",
                onChangeY(self) {
                    if (!scrollTween.current) {
                        // find the closest snapping spot based on the direction of scroll
                        let scroll = snapScroll(self.scrollY() + self.deltaY);
                        goToSection(scrollStarts.indexOf(scroll)); // scroll to the index of the associated panel
                    }
                }
            })

            ScrollTrigger.refresh();
        },
        {
            dependencies: [completed],
            scope: main,
            revertOnUpdate: true,
        }
    );

    const goToSection = contextSafe((i: number) => {
        console.log("scroll to", i);
        scrollTween.current = gsap.to(window, {
            scrollTo: { y: snapTriggers.current[i].start, autoKill: false },
            duration: 1,
            onComplete: () => (scrollTween.current = null),
            overwrite: true
        });
    });

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
