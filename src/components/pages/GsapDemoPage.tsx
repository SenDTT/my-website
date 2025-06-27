import ScrollSmoother from 'gsap/ScrollSmoother';
import { Link, useLocation } from 'react-router-dom';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import gsap from 'gsap';
import { FiCheckCircle } from 'react-icons/fi';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaLocationPin } from 'react-icons/fa6';

const GsapDemoPage = () => {
    const location = useLocation();
    const container = useRef(null);
    const firstSection = useRef<HTMLDivElement | null>(null);

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
                            <h1 className="hero-title">GSAP Demo - Welcome to Vietnam</h1>
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
                            <div className='caption'>
                                <label className='text-white inline-flex items-center gap-1'><FaLocationPin className='text-white size-4' /> Danang, Vietnam</label>
                                <label className='text-white inline-flex items-center gap-1'>By <Link to='https://unsplash.com/@kirildobrev'>@kirildobrev</Link></label>
                            </div>
                            <source
                                srcSet="https://images.unsplash.com/photo-1555979864-7a8f9b4fddf8?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&q=85&w=1500"
                                media="(min-width: 1500px)"
                            />
                            <source
                                srcSet="https://images.unsplash.com/photo-1555979864-7a8f9b4fddf8?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&q=85&w=1000"
                                media="(min-width: 700px)"
                            />
                            <img
                                data-speed="auto"
                                className=""
                                src="https://images.unsplash.com/photo-1555979864-7a8f9b4fddf8?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&q=85&w=600"
                                alt=""
                            />

                        </picture>
                        <div className="image_cont relative">
                            <img
                                data-speed="auto"
                                src="https://images.unsplash.com/photo-1545172538-171a802bd867?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&q=80&w=500"
                                alt=""
                            />

                            <div className='caption'>
                                <label className='text-white inline-flex items-center gap-1'><FaLocationPin className='text-white size-4' /> Tràng An, Hoa Lư, Ninh Bình, Vietnam</label>
                                <label className='text-white inline-flex items-center gap-1'>By <Link to='https://unsplash.com/@justfilip'>@justfilip</Link></label>
                            </div>
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
                        <div className="image_cont relative">
                            <img
                                data-speed="auto"
                                src="https://images.unsplash.com/photo-1643029891412-92f9a81a8c16?q=80&w=2972&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&q=80&w=1200"
                                alt=""
                            />
                            <div className='caption'>
                                <label className='text-white inline-flex items-center gap-1'><FaLocationPin className='text-white size-4' /> Ha Long Bay, Vietnam</label>
                                <label className='text-white inline-flex items-center gap-1'>By <Link to='https://unsplash.com/@mlobatopl'>@mlobatopl</Link></label>
                            </div>
                        </div>
                        <div className="image_cont relative">
                            <img
                                data-speed="auto"
                                src="https://images.unsplash.com/photo-1464809142576-df63ca4ed7f0?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&q=85&w=1200"
                                alt=""
                            />

                            <div className='caption'>
                                <label className='text-white inline-flex items-center gap-1'><FaLocationPin className='text-white size-4' /> Sơn Động District, Vietnam</label>
                                <label className='text-white inline-flex items-center gap-1'>By <Link to='https://unsplash.com/@dburka'>@dburka</Link></label>
                            </div>
                        </div>
                        <div className="image_cont relative">
                            <img
                                data-speed="auto"
                                src="https://images.unsplash.com/photo-1503432697506-6986abec65ca?q=80&w=905&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&q=80&w=500"
                                alt=""
                            />

                            <div className='caption'>
                                <label className='text-white inline-flex items-center gap-1'><FaLocationPin className='text-white size-4' /> Ho Chi Minh, Vietnam</label>
                                <label className='text-white inline-flex items-center gap-1'>By <Link to='https://unsplash.com/@ruslanbardash'>@ruslanbardash</Link></label>
                            </div>
                        </div>
                    </section>
                    <div className="spacer"></div>
                </main>
            </div>
        </div>
    );
};

export default GsapDemoPage;
