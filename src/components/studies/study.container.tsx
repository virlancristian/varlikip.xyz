import { JSX } from "react"
import classNames from "classnames";

import { Study } from "../../models/studies/study"

import "../../css/studies.css";

interface Props {
    study: Study;
    containerBackgroundClassnames: string[]
}

export function StudyContainer(props: Props): JSX.Element {
    const {
        study,
        containerBackgroundClassnames
    } = props;

    return (
        <div className={classNames(...containerBackgroundClassnames, "text-white", "study-container", "flex", "justify-center", "items-center")}>
            <div className="bg-gray-800 bg-opacity-60 w-5/6 rounded flex flex-col items-center justify-center p-4">
                <h1 className="text-center font-clash-grotesk-semibold mb-3 text-lg">{study.degree} @ {study.faculty}, {study.university}</h1>
                <p className="font-clash-grotesk-light text-lg my-2">{study.startDate} - {study.endDate}</p>
                <p className="font-clash-grotesk-light text-center my-2">{study.description}</p>
                <h3 className="font-clash-grotesk-semibold mb-3">Relevant courses:</h3>
                <ul>
                    {
                        study.courses.map((course: string) => (
                            <li className="font-clash-grotesk-light list-disc w-fit">{course}</li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}