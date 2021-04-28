// Code CoordinatesButton Component Here
import React, { Component} from 'react';

class CoordinatesButton extends Component {
    
    
    coordinates = (event) => {
        // let screenLog = document.querySelector("")
        event.persist();
        let posX = event.clientX;
        let posY = event.clientY;
        let posArray = [posX, posY]
        return posArray;
    }

    render(){
        return(
            <button onClick= {this.props.onReceiveCoordinates(this.coordinates())}></button>
        )
    }



}

export default CoordinatesButton; 
