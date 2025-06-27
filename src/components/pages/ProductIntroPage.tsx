import ScrollSmoother from 'gsap/ScrollSmoother';
import { useLocation } from 'react-router-dom';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import gsap from 'gsap';
import { FiCheckCircle } from 'react-icons/fi';
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ProductIntroPage = () => {
    const location = useLocation();
    const container = useRef(null);
    const firstSection = useRef<HTMLDivElement | null>(null);
    const secondSection = useRef<HTMLDivElement | null>(null);

    useGSAP(() => {
        // banner
        gsap.utils.toArray('.banner-image .box').forEach((el: any) => {
            gsap.to(el, {
                duration: 2,
                scale: 0,
                y: 60,
                yoyo: true,
                repeat: 0,
                ease: "power1.inOut",
                stagger: {
                    amount: 1.5,
                    grid: [3, 15],
                    axis: "x",
                    ease: "none",
                    from: "random",
                }
            }
            );
        });

    }, { scope: container });

    useGSAP(() => {
        ScrollTrigger.matchMedia({
            // Desktop and tablet
            "(min-width: 768px)": () => {
                gsap.utils.toArray('.content .items').forEach((el: any) => {
                    gsap.fromTo(
                        el,
                        { opacity: 0, y: 50, x: 0 },
                        {
                            duration: 1,
                            opacity: 1,
                            y: 0,
                            x: 100,
                            ease: "power1.out",
                            scrollTrigger: {
                                trigger: el,
                                start: 'top 80%',
                                end: 'top 30%',
                                scrub: true,
                                // markers: true,
                            },
                        }
                    );
                });
            },

            // Mobile - simpler animation
            "(max-width: 767px)": () => {
                gsap.utils.toArray('.content .items').forEach((el: any) => {
                    gsap.fromTo(
                        el,
                        { opacity: 0, y: 30 },
                        {
                            opacity: 1,
                            y: 0,
                            duration: 1,
                            ease: "power1.out",
                            scrollTrigger: {
                                trigger: el,
                                start: 'top 90%',
                                toggleActions: "play none none none",
                            },
                        }
                    );
                });
            }
        });

        return () => ScrollTrigger.getAll().forEach(t => t.kill());
    }, { scope: firstSection });

    useGSAP(() => {
        gsap.from(".character", {
            opacity: 0,
            y: 100,
            stagger: 0.1,
            ease: "power4.out",
            scrollTrigger: {
                trigger: secondSection.current,
                start: "top 80%",
                toggleActions: "play none none none",
            }
        });

        return () => ScrollTrigger.getAll().forEach(t => t.kill());
    }, { scope: secondSection });

    useGSAP(() => {
        ScrollSmoother.create({
            smooth: 1,
            effects: true,
        });

    }, [location]);

    return (
        <div id="smooth-wrapper">
            <div id="smooth-content" ref={container}>
                <main id="product-intro-page" className="images">
                    <section className="hero container">
                        <div className="hero-content">
                            <h1 className="hero-title">Product Introduction</h1>
                        </div>
                    </section>
                    <div className="spacer"></div>

                    <section className="image-grid container">
                        <picture className="image_cont banner relative">
                            <div className='banner-image'>
                                {Array.from({ length: 200 }).map((_, index) => (
                                    <div key={index} className='box'></div>
                                ))}
                            </div>
                            <source
                                srcSet="https://images.unsplash.com/photo-1506744038136-46273834b3fb?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0NDMzNTU3OA&ixlib=rb-1.2.1&q=85&w=1500"
                                media="(min-width: 1500px)"
                            />
                            <source
                                srcSet="https://images.unsplash.com/photo-1506744038136-46273834b3fb?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0NDMzNTU3OA&ixlib=rb-1.2.1&q=85&w=1000"
                                media="(min-width: 700px)"
                            />
                            <img
                                data-speed="auto"
                                className=""
                                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0NDMzNTU3OA&ixlib=rb-1.2.1&q=85&w=600"
                                alt=""
                            />
                        </picture>
                        <div className="image_cont">
                            <img
                                data-speed="auto"
                                src="https://images.unsplash.com/photo-1569596082827-c5e8990496cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0NDMzNDg3NQ&ixlib=rb-1.2.1&q=80&w=500"
                                alt=""
                            />
                        </div>
                        <div className='first-section' ref={firstSection}>
                            <div className='content'>
                                <ul>
                                    <li className='items'>
                                        <FiCheckCircle className="text-green-500 size-5 text-xl mt-1" />Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                                    <li className='items'>
                                        <FiCheckCircle className="text-green-500 size-5 text-xl mt-1" />Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                                    <li className='items'>
                                        <FiCheckCircle className="text-green-500 size-5 text-xl mt-1" />Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="image_cont" ref={secondSection}>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-7xl md:text-[16rem] uppercase font-bold text-white/50 [text-stroke:2px_white] pointer-events-none z-10 flex flex-col md:flex-row justify-center items-center gap-4 md:gap-28">
                                <div className='character'>N</div>
                                <div className='character'>E</div>
                                <div className='character'>W</div>
                                <div className='character'>S</div>
                            </div>
                            <img
                                data-speed="auto"
                                src="https://images.unsplash.com/photo-1587932775991-708a20af2cc2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0NDMzNDQ5Mg&ixlib=rb-1.2.1&q=80&w=500"
                                alt=""
                            />
                        </div>
                        <div className="image_cont">
                            <img
                                data-speed="auto"
                                src="https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0NDMzNTU3OA&ixlib=rb-1.2.1&q=85&w=1200"
                                alt=""
                            />
                        </div>
                        <div className="image_cont">
                            <img
                                data-speed="auto"
                                src="https://images.unsplash.com/photo-1623166200209-6bd48520d6cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0NDMzNDg3NQ&ixlib=rb-1.2.1&q=80&w=500"
                                alt=""
                            />
                        </div>
                        {/* <div className="image_cont">
                            <img
                                data-speed="auto"
                                src="https://images.unsplash.com/photo-1532587459811-f057563d1936?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0NDMzNDg3NQ&ixlib=rb-1.2.1&q=80&w=500"
                                alt=""
                            />
                        </div> */}
                    </section>
                    <div className="spacer"></div>
                </main>
            </div>
        </div>
    );
};

export default ProductIntroPage;
