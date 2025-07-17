import { JSX } from "react"; 

import workplaceData from "../data/workplaces.json";
import { Workplace } from "../models/work/work.place";
import WorkPlace from "../components/work/work.place";

import "../css/gradients.css";

export function WorkExperiencePage(): JSX.Element {
    const workplaces: Workplace[] = workplaceData as Workplace[];

    return (
        <div>
            <title>Work experience - Vîrlan Cristian-Alexandru</title>
            {
                workplaces.map((workplace: Workplace, idx: number) => (
                    <WorkPlace workplace={workplace} containerBackgroundClassname={idx % 2 == 0 ? "blue-white-gradient" : "black-white-gradient"}/>
                ))
            }
        </div>
    );
}