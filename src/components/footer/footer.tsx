import { JSX } from "react";

import "../../css/footer.css";

export function Footer(): JSX.Element {
    return (
        <div className="flex flex-col items-center py-5 bg-gray-700 text-white font-clash-grotesk-light footer">
            <div className="my-3 flex flex-row items-center">
                © Vîrlan Cristian-Alexandru
                <div className="hidden footer-menu mx-4">
                    <a className="hover:underline" href="/">Home</a>
                    <a className="hover:underline" href="/work">Work experience</a>
                    <a className="hover:underline" href="/studies">Studies</a>
                    <a className="hover:underline" href="/projects">Projects</a>
                    <a className="hover:underline" href="/skills">Skills</a>
                    <a className="hover:underline" href="/contact">Contact</a>
                </div>
            </div>
            <div className="flex flex-col items-center">
                <a href="tel:+40732277476">Phone: +40 732 277 476</a>
                <a href="mailto:+40732277476">E-mail: cristian.virlan1@gmail.com</a>
            </div>
        </div>
    );
}