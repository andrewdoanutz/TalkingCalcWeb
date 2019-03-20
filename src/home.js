import React, { Component } from 'react';
import './css/home.css';
import "./css/updates.css"
import Typing from './components/typing';

import demo from "./demo.mp4"

export default class Home extends Component {
  

        render() {
          return(
            <div>
              <Typing/>

            <div className="homebox">
            <div className="picbox">
            <video width="70%" height="55%" controls>
            <source src={demo} type="video/mp4"/>
            </video>
            </div>
          <strong className="homehead">Abstract</strong>
          <div className="hometext">  
          In this project we will attempt to create a balancing unit which will communicate with the dev kit, and light up LEDs and play a tone more rapidly the more unbalanced the unit gets. We will have a MPU to measure the angle of the board. The gyroscope MPU will be connected via I2C, and the LEDs will be connected via GPIO. 
          </div>
           <div className="homehead">Components</div>
             <ol className="hometext component">
               <li>MPU-6050 3 Axis Gyro With Accelerometer Sensor Module For Arduino</li>
               <li>Chanzon 100pcs 3mm LEDs </li>
             </ol>
            <div className="homehead">Goals</div>
            <ol className="hometext component">
               <li>Create working C code</li>
               <li>Interface external components with LPC 4088 Dev Board</li>
               <li>Create external game unit</li>
             </ol>
          </div>
          </div>
          )
        }
        
      
        
      
        
}
