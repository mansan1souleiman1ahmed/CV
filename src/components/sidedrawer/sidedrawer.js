import React from "react";
const SideDrawer = props => {
    return (
        <div className={"side-drawer" + (props.show ? "-open" : "-close")}>
            <div className={"motivation-sidebar-laptop"}>
                <u>
                    <strong>
                        <p>{"Motivation"}</p>
                    </strong>
                </u>
                <p>{`I am a former accounting student who has converted to web development. I can study the basics of programming with online courses like codeacademy.com and freecodecamp.org before enrolling in Becode.During my training I had the opportunity to benefit from an active pedagogy course, the objective of which is to develop professional skills in an incubator that simulates a professional web developer environment. In this way, I was able to develop my ability to learn quickly and efficiently. The training also taught us to cultivate resourcefulness, and the ability to manage projects as a team.I had the opportunity to create projects using different technologies both front-end and back-end. I can mention React.js and Angular 7 for the front end and NodeJS, Laravel and for the back end.However, I must admit that I am more interested in a career in front-end, and am currently learning React and Libraries that makes it easier to manage states like Redux and plans to study frameworks for making TDDs.I am someone who is motivated and passionate about coding. I am ready to learn new technologies. To quote Plato 'I know only one thing, it is that I know nothing! 'but I don't tire of learning what I'm passionate about. 
                        `}</p>
            </div>
            <div className={"container-info-sidebar"}>
                <div className={"picture-container-square-sidebar"}>
                    <div className={"picture-container-round"}></div>
                </div>
                <div className={"text-container-sidebar"}>
                    <strong>
                        <p>{"Mail :"}</p>
                    </strong>
                    <p>{" mansan.souleiman.ahmed@gmail.com"}</p>
                    <strong>
                        <p>{"Phone number :"}</p>
                    </strong>
                    <p>{"32 (0) 465/ 34 74 37"}</p>

                    <strong>
                        <p>{"Addresse :"}</p>
                    </strong>
                    <p>{"Rue Sohet n°11"}</p>
                    <strong>
                        <p>{"Postal Code : "}</p>
                    </strong>
                    <p>{"4000"}</p>
                    <strong>
                        <p>{"Town :"}</p>
                    </strong>
                    <p>{"Liège"}</p>
                    <u>
                        <strong>
                            <p>{"Objectvie"}</p>
                        </strong>
                    </u>

                    <p>
                        {`I am looking for a web development internship. The internship must be
                            at least 1/5 and can last 3 months, starting the 9th December.`}
                    </p>
                    <u>
                        <strong>
                            <p>{"Projects"}</p>
                        </strong>
                    </u>
                </div>
                <div className={"col-portfolio-sidebar"}>
                    <div className={"cv-side-ref"}>
                        <strong>
                            <p>{""}</p>
                        </strong>
                    </div>
                    <div className={"cv-side-ref"}>
                        <strong>
                            <p>{"React project's references"}</p>
                        </strong>
                    </div>
                    <div
                        className={"img-portfolio-cv-sidebar"}
                        id={"img-portfolio-cv-project-1-sidebar"}>
                        <div className={"buttons-container-sidebar"}>
                            <a
                                href={
                                    "https://github.com/mansan1souleiman1ahmed/React-project"
                                }>
                                <button
                                    className={"button-github-sidebar"}
                                    type={"button"}>
                                    {"Github"}
                                </button>
                            </a>
                            <a
                                href={
                                    "https://xenodochial-carson-a9c6e3.netlify.com/"
                                }>
                                <button
                                    className={"button-website-sidebar"}
                                    type={"button"}>
                                    {"Website"}
                                </button>
                            </a>
                        </div>
                    </div>
                    <div className={"cv-side-ref"}>
                        <strong>
                            <p>{"NPM project's references"}</p>
                        </strong>
                    </div>
                    <div
                        className={"img-portfolio-cv-sidebar"}
                        id={"img-portfolio-cv-project-2-sidebar"}>
                        <div className={"buttons-container-sidebar"}>
                            <a
                                href={
                                    "https://github.com/mansan1souleiman1ahmed/Project-WorkSpace "
                                }>
                                <button
                                    className={"button-github-sidebar"}
                                    type={"button"}>
                                    {"Github"}
                                </button>
                            </a>
                            <a
                                href={
                                    "https://www.npmjs.com/package/@mansan/holidates"
                                }>
                                <button
                                    className={"button-website-sidebar"}
                                    type={"button"}>
                                    {"Website"}
                                </button>
                            </a>
                        </div>
                    </div>
                    <div className={"cv-side-ref"}>
                        <strong>
                            <p>{"CV's reference"}</p>
                        </strong>
                    </div>
                    <div
                        className={"img-portfolio-cv-sidebar"}
                        id={"img-portfolio-cv-project-3-sidebar"}>
                        <div className={"buttons-container-sidebar"}>
                            <a
                                href={
                                    "https://github.com/mansan1souleiman1ahmed/CV"
                                }>
                                <button
                                    className={"button-github-sidebar"}
                                    type={"button"}>
                                    {"Github"}
                                </button>
                            </a>
                            <a>
                                <button
                                    className={"button-website-sidebar"}
                                    type={"button"}>
                                    {"CV PDF"}
                                </button>
                            </a>
                        </div>
                    </div>
                    <div className={"cv-side-ref"}>
                        <div className={"motivation-sidebar-tablett-gsm"}>
                            <u>
                                <strong>
                                    <p>{"Motivation"}</p>
                                </strong>
                            </u>
                            <p>{`I am a former accounting student who has converted to web development. I can study the basics of programming with online courses like codeacademy.com and freecodecamp.org before enrolling in Becode.During my training I had the opportunity to benefit from an active pedagogy course, the objective of which is to develop professional skills in an incubator that simulates a professional web developer environment. In this way, I was able to develop my ability to learn quickly and efficiently. The training also taught us to cultivate resourcefulness, and the ability to manage projects as a team.I had the opportunity to create projects using different technologies both front-end and back-end. I can mention React.js and Angular 7 for the front end and NodeJS, Laravel and for the back end.However, I must admit that I am more interested in a career in front-end, and am currently learning React and Libraries that makes it easier to manage states like Redux and plans to study frameworks for making TDDs.I am someone who is motivated and passionate about coding. I am ready to learn new technologies. To quote Plato 'I know only one thing, it is that I know nothing! 'but I don't tire of learning what I'm passionate about. 
                        `}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default SideDrawer;
