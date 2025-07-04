import { createContext, useState, JSX, useEffect } from "react";

import "../css/mobile.menu.css";

interface Props {
    openMenu: () => void;
}

export const MobileMenuContext = createContext<Props>({
    openMenu: () => {}
});

export function MobileMenuContextProvider({ children }: { children: any }): JSX.Element {
    const [isMenuHidden, setIsMenuHidden] = useState<boolean>(true);

    const openMenu = (): void => {
        setIsMenuHidden(false);
    };

    const closeMenu = (): void => {
        const menuDiv = document.querySelector('.mobile-menu-list');

        if(menuDiv) {
            menuDiv.setAttribute("id", "slide-right-container");
            
        }
        
        setTimeout(() => {
            setIsMenuHidden(true);
        }, 90);
    };

    useEffect(() => {
    }, [isMenuHidden])

    return (
        <MobileMenuContext.Provider value={{ openMenu }}>
            {children}
            {
                !isMenuHidden &&
                <div 
                    className="mobile-menu absolute inset-0 bg-gray-600 bg-opacity-60 flex justify-end p-0"
                    onClick={closeMenu}
                    >
                    <ul className="mobile-menu-list bg-black text-white m-0 text-bold p-3 z-20">
                        <li className="my-3"><a href="/">Home</a></li>
                        <li className="my-3"><a href="/work">Work experience</a></li>
                        <li className="my-3"><a href="/studies">Studies</a></li>
                        <li className="my-3"><a href="/projects">Projects</a></li>
                        <li className="my-3"><a href="/contact">Contact</a></li>
                    </ul>
                </div>
            }
        </MobileMenuContext.Provider>
    );
}