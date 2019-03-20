import React, { Component } from 'react'

import "../css/home.css"
import "../css/updates.css"

import pic1 from "./week11.jpg"
import pic2 from "./week21.jpg"
export default class Updates extends Component {
  render() {
    return (
      <div className="homebox">
          <div className="homehead">Week One</div>
            <div className="hometext">We primarily worked on getting the speaker to send sound from the SD card out from the I2S line out port on the dev board. We were able to read files from the SD card fairly easily as there was a example program that read files off the SD card. We first implemented that and were successfully able to read the bytes of the .wav files we are using in our program. Unfortunately, the bytes being read off of the .wav files were not in the right format and no sound played. We spend the lab section and a day we met up on the weekend trying to figure it out but were unable. We also tested out LEDs to ensure they were working.</div>
            <div className="picbox">
            <img src={pic1} className="updatePic"></img>
            </div>
          <div className="homehead">Week Two</div>
            <div className="hometext">We were able to figure out the format of that the I2S takes, which is PCM data. Andrew wrote a custom Python script to convert .wav files to ASCII PCM data with the correct 44 bit header for a .wav file. We were successfully able to play sound out of the onboard speaker, but are still working on playing sound out of the I2S line out. We also soldered the LEDs and wires to the Adafruit Trellis Board and tested that the LEDs light up when soldered on. </div>
            <div className="picbox">
            <img src={pic2} className="updatePic"></img>
            </div>
          <div className="homehead">Week Three</div>
            <div className="hometext">We got the speaker to play sound, and read through the data sheet for our I2C peripheral buttons. We then ported over the Arduino library to C, and tested our buttons. Unfortunately, after we got the buttons to work, we fried the board by accidentally connecting the 5V pin to ground and the ground pin to 5V. This fried our buttons, so we purchased a MPU and switched out project over to a balancing game that could still make use of the speaker that we got working already. We put in extra time since we needed to get the new peripheral working, and worked on the project every lab section and all the office hours.</div>
          <div className="homehead">Week Four</div>
            <div className="hometext">We got the MPU working in conjunction with the DAC speaker. A sound is played depending on how unbalanced the unit is, and LEDs connected to the board via GPIO are lit up depending on how far in one direction the unit is tilted.</div>
      </div>
    )
  }
}
