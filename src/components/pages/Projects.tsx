import React from 'react';
import '../../styles/projects.css';

const ImagesPage = () => {
    return (
        <main className="images">
            <section className="image-grid container">
                <picture className="image_cont">
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
                <div className="image_cont">
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
                <div className="image_cont">
                    <img
                        data-speed="auto"
                        src="https://images.unsplash.com/photo-1532587459811-f057563d1936?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0NDMzNDg3NQ&ixlib=rb-1.2.1&q=80&w=500"
                        alt=""
                    />
                </div>
            </section>
            <div className="spacer"></div>
        </main>
    );
};

export default ImagesPage;
