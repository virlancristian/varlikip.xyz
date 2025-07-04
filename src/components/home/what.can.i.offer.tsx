import { JSX, useEffect, useState } from "react";

import softwareSolutionsImg from "../../assets/img/what-can-i-offer-software-solutions-img.jpg";
import valuableTeammateImg from "../../assets/img/what-can-i-offer-valuable-teammate-img.jpeg";

interface CarouselCard {
    imgSrc: string;
    title: string;
    text: string;
}

const CAROUSEL_CARDS: CarouselCard[] = [
    {
        imgSrc: softwareSolutionsImg,
        title: "Quality software solutions",
        text: "From my experience as a Fullstack Developer, I can offer clever software solutions that are efficient, organised, and user-friendly!"
    },
    {
        imgSrc: valuableTeammateImg,
        title: "A valuable teammate",
        text: "Critical thinking, problem solving, open-minded, and communication, those are a few of my soft skills that I can bring to a team and use them to bring out the maximum potential from the team."
    }
]

export function WhatCanIOffer(): JSX.Element {
    const [selectedCarouselIndex, setSelectedCarouselIndex] = useState<number>(0);
    const [direction, setDirection] = useState<boolean>(false);

    const changeCarouselCard = (direction: boolean): void => {  //direction = true => left, otherwise, right
        const carouselDivs = document.querySelectorAll(".carousel-card");

        if(carouselDivs) {
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
        
        if(carouselDivs) {
            carouselDivs[selectedCarouselIndex].classList.add(direction ? "animation-slide-left-in" : "animation-slide-right-in");
        }
    };

    useEffect(() => {
        playAnimation();
    }, [selectedCarouselIndex]);

    return (
        <div className="blue-white-gradient offers-container flex flex-col justify-center items-center text-white offers-carousel what-can-i-offer">
            <h1 className="font-clash-grotesk-semibold text-2xl font-bold my-6 what-can-i-offer-title">What can I offer?</h1>
            <div className="overflow-hidden">
                {
                    CAROUSEL_CARDS.map((card: CarouselCard, idx: number) => (
                        <div className={["carousel-card", idx === selectedCarouselIndex ? "" : "hidden"].join(" flex flex-col items-center offer-carousel-card rounded border border-gray-50 border-opacity-10 p-5 ")}>
                            <img src={card.imgSrc} className="image-box carousel-card-img"/>
                            <h1 className="font-clash-grotesk-semibold text-lg my-4 carousel-card-title">{card.title}</h1>
                            <p className="text-center font-clash-grotesk-light">{card.text}</p>
                        </div>
                    ))
                }
                <div className="flex flex-row justify-between py-3">
                    <button className="text-lg w-24 h-12 rounded border border-gray-50 border-opacity-10" onClick={() => changeCarouselCard(true)}>{"<"}</button>
                    <button className="text-lg w-24 h-12 rounded border border-gray-50 border-opacity-10" onClick={() => changeCarouselCard(false)}>{">"}</button>
                </div>
            </div>
        </div>
    )
}