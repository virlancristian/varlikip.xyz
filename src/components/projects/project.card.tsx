import { JSX } from "react";
import classNames from "classnames";

import { Project } from "../../models/project/project";

interface Props {
    project: Project;
    hidden: boolean;
}

const listElementCSSClasses: string[] = [
    "font-clash-grotesk-light",
    "text-lg",
    "list-disc",
    "w-5/6",
    "my-1"
];

const linkCSSClasses: string[] = [
    "text-blue-500"
];

export function ProjectCard(props: Props): JSX.Element {
    const {
        project,
        hidden,
    } = props;

    return (
        <div className={classNames(hidden ? "hidden" : "", "text-white carousel-card bg-gray-800 bg-opacity-60 project-card rounded-xl flex flex-col items-center overflow-hidden")}>
            <h1 className="font-clash-grotesk-semibold text-lg my-2 w-5/6 text-center">{project.title}</h1>
            <ul className="flex flex-col items-center">
                <li className={classNames(...listElementCSSClasses)}>{project.description}</li>
                <li className={classNames(...listElementCSSClasses)}>Techonolgies used: {project.technologies.join(", ")}</li>
                {
                    project.source !== "" && (
                        <li className={classNames(...listElementCSSClasses)}>
                            <a href={project.source} className={classNames(...linkCSSClasses)}>Source code</a>
                        </li>
                    )
                }
                {
                    project.url !== "" && (
                        <li className={classNames(...listElementCSSClasses)}>
                            <a href={project.url} className={classNames(...linkCSSClasses)}>Check out the application!</a>
                        </li>
                    )
                }
            </ul>
        </div>
    )
}