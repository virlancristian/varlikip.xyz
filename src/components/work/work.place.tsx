import { JSX } from "react";
import { Project, Workplace } from "../../models/work/work.place";

interface Props {
    workplace: Workplace
}

export default function WorkPlace(props: Props): JSX.Element {
    const { workplace } = props;

    return (
        <div>
            <h1>{workplace.title}@{workplace.company}</h1>
            <p>Relevant skills: {workplace.skills.join(", ")}</p>
            <p>{workplace.description}</p>
            <ul>
                {
                    workplace.projects.map((project: Project) => (
                        <li>
                            <h3>{project.title}</h3>
                            <ul>
                                <li>{project.description}</li>
                                <li>Technologies used: {project.technologies.join(", ")}</li>
                            </ul>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}