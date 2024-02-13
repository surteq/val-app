import React, { useState } from "react";

const ValentineCard = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [response, setResponse] = useState("");
  const [isResponseYesNo, setResponseYesNo] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleHeartClick = () => {
    setIsClicked(true);
  };

  const handleYesClick = () => {
    setResponse("You are my valentine ❤️");
    setResponseYesNo(true);
  };

  const handleNoClick = () => {
    setResponse("You decided not to be my Valentine 😢");
    setResponseYesNo(true);
  };

  return (
    <div>
      {!isClicked ? (
        <div
          className={`container ${isHovered ? "hovered" : ""}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="container">
            <div className="valentines">
              <div className="envelope"></div>
              <div className="front"></div>
              <div className="card" onClick={handleHeartClick}>
                <div className="text">
                  Happy
                  <br />
                  Valentine's
                  <br />
                  Day!
                </div>
                <div className="heart"></div>
              </div>
              <div className="hearts">
                <div className="one"></div>
                <div className="two"></div>
                <div className="three"></div>
                <div className="four"></div>
                <div className="five"></div>
              </div>
            </div>
            <div className="shadow"></div>
          </div>
        </div>
      ) : (
        <div className={"container hovered"}>
          <div className="container">
            <div className="valentines">
              <div className="envelope"></div>
              <div className="front"></div>
              <div className="card2">
                {isResponseYesNo ? (
                  <div className="text3">{response}</div>
                ) : (
                  <>
                    <div className="text2">Will you be my valentine?</div>
                    <div className="button1" onClick={handleYesClick}>
                      Yes
                    </div>
                    <div className="button2" onClick={handleNoClick}>
                      No
                    </div>
                  </>
                )}
              </div>
              <div className="hearts">
                <div className="one"></div>
                <div className="two"></div>
                <div className="three"></div>
                <div className="four"></div>
                <div className="five"></div>
              </div>
            </div>
            <div className="shadow"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ValentineCard;
