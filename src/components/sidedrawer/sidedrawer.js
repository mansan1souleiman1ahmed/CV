import React from "react";
const SideDrawer = props => {
    return (
        <div className={"side-drawer" + (props.show ? "-open" : "-close")}>
            <div className={"container-info-sidebar"}>
                <div className={"picture-container-square-sidebar"}>
                    <div className={"picture-container-round"}></div>
                </div>
                <div className={"text-container-sidebar"}>
                    <p>
                        <span className={"strong-text"}>{"Email"} </span>
                        {": mansan.souleiman.ahmed@gmail.com"}
                    </p>
                    <p>
                        <span className={"strong-text"}>
                            {"Numéro de télephone"}
                        </span>
                        {": 0465/34 74 37"}
                    </p>
                    <p>
                        <span className={"strong-text"}>{"Code postal"}</span>
                        {": 4000"}
                    </p>
                    <p>
                        <span className={"strong-text"}>{"Ville"}</span>
                        {": Liège"}
                    </p>
                    <p>{`Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.`}</p>
                </div>
                <div className={"col-portfolio-sidebar"}>
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
                </div>
            </div>
        </div>
    );
};
export default SideDrawer;
