import React, { Component } from "react";
import Typist from "react-typist";
import "../css/typing.css";

class Typing extends Component {
  render() {
    return (
      <div>
        <section id="typing">
          <Typist
            className="home"
            avgTypingSpeed={1000}
            cursor={{ show: false }}
            startDelay={500}
          >
            <span className="title">Talking Calculator</span>
            <br />
            <span className="names">
              Andrew Doan
              <span className="accents">
                ,<Typist.Delay ms={500} />
              </span>{" "}
              Jeffrey Li
              <span className="accents">
                ,<br />
                <Typist.Delay ms={500} />
              </span>{" "}
              Silas Collins
              
            </span>
          </Typist>
        </section>
      </div>
    );
  }
}

export default Typing;
