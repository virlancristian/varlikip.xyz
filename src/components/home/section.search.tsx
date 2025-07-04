import { ChangeEvent, JSX, useState } from "react";
import { useNavigate } from "react-router";

export function SectionSearch(): JSX.Element {
    const [path, setPath] = useState<string>("");
    const navigate = useNavigate();

    const changePath = (event: ChangeEvent<HTMLSelectElement>): void => {
        const value: string = event.target.value;

        if(value === "") {
            return;
        }

        setPath(value);
    };

    const browseSection = (): void => {
        navigate(`/${path}`);
    };

    return (
        <div className="w-full blue-white-gradient h-96 flex flex-col justify-center items-center section-search">
            <h1 className="text-3xl text-white font-clash-grotesk-semibold animation-slide-up-fade">Vîrlan Cristian-Alexandru</h1>
            <p className="text-white font-clash-grotesk-light animation-slide-up-fade text-lg">The best for software solutions</p>
            <select
                className="my-2 rounded font-clash-grotesk-light w-56 h-10 text-center animation-fade-in"
                onChange={changePath}>
                <option value="">Browse sections</option>
                <option value="work">Work experience</option>
                <option value="studies">Studies</option>
                <option value="projects">Projects</option>
            </select>
            <button
                className="text-black font-clash-grotesk-light font-semibold my-2 rounded bg-gray-100 w-32 h-10 hover:bg-gray-200 animation-fade-in" 
                onClick={browseSection}>
                    Browse
            </button>
        </div>
    )
}