import React, { Component } from 'react';
import './css/home.css';
import "./css/updates.css"
import Typing from './components/typing';
import demo from "./demo.mp4"
import ReactEmbedGist from 'react-embed-gist';



export default class Home extends Component {
  

        render() {
          return(
            <div>
              <Typing/>
              <div className="homebox">
                <div className="homehead">Demo</div>
                <div className='hometext'></div>
                  <div className="picbox">
                  <video width="70%" height="60%" controls>
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
                    <li>Create external balancing unit</li>
                  </ol>
                <div className="homehead">Report</div>
                <div className="hometext">Initially, our project idea was to create a jukebox that would play sound out of an external speaker via I2S according to buttons that would be interfaced with the board through I2C. The hardest part of the project that we spent the most time on was figuring out how to play audio. Initially, we were planning to use an external speaker, but it proved to be far too complicated. We then moved to using the onboard speaker. To get this to play music, we had to write a custom Python script that extracted the PCM data in a 16 bit number. We got the speaker to play music from the SD card, but this ultimately did not end up in our final project as we had to pivot to a new idea. We got the buttons to respond to our initial tests, however, we believe we may have short circuited or fried the button board, as when we tested it again, only two buttons were responding. This caused us to have to buy the MPU to get a new I2C peripheral working. We also managed to get the display working, but could not think of a way to incorporate it in our new balancing project, so it was ultimately left out. The display also connected to the board via I2C. The new project used the MPU and 6 LEDs, which were connected to the board via GPIO. Since the LEDs needed 3-3.3V to function, no resistors were needed since the GPIO pins outputted 3.3V. We found the frequency values for specific notes online, and programmed the left side of the board with notes C,D, and E, and the right side with G,A,B. These notes would play and LEDs would light up depending on how tilted the unit was.</div>
                <div className="code">
                <div className="homehead"><ReactEmbedGist gist="f258d7172347543aa130cb07114fec43"/></div>
                </div>
              </div>
          </div>

          )
        }
        
      
        
      
        
}
