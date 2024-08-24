import { React, useContext, useEffect } from "react";
import "./code-page.css";

import { PortfolioList } from "./../../Components/PorfolioList/PortfolioList";
import { LanguageObjUsedContext } from "../../Provider/LanguageContext";
import { PageContext, SetPageContext } from "../../Provider/PageContext";

import gitHubLIcon from "./../../assets/skills-img/GitHub-Light-Logo.png";
import gitHubDIcon from "./../../assets/skills-img/GitHub-Dark-Logo.png";
import htmlIcon from "./../../assets/skills-img/Html-Logo.png";
import cssIcon from "./../../assets/skills-img/Css-Logo.png";
import jsIcon from "./../../assets/skills-img/Js-Logo.png";
import reactIcon from "./../../assets/skills-img/React-Logo.png";
import reactRouterIcon from "./../../assets/skills-img/React-Router-Logo.png";
import twIcon from "./../../assets/skills-img/Tailwind-Logo.png";
import tsIcon from "./../../assets/skills-img/Typescript-Logo.png";
import linkedinIcon from "./../../assets/skills-img/LinkedIn-Logo.png";
import contactsIcon from "./../../assets/skills-img/Contacts-Dark-Logo.png";

export function CodePage() {
  const languageObjUsed = useContext(LanguageObjUsedContext);

  const pageSelected = useContext(PageContext);
  const setPageSelected = useContext(SetPageContext);

  const skills = [
    { id: crypto.randomUUID(), label: "GitHub", icon: gitHubLIcon },
    { id: crypto.randomUUID(), label: "HTML", icon: htmlIcon },
    { id: crypto.randomUUID(), label: "CSS", icon: cssIcon },
    { id: crypto.randomUUID(), label: "JavaScript", icon: jsIcon },
    { id: crypto.randomUUID(), label: "React", icon: reactIcon },
    { id: crypto.randomUUID(), label: "ReactRouter", icon: reactRouterIcon },
    { id: crypto.randomUUID(), label: "Tailwind", icon: twIcon },
    { id: crypto.randomUUID(), label: "TypeScript", icon: tsIcon },
  ];

  const links = [
    {
      icon: linkedinIcon,
      url: "https://www.linkedin.com/in/lorenzoliva/",
      label: languageObjUsed.linkedinLabel,
      id: self.crypto.randomUUID(),
    },
    {
      icon: gitHubDIcon,
      url: "https://github.com/Lorenzolivacode",
      label: languageObjUsed.gitHubLabel,
      id: self.crypto.randomUUID(),
    },
    {
      icon: contactsIcon,
      url: "#section-contacts",
      label: languageObjUsed.contactsLabel,
      id: self.crypto.randomUUID(),
    },
  ];

  useEffect(() => {
    if (pageSelected !== "dev") {
      setPageSelected("dev");
    }
  }, [pageSelected]);

  return (
    <div className="code-main-direction-screen w-full">
      <section className="section-code-page flex-center flex-column gap-30px">
        <h2 className="f-bold f-size-2">{languageObjUsed.skillsLabel}</h2>
        <div className="skills-container flex-wrap flex-center">
          {skills.map((skill) => (
            <div key={skill.id} className="img-skill-container">
              <img src={skill.icon} alt={skill.label} title={skill.label} />
              <p className="skill-label txt-center f-bold f-size-1d2 txt-c-primary-very-light">
                {skill.label}
              </p>
            </div>
          ))}
        </div>
      </section>
      <section className="section-code-page flex-center flex-center flex-column gap-30px">
        <h2 className="f-bold f-size-2">{languageObjUsed.linkLabel}</h2>
        <ul className="flex-column gap-30px w-full">
          {links.map((link) => {
            return (
              <li
                key={link.id}
                title={`${
                  link.url !== "#section-contacts"
                    ? languageObjUsed.visitProfile
                    : languageObjUsed.goToLabel
                } ${link.label}`}
              >
                <a
                  href={link.url}
                  target={link.url !== "#section-contacts" ? "_blank" : "_self"}
                  rel={
                    link.url !== "#section-contacts"
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="link-el flex-center flex-evenly shadow-light-small radius-20px p-8px txt-c-primary-very-dark f-size-1d8 f-bold txt-decoration-none bg-primary-very-light"
                >
                  <img src={link.icon} alt={link.label} />
                  <p className="f-bold">{link.label}</p>
                </a>
              </li>
            );
          })}
        </ul>
      </section>
      <section className="section-code-page flex-center flex-column gap-30px">
        <h2 className="f-bold f-size-2">{languageObjUsed.portfolioLabel}</h2>
        <PortfolioList />
      </section>
    </div>
  );
}

export default CodePage;
