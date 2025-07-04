import { JSX, useContext } from "react";

import "../../css/mobile.header.css";
import { MobileMenuContext } from "../../hooks/mobile.menu.context";

export function MobileHeader(): JSX.Element {
    const { openMenu } = useContext(MobileMenuContext);

    return (
        <div className="mobile-header">
            <div 
                className="text-lg flex items-center justify-center mr-2"
                onClick={openMenu}>Menu</div>
        </div>
    );
}