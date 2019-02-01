import React, {Component} from 'react';
import Menu from '../Menu';

class About extends Component {
    render() {
        return ( 
        <div>
            <div className = "app" >
                <div >
                    <h2> Page About </h2>
                    <Menu />
                </div> 
            </div>

            <div>
                <p> Vous êtes sur la page About</p> 
            </div> 
        </div>
        )
    }
}

export default About;