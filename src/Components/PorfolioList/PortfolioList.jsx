import { React, useContext } from "react";
import "./portfolio-list.css";

import { portfolioData } from "../../data/portfolioProjects";

import {
  LanguageObjUsedContext,
  LanguageContext,
} from "../../Provider/LanguageContext";

import linkLIcon from "./../../assets/skills-img/Link-L-Logo.png";
import linkDIcon from "./../../assets/skills-img/Link-D-Logo.png";
import gitHubLIcon from "./../../assets/skills-img/GitHub-Light-Logo.png";
import gitHubDIcon from "./../../assets/skills-img/GitHub-Dark-Logo.png";
import htmlIcon from "./../../assets/skills-img/Html-Logo.png";
import cssIcon from "./../../assets/skills-img/Css-Logo.png";
import jsIcon from "./../../assets/skills-img/Js-Logo.png";
import reactIcon from "./../../assets/skills-img/React-Logo.png";
import reactRouterIcon from "./../../assets/skills-img/React-Router-Logo.png";
import twIcon from "./../../assets/skills-img/Tailwind-Logo.png";
import tsIcon from "./../../assets/skills-img/Typescript-Logo.png";
import nextIcon from "./../../assets/skills-img/Next-bl-Logo.png";

const getIcon = (requirement) => {
  switch (requirement) {
    case "html":
      return htmlIcon;
    case "css":
      return cssIcon;
    case "javascript":
      return jsIcon;
    case "react":
      return reactIcon;
    case "reactrouter":
      return reactRouterIcon;
    case "tailwind":
      return twIcon;
    case "typescript":
      return tsIcon;
    case "next":
      return nextIcon;
  }
};

export function PortfolioList() {
  const languageObjUsed = useContext(LanguageObjUsedContext);
  const language = useContext(LanguageContext);

  return (
    <ul className="project-list flex-column gap-20px">
      {portfolioData.map((project) => (
        <li key={project.id} className="project-list-el">
          <div className="project-el-show flex-column flex-cross-center flex-evenly relative">
            <img
              src={project.img}
              alt={`Image ${project.title}`}
              title={`Image ${project.title}`}
              className="img-bg-project-el shadow-light-small"
            />
            <h2 className="f-bold bg-primary-very-dark-0d6 p-8px radius-8px">
              {project.title}
            </h2>
            <div className="technical-list flex-wrap gap-10px flex-center max-w-70p bg-primary-very-dark-0d6 p-8px radius-8px">
              {project.tecnicalRequirements.map((requirement, index) => {
                /* console.log(project.title, ": ", requirement); */
                return (
                  <img
                    key={`${project.id}-${index}`}
                    className="w-30px"
                    src={getIcon(requirement)}
                    alt={requirement}
                    title={requirement}
                  />
                );
              })}
            </div>
          </div>
          <div className="project-el-details flex-column gap-10px f-size-1d2">
            <p>
              {language === "it"
                ? project.description.italian
                : project.description.english}
            </p>

            <p className="f-size-1">
              {languageObjUsed.exEndLabel} {project.created}
            </p>

            <a
              href={project.linkGithub.length >= 2 ? project.linkGithub : "#"}
              target={project.linkGithub.length >= 2 ? "_blank" : "_self"}
              rel="noopener noreferrer"
              title={`${languageObjUsed.visitProfile} ${
                languageObjUsed.gitHubLabel
              } ${
                languageObjUsed.andLabel
              } ${languageObjUsed.viewLabel.toLowerCase()} ${
                languageObjUsed.codeLabel
              }`}
              className={`${
                project.linkGithub.length < 2 && "opacity-4"
              } btn p-4px radius-8px f-size-1d2 txt-decoration-none txt-c-inherit p-l-20px flex-cross-center gap-10px`}
            >
              <img src={gitHubDIcon} alt="GitHub" className="w-30px" />
              {languageObjUsed.viewLabel} {languageObjUsed.codeLabel}
            </a>

            <a
              href={project.linkProject.length >= 2 ? project.linkProject : "#"}
              target={project.linkProject.length >= 2 ? "_blank" : "_self"}
              rel="noopener noreferrer"
              title={`${languageObjUsed.followLink} ${
                languageObjUsed.andLabel
              } ${languageObjUsed.tryLabel.toLowerCase()} ${
                languageObjUsed.projectLabel
              }`}
              className={`${
                project.linkProject.length < 2 && "opacity-4"
              } btn p-4px radius-8px f-size-1d2 txt-decoration-none txt-c-inherit p-l-20px flex-cross-center gap-10px`}
            >
              <img src={linkDIcon} alt="Project" className="w-30px" />
              {languageObjUsed.tryLabel} {languageObjUsed.projectLabel}
            </a>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default PortfolioList;
