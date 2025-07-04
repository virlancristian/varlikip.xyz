import { JSX } from "react"; 

import workplaceData from "../data/workplaces.json";
import { Workplace } from "../models/work/work.place";
import WorkPlace from "../components/work/work.place";

export function WorkExperiencePage(): JSX.Element {
    const workplaces: Workplace[] = workplaceData as Workplace[];

    return (
        <div>
            {
                workplaces.map((workplace: Workplace) => (
                    <WorkPlace workplace={workplace} />
                ))
            }
        </div>
    );
}