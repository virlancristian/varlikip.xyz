import axios, { AxiosError, AxiosResponse, HttpStatusCode } from "axios";
import { ChangeEvent, JSX, useState } from "react";
import { toast } from "react-toast";

import emailIcon from "../../assets/img/contact-email-icon.png";
import phoneIcon from "../../assets/img/contact-phone-icon.png";
import linkedinIcon from "../../assets/img/contact-linkedin-icon.png";

import "../../css/contact.form.css";

interface Props {
    isHomePage: boolean;
    containerClasses: string[];
}

interface ContactForm {
    name: string;
    email: string;
    message: string;
}

interface ApiContactFormAddResponse {
    contactForm: {
        name: string;
        email: string;
        message: string;
    };
    errorMessage: string;
}

export function ContactForm(props: Props): JSX.Element {
    const { 
        isHomePage,
        containerClasses, 
    } = props;
    const [contactForm, setContactForm] = useState<ContactForm | any>({
        name: "",
        email: "",
        message: ""
    });
    const CONTACT_FORM_LABELS: { [key: string]: string } = {
        "name": "Name",
        "email": "E-mail",
        "message": "Message",
    };
    
    const handleFormChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        const { name, value } = event.target;
        
        setContactForm((prevContactForm: ContactForm) => ({
            ...prevContactForm,
            [name]: value
        }));
    };

    const handleFormSubmission = async (): Promise<void> => {
        for(const key of Object.keys(contactForm)) {
            if(contactForm[key] === "") {
                toast.error("All fields must be filled!");
                return;
            }
        }

        try {
            const response: AxiosResponse<ApiContactFormAddResponse> = await axios.post(`${process.env.REACT_APP_API_URL}/api/contact/form/add`, contactForm);

            if(response.status === HttpStatusCode.Ok) {
                toast.success("Form sent successfully!");
            }
        } catch(error: AxiosError<ApiContactFormAddResponse> | any) {
            toast.error(error["response"]["data"]["errorMessage"]);
        }
    };

    return (
        <div className="black-white-gradient text-white flex flex-col items-center justify-center contact-form">
            <h1 className="text-2xl font-clash-grotesk-semibold text-center my-3">{isHomePage ? "So what are you waiting? Send a messsage!" : "Contact"}</h1>
            <div className="flex flex-col justify-center items-center contact-form-content">
                <div className="flex flex-col justify-center items-center">
                    {
                        Object.keys(contactForm).map((key: string) => (
                            <div className="flex flex-row justify-between my-2 w-72 items-center contact-form-row">
                                <p className="font-clash-grotesk-light text-white text-bg">{CONTACT_FORM_LABELS[key]}</p>
                                {
                                    key === "message" ? 
                                    <textarea className="bg-gray-300 text-black p-1 rounded focus:outline-none h-24" name={key} value={contactForm[key]} onChange={handleFormChange}></textarea> :
                                    <input className="bg-gray-300 text-black p-1 rounded focus:outline-none" name={key} value={contactForm[key]} onChange={handleFormChange} />
                                }
                            </div>
                        ))
                    }
                    <button className="bg-blue-800 hover:bg-blue-900 w-24 h-8 rounded font-bold my-5" onClick={handleFormSubmission}>Send</button>
                </div>
                <p className="or">or</p>
                <div className="flex flex-col items-center">
                    <h4 className="font-clash-grotesk-semibold text-xl my-5">Find me here</h4>
                    <table className="my-1">
                        <tr>
                            <td className="pr-3"><img className="contact-icon" src={emailIcon}></img></td>
                            <td><a href="mailto:cristian.virlan1@gmail.com">cristian.virlan1@gmail.com</a></td>
                        </tr>
                        <tr>
                            <td className="pr-3"><img className="contact-icon" src={phoneIcon}></img></td>
                            <td><a href="tel:+40732277476">+40 732 277 476</a></td>
                        </tr>
                        <tr>
                            <td className="pr-3"><img className="contact-icon" src={linkedinIcon}></img></td>
                            <td><a href="https://www.linkedin.com/in/cristian-alexandru-virlan-b8a44125b/">Cristian-Alexandru Virlan</a></td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    )
}