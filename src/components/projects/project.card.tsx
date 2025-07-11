import { JSX } from "react";
import { Project } from "../../models/project/project";
import classNames from "classnames";

interface Props {
    project: Project;
    hidden: boolean;
}

export function ProjectCard(props: Props): JSX.Element {
    const {
        project,
        hidden,
    } = props;

    return (
        <div className={classNames(hidden ? "hidden" : "", "text-white", "carousel-card")}>
            <h1>{project.title}</h1>
            <ul>
                <li>{project.description}</li>
                <li>Techonolgies used: {project.technologies.join(", ")}</li>
                {
                    project.source !== "" && (
                        <li>
                            <a href={project.source}>Source code</a>
                        </li>
                    )
                }
                {
                    project.url !== "" && (
                        <li>
                            <a href={project.url}>Check out the application!</a>
                        </li>
                    )
                }
            </ul>
        </div>
    )
}