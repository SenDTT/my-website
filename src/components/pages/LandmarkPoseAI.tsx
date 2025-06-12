import { FaExternalLinkAlt, FaGithub, FaLinkedinIn } from "react-icons/fa";
import searchGift from "../../assets/images/search.gif";
import compoareGift from "../../assets/images/compare.gif";
import { Link } from "react-router-dom";
import { PiFilmSlateFill } from "react-icons/pi";
import { FaCameraRetro, FaCheck, FaHandshake } from "react-icons/fa6";
import { Helmet } from "react-helmet";
import landmarkPoseAI from "../../assets/images/landmark-pose-ai-preview.jpeg";

export default function LandmarkPoseAI() {
    return (
        <>
            <Helmet>
                <title>Landmark Pose AI – Photo Posing Assistant</title>
                <meta name="description" content="AI-generated pose suggestions based on your landmark photo. Collaborated using HP AI Studio and built with React, Tailwind CSS, and FastAPI." />
                <meta property="og:title" content="Landmark Pose AI – Photo Posing Assistant" />
                <meta property="og:description" content="AI-generated pose suggestions based on your landmark photo. Built with FastAPI, React, and MongoDB." />
                <meta property="og:image" content={landmarkPoseAI} />
                <meta property="og:url" content="https://sendoan.com/projects/landmark-pose-ai" />
                <meta name="twitter:card" content="summary_large_image" />
            </Helmet>
            <section className="max-w-4xl mx-auto px-4 py-12 text-neutral-800 ">
                <h2 className="text-3xl font-bold mb-4"><FaCameraRetro className="inline-block text-neutral-800 " /> Landmark Pose AI</h2>

                <p className="text-lg mb-6">
                    I discovered this project through <Link to="https://www.linkedin.com/posts/nhien-luu-434960173_ai-computervision-python-activity-7329281823711080449-0Kqj?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFFe0hwBZ1_0MGN0Z5gG_6qifhlPvt7dh1s" target="_blank" className="underline" >a LinkedIn post</Link> by Nhien and reached out to collaborate. I proposed the idea of training a model using HP AI Studio and contributed by building a responsive, user-friendly frontend with React and Tailwind CSS.
                </p>

                <div className="space-y-6">

                    <div className="border-b border-dark-accent  pb-4">
                        <Link
                            to="https://github.com/quangnhien/photo-posing-assistant"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-light-text  hover:text-light-accent  transform hover:rotate-6 transition-transform duration-200"
                        >
                            Visit Project <FaExternalLinkAlt className="inline" />
                        </Link>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold"><FaCheck className="inline-block text-green-600" /> What It Does</h3>
                        <ul className="list-disc ml-6 space-y-1">
                            <li>Upload or capture a photo at a landmark.</li>
                            <li>Receive pose suggestions using AI based on location, background, and subject.</li>
                            <li>Search reference poses by keyword or background image.</li>
                            <li>Compare your photo with reference poses side-by-side and get improvement tips.</li>
                        </ul>
                    </div>

                    {/* <div>
                    <h3 className="text-xl font-semibold"><FaCheck className="inline-block text-green-600" /> How We Built It</h3>
                    <p className="font-medium mt-2">Frontend:</p>
                    <ul className="list-disc ml-6 mb-4 space-y-1">
                        <li>React, Tailwind CSS, and Vite for fast, modern UI development.</li>
                        <li>Fully responsive with pose overlays and interactive animations.</li>
                    </ul>

                    <p className="font-medium">Backend & AI:</p>
                    <ul className="list-disc ml-6 space-y-1">
                        <li>Python + FastAPI backend containerized with Docker.</li>
                        <li>MongoDB for storing user photos, pose metadata, and filters.</li>
                        <li>BLIP to extract tags from images and EfficientNet for landmark features.</li>
                        <li>MediaPipe to extract body keypoints.</li>
                        <li>Custom rule-based model for pose matching and feedback generation.</li>
                        <li>HP AI Studio used for model training, versioning (MLflow), and deployment.</li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-xl font-semibold"><FaCheck className="inline-block text-green-600" /> My Role & Contributions</h3>
                    <ul className="list-disc ml-6 space-y-1">
                        <li>Initiated collaboration with Nhien after seeing his LinkedIn post.</li>
                        <li>Participated in custom model training using HP AI Studio.</li>
                        <li>Led frontend implementation: search, image comparison, and result UI.</li>
                        <li>Helped define feedback logic for pose improvement suggestions.</li>
                    </ul>
                </div> */}

                    <div>
                        <h3 className="text-xl font-semibold"><FaCheck className="inline-block text-green-600" /> Built With</h3>
                        <div className="flex flex-wrap gap-2 mt-2">
                            {[
                                "React",
                                "Tailwind CSS",
                                "FastAPI",
                                "Python",
                                "MongoDB",
                                "BLIP",
                                "MediaPipe",
                                "EfficientNet",
                                "HP AI Studio",
                            ].map((tech) => (
                                <span
                                    key={tech}
                                    className=" bg-dark-bg text-neutral-100 px-3 py-1 rounded text-sm"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold mb-4"><FaHandshake className="inline-block text-yellow-500" /> Collaborator</h3>
                        <div className="flex items-center gap-4  bg-dark-bg p-4 rounded-lg shadow-sm">
                            <div className="gap-4 space-y-2">
                                <p className="font-semibold text-lg  text-neutral-100">Nhien Luu</p>
                                <p className="text-sm  text-neutral-100">
                                    ML Engineer & Co-Creator of Landmark Pose AI
                                </p>
                                <div className="flex gap-3 md:gap-4">
                                    <Link
                                        to="https://www.linkedin.com/in/nhien-luu-434960173/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className=" text-neutral-100  hover:text-dark-accent transform hover:rotate-12 transition-transform duration-200"
                                    >
                                        <FaLinkedinIn className="inline-block size-4 md:size-5" />
                                    </Link>
                                    <Link
                                        to="https://github.com/quangnhien"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className=" text-neutral-100  hover:text-dark-accent transform hover:rotate-12 transition-transform duration-200"
                                    >
                                        <FaGithub className="inline-block size-4 md:size-5" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="w-full flex flex-col justify-center items-center gap-6">
                            <div className="w-full mx-auto">
                                <h6 className="text-xl font-semibold mb-4"><PiFilmSlateFill className="text-light-text  inline-block" /> Search Feature</h6>
                                <img
                                    src={searchGift}
                                    alt='Search Demo'
                                    className="w-full h-full object-contain rounded-lg mb-4 border-2 border-white bg-white p-2 transition-transform duration-200 transform"
                                />
                                <Link to="https://youtu.be/VibRBNcVG84?si=CJemrwA9PV9xrT7_"
                                    className="inline-flex items-center gap-2 text-light-text  hover:text-light-accent  transform hover:rotate-6 transition-transform duration-200">View on Youtube <FaExternalLinkAlt className="inline" /></Link>
                            </div>

                            <div className="w-full mx-auto">
                                <h6 className="text-xl font-semibold mb-4"><PiFilmSlateFill className="text-light-text inline-block" /> Compare Feature</h6>
                                <img
                                    src={compoareGift}
                                    alt='Compare Demo'
                                    className="w-full h-full object-contain rounded-lg mb-4 border-2 border-white bg-white p-2 transition-transform duration-200 transform"
                                />
                                <Link to="https://youtu.be/Gw2hniW6zFE?si=XXIzKuP_5MU6tAh1"
                                    className="inline-flex items-center gap-2 text-light-text  hover:text-light-accent  transform hover:rotate-6 transition-transform duration-200">View on Youtube <FaExternalLinkAlt className="inline" /></Link>
                            </div>
                        </div>
                    </div>

                </div>
            </section >
        </>
    );
}
