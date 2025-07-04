export interface Project {
    title: string;
    description: string;
    technologies: string[];
};

export interface Workplace {
    title: string;
    company: string;
    startDate: string;
    endDate: string;
    skills: string[];
    description: string;
    projects: Project[];
};