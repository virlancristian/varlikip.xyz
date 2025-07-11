import { JSX } from "react";

import { Study } from "../models/studies/study";
import { StudyContainer } from "../components/studies/study.container";

import studiesData from "../data/studies.json";
import "../css/gradients.css";

export function StudiesPage(): JSX.Element {
    const studies: Study[] = studiesData as Study[];

    return (
        <div>
            {
                studies.map((study: Study, idx: number) => (
                    <StudyContainer study={study} containerBackgroundClassnames={[idx % 2 === 0 ? "blue-white-gradient" : "black-white-gradient"]}/>
                ))
            }
        </div>
    );
}