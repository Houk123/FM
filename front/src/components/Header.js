import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Icon from "../icon.png";
import MusicWidget from "./widget/MusicWidget.js";
import Icon_1 from "../icons/11.jpg";
import Icon_2 from "../icons/12.jpg";

class Header extends Component {
    render() {
        const headerLinks = [
            {to: '/user', div: <div className="centered-icon">
                                    <img src={Icon} alt="Icon"></img>
                                    <h1>FM</h1>
                                </div>},
            {to: '/music', div: <div className="box-header__link">
                                    <img src={Icon_2} alt="Icon"></img>
                                    <h1>Музыка</h1>
                                    <MusicWidget />
                                </div>},                            
            {to: '/setting', div: <div className="box-header__link">
                                    <img src={Icon_1} alt="Icon"></img>
                                    <h1>Настройки</h1>
                                </div>},
            {to: '/exit', div: <div className="box-header__link">
                                        <img src={Icon_2} alt="Icon"></img>
                                        <h1>Выйти</h1>
                                    </div>}
        ]

        return(
            <header>
                <div className="header">
                    {headerLinks.map((link, index) =>(
                        <div key={`link_${index}`} className="box-header">
                            <Link to={link.to}>
                                {link.div}
                            </Link>
                        </div>
                    ))}
                </div>
            </header>
        );
    }
}

export default Header;