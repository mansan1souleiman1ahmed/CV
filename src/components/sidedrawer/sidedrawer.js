import React from "react";
const SideDrawer = props => {
    return (
        <div className={"side-drawer" + (props.show ? "-open" : "-close")}>
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
                        <u>
                            <strong>
                                <p style={{textAlign: "center"}}>
                                    {"Motivation"}
                                </p>
                            </strong>
                        </u>
                        <p>{"jfkdslfjslfjls"}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default SideDrawer;
