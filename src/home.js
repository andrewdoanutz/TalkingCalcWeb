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
          In this project we will attempt to create a jukebox which will communicate with the dev kit, which will play the corresponding song on the push of a button. We will have a screen to display the song name and a small speaker to play the songs. The buttons, the screen, and the speaker will be connected to the board using GPIO pins, which will allow us to perform the actual operations on the dev kit itself. Our initial goal for calculations will be to play the songs off of the SD card corresponding to the buttons however if we get that working in time we will try to add the display to show the song name.
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
               <li>Create working C jukebox code</li>
               <li>Interface external components with LPC 4088 Dev Board</li>
               <li>Create external jukebox unit</li>
               <li>Play sound from SD Card inserted into LPC 4088 Dev Board</li>
             </ol>
          </div>
          </div>
          )
        }
        
      
        
      
        
}
