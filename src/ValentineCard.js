import React, { useState, useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";

const ValentineCard = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [response, setResponse] = useState("");
  const [isResponseYesNo, setResponseYesNo] = useState(false);
  const [isResponseYes, setResponseYes] = useState(false);
  const [userName, setUserName] = useState("");
  const [state, handleSubmit] = useForm("mrgnqeay");

  useEffect(() => {
    if (state.succeeded) {
      setResponseYes(true);
    }
  }, [state.succeeded]);

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
    setResponse("Jestes moja walentynka ❤️");
    setResponseYesNo(true);
  };

  const handleNoClick = () => {
    setResponse("Nie jestes moja walentynka 😢");
    setResponseYesNo(true);
  };

  // const handleFormSubmit = (event) => {
  //   setResponseYes(true);
  // };

  const handleNameChange = (event) => {
    setUserName(event.target.name);
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
                  isResponseYes ? (
                    <div className="text4">{response}</div>
                  ) : (
                    <div className="text3">
                      <form method="POST" onSubmit={handleSubmit}>
                        <input type="hidden" name="message" value={response} />
                        <label>
                          Twoje Imie:
                          <input
                            type="text"
                            name="name"
                            onChange={handleNameChange}
                          />
                        </label>
                        <ValidationError
                          prefix="Name"
                          field="name"
                          errors={state.errors}
                        />
                        <button type="submit" disabled={state.submitting}>
                          Wyslij
                        </button>
                      </form>
                    </div>
                  )
                ) : (
                  <>
                    <div className="text2">Zostaniesz moja walentynka?</div>
                    <div className="button1" onClick={handleYesClick}>
                      Tak
                    </div>
                    <div className="button2" onClick={handleNoClick}>
                      Nie
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
