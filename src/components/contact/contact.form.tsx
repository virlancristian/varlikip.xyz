import { ChangeEvent, JSX, useEffect, useState } from "react";
import classNames from "classnames";
import axios, { AxiosError, AxiosResponse, HttpStatusCode } from "axios";
import { toast } from "react-toastify";

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

const CONTACT_FORM_LABELS: { [key: string]: string } = {
    "name": "Name",
    "email": "E-mail",
    "message": "Message",
};

const REQUEST_ACCEPT_INTERVAL: number = 60000;  //in milliseconds

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
    const [isRequestLoading, setIsRequestLoading] = useState<boolean>(false);
    const [canSendRequest, setCanSendRequest] = useState<boolean>(true);

    const handleFormChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        const { name, value } = event.target;

        setContactForm((prevContactForm: ContactForm) => ({
            ...prevContactForm,
            [name]: value
        }));
    };

    const handleFormSubmission = async (): Promise<void> => {
        if(!canSendRequest) {
            toast("Wait a minute before sending another form!", { type: "error" });
            return;
        }

        for (const key of Object.keys(contactForm)) {
            if (contactForm[key] === "") {
                toast.error("All fields must be filled!");
                return;
            }
        }
        
        setIsRequestLoading(true);

        try {
            await axios.post(`${process.env.REACT_APP_API_URL}/contact/form/add`, contactForm);
            toast("Form sent successfully!", { type: "success" });
            setContactForm({
                name: "",
                email: "",
                message: ""
            });
            setCanSendRequest(false);
        } catch (error) {
            if(error instanceof AxiosError && error.response) {
                toast(error["response"]["data"]["message"], {
                    type: "error"
                });
            }
        }

        setIsRequestLoading(false);
    };

    useEffect(() => {
        if(!canSendRequest) {
            const interval = setInterval(() => {
                setCanSendRequest(true);
            }, REQUEST_ACCEPT_INTERVAL);

            return () => clearInterval(interval);
        }
    }, [canSendRequest]);

    return (
        <div className={classNames(...containerClasses, "text-white flex flex-col items-center justify-center contact-form")}>
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
                    <button className="bg-blue-800 hover:bg-blue-900 w-24 h-8 rounded font-bold my-5" onClick={handleFormSubmission}>
                        {
                            isRequestLoading ?
                                <svg aria-hidden="true" className="inline w-4 h-4 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                </svg> : "Send"
                        }
                    </button>
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