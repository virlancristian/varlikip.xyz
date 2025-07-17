import { JSX } from "react";
import classNames from "classnames";

import { Project, Workplace } from "../../models/work/work.place";
import "../../css/fonts.css";
import "../../css/work.experience.css";

interface Props {
    workplace: Workplace
    containerBackgroundClassname: string;
}

export default function WorkPlace(props: Props): JSX.Element {
    const { workplace, containerBackgroundClassname } = props;

    return (
        <div className={classNames(containerBackgroundClassname, 'text-white', 'flex', 'justify-center', 'items-center', 'workplace-container')}>
            <div className="bg-gray-800 bg-opacity-60 w-5/6 rounded flex flex-col items-center p-4 workplace-box">
                <h1 className="font-clash-grotesk-semibold my-2 position">{workplace.title}@{workplace.company}</h1>
                <p className="font-clash-grotesk-light period">{workplace.startDate} - {workplace.endDate}</p>
                <p className="font-clash-grotesk-light my-2 period"><strong className="font-clash-grotesk-semibold">Relevant skills:</strong> {workplace.skills.join(", ")}</p>
                <p className="font-clash-grotesk-light my-2 work-description">{workplace.description}</p>
                <ul className="projects-grid">
                    {
                        workplace.projects.map((project: Project) => (
                            <li className="list-disc mx-3 project">
                                <h3 className="font-clash-grotesk-semibold project-title">{project.title}</h3>
                                <ul className="font-clash-grotesk-light mb-4 project-description">
                                    <li>{project.description}</li>
                                    <li><strong className="font-clash-grotesk-semibold">Technologies used:</strong> {project.technologies.join(", ")}</li>
                                </ul>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}