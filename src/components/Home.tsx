import Seo from "../utils/SEO";
import Achievement from "./homepage/Achievement";
import Contact from "./homepage/Contact";
import Hero from "./homepage/Hero";
import Projects from "./homepage/Projects";

export default function Home() {
    return (
        <>
            <Seo
                title="Portfolio - Sen Doan"
                description="Explore the portfolio of Sen Doan, a skilled web developer and designer. View projects, skills, and contact information to collaborate on innovative web solutions."
                keywords="Sen Doan, portfolio, web developer, web designer, React developer, front-end developer, UI/UX designer, JavaScript, TypeScript, web development, web design, software engineer, full-stack developer"
                author="Sen Doan"
                url="https://sendoan.com/projects/landmark-pose-ai"
                image="https://sendoan.com/images/landmark-pose-ai-preview.jpeg"
            />
            <Hero />
            {/* <About />*/}
            <Achievement />
            <Projects />
            <Contact />
        </>
    )
}