import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Footer extends Component{
    render(){
        return(
            <footer class="footer">
                <div>
                    <h3>
                        <Link to="/contact">Контакт</Link>
                    </h3>
                    <h3>
                        <Link to="/about">О нас</Link>
                    </h3>
                </div>
            </footer>
        );
    }
}

export default Footer;