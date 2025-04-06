import React, {Component} from 'react';

class MusicWidget extends Component{
    render(){
        return(
            <article className="widget widget--music" style={{display: "none"}}>
                <h1>Музыка</h1>
            </article>
        );
    }
}

export default MusicWidget;