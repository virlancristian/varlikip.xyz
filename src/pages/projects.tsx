import { JSX } from 'react';

import { ProjectSlider } from '../components/projects/project.slider';

import "../css/projects.css";

export function ProjectsPage(): JSX.Element {
    return (
        <div className="project-slider-container blue-white-gradient flex justify-center items-center">
            <ProjectSlider/>
        </div>
    );
}