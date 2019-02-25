import React, { Component } from 'react';
import './css/home.css';
import Typing from './components/typing';



export default class Home extends Component {
  

        render() {
          return(
            <div>
              <Typing/>

            <div className="homebox">
            
          <strong className="homehead">Abstract</strong>
          <div className="hometext">  
          In this project we will attempt to create a calculator which will communicate with the dev kit, which will compute the math the calculator will also read out the computation it is to do. We will have an external board with buttons, representing numbers and mathematical operations, a screen to display the calculations and a small speaker to play recorded messages of the operations being inputted into the device. The buttons, the screen, and the speaker will be connected to the board using GPIO pins, which will allow us to perform the actual calculating operations on the dev kit itself. Our initial goal for calculations will be addition, subtraction, multiplication and division however if we get those working in time we may try to add in further operations, but we are not sure what the next additions would be. The speaker we are planning to have play recorded sounds which we will store in an SD card which can be inserted and used by the dev kit directly. All of these parts will be soldered onto an external board to create a (hopefully) clean, compact hand held calculator that will plug into the LPC dev kit.
          </div>
           <div className="homehead">Components</div>
             <ol className="hometext component">
               <li>Adafruit Trellis Monochrome Driver PCB for 4x4 Keypad & 3mm LEDs</li>
               <li>Adafruit Silicone Elastomer 4x4 Button Keypad</li>
               <li>RGB LCD Shield Kit with 16x2 Character Negative Display</li>
               <li>SanDisk 8GB SDHC Memory Card</li>
               <li>Zosam Portable Wireless Bluetooth Speaker</li>
               <li>Chanzon 100pcs 3mm LEDs </li>
             </ol>
            <div className="homehead">Goals</div>
            <ol className="hometext component">
               <li>Create working C calculator code</li>
               <li>Interface external components with LPC 4088 Dev Board</li>
               <li>Create external calculator unit</li>
               <li>Play sound from SD Card inserted into LPC 4088 Dev Board</li>
             </ol>
          </div>
          </div>
          )
        }
        
      
        
      
        
}
