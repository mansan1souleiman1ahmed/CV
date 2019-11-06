import React from "react";

export default function CV() {
    return (
        <div className={"main-container"}>
            <div className={"container-info"}>
                <div className={"picture-container-square"}>
                    <div className={"picture-container-round"} />
                </div>
                <div className={"text-container"}>
                    <p>
                        <span className={"strong-text"}> {"Email"} </span>
                        {": mansan.souleiman.ahmed@gmail.com"}
                    </p>
                    <p>
                        <span className={"strong-text"}>
                            {"Numéro de télephone"}
                        </span>
                        {": 0465/34 74 37"}
                    </p>
                    <p>
                        <span className={"strong-text"}> {"Code postal"} </span>
                        {": 4000"}
                    </p>
                    <p>
                        <span className={"strong-text"}> {"Ville"} </span>
                        {": Liège"}
                    </p>
                    <p>
                        {`Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.`}
                    </p>
                </div>
                <div className={"col-portfolio"}>
                    <div
                        className={"img-portfolio-cv"}
                        id={"img-portfolio-cv-project-1"}>
                        <div className={"buttons-container"}>
                            <button className={"button-github"} type={"button"}>
                                {"Github"}
                            </button>
                            <button
                                className={"button-website"}
                                type={"button"}>
                                {"Website"}
                            </button>
                        </div>
                    </div>
                    <div
                        className={"img-portfolio-cv"}
                        id={"img-portfolio-cv-project-2"}>
                        <div className={"buttons-container"}>
                            <button className={"button-github"} type={"button"}>
                                {"Github"}
                            </button>
                            <button
                                className={"button-website"}
                                type={"button"}>
                                {"Website"}
                            </button>
                        </div>
                    </div>
                    <div
                        className={"img-portfolio-cv"}
                        id={"img-portfolio-cv-project-3"}>
                        <div className={"buttons-container"}>
                            <button className={"button-github"} type={"button"}>
                                {"Github"}
                            </button>
                            <button
                                className={"button-website"}
                                type={"button"}>
                                {"Website"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"container-cv"}>
                <div className={"col-cv"}>
                    <div className={"col-left"}>
                        <div className={"content-col-right"}>
                            <p> {"PERSONAL STATEMENT"} </p>
                        </div>
                    </div>
                    <div className={"col-right"}>
                        <div className={"content-col-right"}>
                            <p>
                                {`I am a highly organized and efficient young individual. My motivation and commitment will prove excellent in challenging work environments. I will be professional, productive and eager to be a proactive member of your team. I would describe myself as a very well-spoken person and passionate about coding.`}
                            </p>
                        </div>
                    </div>
                    <div className={"col-left"}>
                        <div className={"content-col-left"}>
                            <p> {"SKILLS"} </p>
                        </div>
                    </div>
                    <div className={"col-right"}>
                        <div className={"content-col-right"} id={"skills"}>
                            <span>{"Programing langages"}</span>
                            <br />
                            <span>
                                {
                                    "HTML5, CSS3 && SASS, Javascript, Node JS (Basics), React"
                                }
                            </span>
                            <br />
                            <span>{"Languages"}</span>
                            <div className={"right-grid"}>
                                <div className={"row-right-grid"}>
                                    <div className={"grid-col-right"}>
                                        <p> {"French"} </p>
                                    </div>
                                    <div className={"grid-col-right"}>
                                        <p> {"Fluent"} </p>
                                    </div>
                                </div>
                                <div className={"row-right-grid"}>
                                    <div className={"grid-col-right"}>
                                        <p> {"English"} </p>
                                    </div>
                                    <div className={"grid-col-right"}>
                                        <p> {"Fluent"} </p>
                                    </div>
                                </div>
                                <div className={"row-right-grid"}>
                                    <div className={"grid-col-right"}>
                                        <p> {"Dutch"} </p>
                                    </div>
                                    <div className={"grid-col-right"}>
                                        <p> {"Notions"} </p>
                                    </div>
                                </div>
                                <div className={"row-right-grid"}>
                                    <div className={"grid-col-left"}>
                                        <p> {"Somali"} </p>
                                    </div>
                                    <div className={"grid-col-right"}>
                                        <p> {"Fluent"} </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={"col-left"}>
                        <div className={"content-col-left"}>
                            <p>{"EDUCATION"}</p>
                        </div>
                    </div>
                    <div className={"col-right"}>
                        <div className={"content-col-right"}>
                            <div className={"right-grid"}>
                                <div className={"row-right-grid"}>
                                    <div className={"grid-col-right"}>
                                        <p> {"05/2019–03/2019"} </p>
                                    </div>
                                    <div className={"grid-col-right"}>
                                        <p> {"Internship at Becode Liège"} </p>
                                    </div>
                                </div>
                                <div className={"row-right-grid"}>
                                    <div className={"grid-col-right"}>
                                        <p> {"02/2018–05/2019"} </p>
                                    </div>
                                    <div className={"grid-col-right"}>
                                        <p>
                                            {"Self-taught HTML5, CSS3  and JS"}
                                        </p>
                                    </div>
                                </div>
                                <div className={"row-right-grid"}>
                                    <div className={"grid-col-right"}>
                                        <p> {"2014–2018"} </p>
                                    </div>
                                    <div className={"grid-col-right"}>
                                        <p>
                                            {
                                                "Bachelor’s Degree in accounting at HEPL(-1 courses)"
                                            }
                                        </p>
                                    </div>
                                </div>
                                <div className={"row-right-grid"}>
                                    <div className={"grid-col-right"}>
                                        <p> {"2013–2014"} </p>
                                    </div>
                                    <div className={"grid-col-right"}>
                                        <p>
                                            {
                                                "First year in university (University of Liège)"
                                            }
                                        </p>
                                    </div>
                                </div>
                                <div className={"row-right-grid"}>
                                    <div className={"grid-col-right"}>
                                        <p> {"2012–2013"} </p>
                                    </div>
                                    <div className={"grid-col-right"}>
                                        <p> {"CESS"} </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={"col-left"}>
                        <div className={"content-col-left"}>
                            <p>{"LEISURE"}</p>
                        </div>
                    </div>
                    <div className={"col-right"}>
                        <div className={"content-col-right"}>
                            <p>
                                {`I enjoy socializing and planning outings with both friends and family, often walking or running to accomplish a healthy amount of exercise. I like practicing Fitness to collect my forces to face all the bugs.`}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
