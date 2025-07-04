import { JSX } from "react";

import "../../css/desktop.header.css";

export function DesktopHeader(): JSX.Element {
    return (
        <div className="desktop-header hidden bg-black text-white font-clash-grotesk-light text-2xl h-20 flex flex-row items-center">
            <a className="mx-5 hover:underline" href="/">Home</a>
            <a className="mx-5 hover:underline" href="/work">Work experience</a>
            <a className="mx-5 hover:underline" href="/studies">Studies</a>
            <a className="mx-5 hover:underline" href="/projects">Projects</a>
            <a className="mx-5 hover:underline" href="/contact">Contact</a>
        </div>
    );
}