import { JSX, useState, useEffect } from "react";

import { Project } from "../../models/project/project";
import { ProjectCard } from "./project.card";

import projectsData from "../../data/projects.json";

export function ProjectSlider(): JSX.Element {
    const projects: Project[] = projectsData as Project[];

    const [selectedCarouselIndex, setSelectedCarouselIndex] = useState<number>(0);
    const [direction, setDirection] = useState<boolean>(false);

    const changeCarouselCard = (direction: boolean): void => {  //direction = true => left, otherwise, right
        const carouselDivs = document.querySelectorAll(".carousel-card");

        if (carouselDivs) {
            carouselDivs[selectedCarouselIndex].classList.add(direction ? "animation-slide-right-out" : "animation-slide-left-out");
        }

        let newIndex: number = Math.abs((direction ? selectedCarouselIndex - 1 : selectedCarouselIndex + 1) % 2);
        setTimeout(() => {
            setSelectedCarouselIndex(newIndex);
            setDirection(direction);
        }, 300);
    };

    const playAnimation = (): void => {
        const carouselDivs = document.querySelectorAll(".carousel-card");

        if (carouselDivs) {
            carouselDivs[selectedCarouselIndex].classList.add(direction ? "animation-slide-left-in" : "animation-slide-right-in");
        }
    };

    useEffect(() => {
        playAnimation();
    }, [selectedCarouselIndex]);

    return (
        <div className="flex flex-col justify-center items-center">
            {
                projects.map((project: Project, idx: number) => (
                    <ProjectCard project={project} hidden={idx !== selectedCarouselIndex} />
                ))
            }
            <div>
                <button onClick={() => changeCarouselCard(true)}>{"<"}</button>
                <button onClick={() => changeCarouselCard(false)}>{">"}</button>
            </div>
        </div>
    )
}