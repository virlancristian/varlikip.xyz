import { createBrowserRouter } from "react-router";

import { HomePage } from "../pages/home.page";
import { WorkExperiencePage } from "../pages/work.experience";
import { StudiesPage } from "../pages/studies";
import { ProjectsPage } from "../pages/projects";
import { ContactPage } from "../pages/contact";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />
    },
    {
        path: "/home",
        element: <HomePage />
    },
    {
        path: "/work",
        element: <WorkExperiencePage />
    },
    {
        path: "/studies",
        element: <StudiesPage />
    },
    {
        path: "/projects",
        element: <ProjectsPage />
    },
    {
        path: "/contact",
        element: <ContactPage />
    },
]);