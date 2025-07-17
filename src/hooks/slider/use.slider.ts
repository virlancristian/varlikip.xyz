import { useState, useEffect } from "react";

export type Direction = "LEFT" | "RIGHT";

const CAROUSEL_CARD_CLASS: string = "carousel-card";

const SLIDE_IN_CLASSES: { [key: string]: string } = {
    "LEFT": "animation-slide-left-in",
    "RIGHT": "animation-slide-right-in"
};

const SLIDE_OUT_CLASSES: { [key: string]: string } = {
    "LEFT": "animation-slide-right-out",
    "RIGHT": "animation-slide-left-out"
};

export const useSlider = (cardNumber: number): {
    selectedIndex: number,
    changeSliderCard: (direction: Direction) => void
} => {
    const [selectedIndex, setSelectedIndex] = useState<number>(0);
    const [direction, setDirection] = useState<Direction>("RIGHT");

    const getCarouselCards = (): NodeListOf<HTMLElement> => {
        return document.querySelectorAll<HTMLElement>(`.${CAROUSEL_CARD_CLASS}`);
    }

    const changeSliderCard = (direction: Direction): void => { 
        const carouselCards: NodeListOf<HTMLElement> = getCarouselCards();

        carouselCards[selectedIndex].classList.add(SLIDE_OUT_CLASSES[direction]);

        let newIndex: number = Math.abs((direction === "LEFT" ? selectedIndex - 1 + cardNumber : selectedIndex + 1) % cardNumber);
        setTimeout(() => {
            setSelectedIndex(newIndex);
            setDirection(direction);
        }, 300);
    };

    const playAnimation = (): void => {
        const carouselCards: NodeListOf<HTMLElement> = getCarouselCards();

        carouselCards[selectedIndex].classList.add(SLIDE_IN_CLASSES[direction]);
    };

    useEffect(() => {
        playAnimation();
    }, [selectedIndex]);

    return {
        selectedIndex: selectedIndex,
        changeSliderCard: changeSliderCard
    };
}