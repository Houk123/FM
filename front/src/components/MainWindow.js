import React, {Component} from "react";
import {Switch, Route} from "react-router-dom";
import Message from "./scenes/Message";
import User from "./scenes/User";
import Friends from "./scenes/Friends";
import Music from "./scenes/Music";
import Setting from "./scenes/Setting";
import Contact from "./scenes/Contact";
import About from "./scenes/About";

class MainWindow extends Component{
    render(){
        const availablScenes = [
            {path: '/user', component: <User />},
            {path: '/message', component: <Message />},
            {path: '/friends', component: <Friends />},
            {path: '/music', component: <Music />},
            {path: '/setting', component: <Setting />},
            {path: '/contact', component: <Contact />},
            {path: '/about', component: <About />},
        ]

        return(
            <div class="container">
                <Switch>
                    {availablScenes.map((scene) => (
                        <Route key={scene.path} path={scene.path}>
                            {scene.component}    
                        </Route>
                    ))}
                </Switch>
            </div>
        )
    }
}

export default MainWindow;