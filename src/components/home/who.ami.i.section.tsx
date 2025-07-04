import { JSX } from "react";

import profilePhoto from "../../assets/img/the-honored-one.jpg";

export function WhoAmISection(): JSX.Element {
    return (
        <div className="w-full h-96 flex flex-col items-center justify-center black-white-gradient who-am-i">
            <h1 className="text-white text-2xl font-clash-grotesk-semibold animation-fade-in">Who am I?</h1>
            <div className="flex flex-row items-center">
                <img className="hidden profile-photo mx-5" src={profilePhoto}></img>
                <p className="text-white font-clash-grotesk-light my-3 w-96 text-center contrast-100 text-lg text-shadow-md animation-fade-in">
                    Graduated with a Bachelor's Degree from the Faculty of Automatic Control & Computer Science, aiming to pursue my Master's Degree,
                    I am an open-minded and communicative person, very passionate about the world of programming and computer science,
                    ready for new collaboration opportunities!
                </p>
            </div>
        </div>
    )
}