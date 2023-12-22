import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Icon from "../icon.png";

class Header extends Component {
    render() {
        const headerLinks = [
            {to: '/user', h1: "Пользователи"},
            {to: '/', h1: 'Главное окно'},
        ]

        return(
            <header>
                <div class="header">
                    {headerLinks.map((link) =>(
                        <div class="box-header">
                            <Link to={link.to}>
                                {link.h1}
                            </Link>
                        </div>
                    ))}
                    <div class="centered-icon">
                        <img src={Icon} alt="Icon"></img>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;