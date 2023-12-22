import React, {Component} from "react";
import {Switch, Route} from "react-router-dom";
import Home from "./scenes/Home";
import User from "./scenes/User";
import About from "./scenes/About";
import Contact from "./scenes/Contact";

class MainWindow extends Component{
    render(){
        const availablScenes = [
            {path: '/about', component: <About />},
            {path: '/contact', component: <Contact />},
            {path: '/user', component: <User />},
            {path: '/', component: <Home />},
        ]

        return(
            <div class="mainWindow">
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