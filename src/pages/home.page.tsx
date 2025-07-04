import { JSX } from "react";

import { SectionSearch } from "../components/home/section.search";
import { WhoAmISection } from "../components/home/who.ami.i.section";
import { WhatCanIOffer } from "../components/home/what.can.i.offer";

import "../css/home.css";
import { ContactForm } from "../components/contact/contact.form";

export function HomePage(): JSX.Element {
    return (
        <div className="w-full">
            <SectionSearch />
            <WhoAmISection />
            <WhatCanIOffer />
            <ContactForm isHomePage={true} containerClasses={[]}/>
        </div>
    );
}