import Achievement from "./homepage/Achievement";
import Contact from "./homepage/Contact";
import Hero from "./homepage/Hero";
import Projects from "./homepage/Projects";

export default function Home() {
    return (
        <>
            <Hero />
            {/* <About />*/}
            <Achievement />
            <Projects />
            <Contact />
        </>
    )
}