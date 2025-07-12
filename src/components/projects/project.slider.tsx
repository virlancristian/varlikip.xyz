import { JSX, useState, useEffect } from "react";

import { Project } from "../../models/project/project";
import { ProjectCard } from "./project.card";

import projectsData from "../../data/projects.json";
import { Direction, useSlider } from "../../hooks/slider/use.slider";
import classNames from "classnames";

let direction: Direction = "LEFT";

const navButtonCSSClasses = [
    "bg-gray-800",
    "bg-opacity-60",
    "text-white",
    "rounded",
    "w-16",
    "h-8",
    "mx-16",
    "project-navigation-button",
    "hover:bg-opacity-80"
];

export function ProjectSlider(): JSX.Element {
    const projects: Project[] = projectsData as Project[];

    const {
        selectedIndex,
        changeSliderCard
    } = useSlider(projects.length);

    return (
        <div className="flex flex-col justify-center items-center">
            {
                projects.map((project: Project, idx: number) => (
                    <ProjectCard project={project} hidden={idx !== selectedIndex} />
                ))
            }
            <div className="flex flex-row justify-between mt-3">
                <button
                    className={classNames(...navButtonCSSClasses)} 
                    onClick={() => {
                    direction = "LEFT";
                    changeSliderCard(direction);
                }}>{"<"}</button>
                <button
                    className={classNames(...navButtonCSSClasses)} 
                    onClick={() => {
                    direction = "RIGHT";
                    changeSliderCard(direction);
                }}>{">"}</button>
            </div>
        </div>
    )
}