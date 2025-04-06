import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import MusicWidget from "./widget/MusicWidget.js";

class NavSidebar extends Component {
    render() {
        const headerLinks = [
            {to: '/user', div: <div className="nav-sidebar__link">
                                    <h1>FM</h1>
                                </div>},
            {to: '/music', div: <div className="nav-sidebar__link">
                                    <h1>Музыка</h1>
                                    <MusicWidget />
                                </div>},                            
            {to: '/setting', div: <div className="nav-sidebar__link">
                                    <h1>Настройки</h1>
                                </div>},
            {to: '/exit', div: <div className="nav-sidebar__link">
                                        <h1>Выйти</h1>
                                    </div>}
        ]

        return(
            <nav>
                <div className="nav-sidebar">
                    {headerLinks.map((link, index) =>(
                        <Link key={`link-sidebar_${index}`} to={link.to}>
                            {link.div}
                        </Link>
                    ))}
                </div>
            </nav>
        );
    }
}

export default NavSidebar;