import { JSX } from "react";

import { ContactForm } from "../components/contact/contact.form";

export function ContactPage(): JSX.Element {
    return (
        <div>
            <title>Contact - Vîrlan Cristian-Alexandru</title>
            <ContactForm isHomePage={false} containerClasses={["blue-white-gradient", "min-height-95vh"]} />
        </div>
    );
}