import React, { useState, useEffect } from "react";
import svg from "../adventure.svg";
import winnerSvg from "../winner.svg";
import {
  QuestionCard,
  Question,
  H1,
  Option,
  OptionKey,
  NextBtn,
  ResultDiv,
} from "./style";

function QuestionBox() {
  const [currentQue, setcurrentQue] = useState({});
  const [currentOptions, setcurrentOptions] = useState([]);
  const [random, setRandom] = useState(-1);
  const [correct, setCorrect] = useState(true);
  const [correctCount, setCorrectCount] = useState(0);
  const [correctAnsIndex, setCorrectAnsIndex] = useState(-1);

  const getQuestion = () => {
    fetch(
      "https://restcountries.eu/rest/v2/all?fields=name;capital;flag;topLevelDomain"
    )
      .then((res) => res.json())
      .then((data) => {
        const curr = Math.floor(Math.random() * 250);
        const index = Math.floor(Math.random() * 4);
        setcurrentQue(data[curr]);

        let options = [];
        for (let i = 0; i < 4; i++)
          options.push(data[Math.floor(Math.random() * 250)].name);
        options[index] = data[curr].name;
        setCorrectAnsIndex(index);
        setcurrentOptions(options);
        setRandom(Math.floor(Math.random() * 3));
      })
      .catch(console.error);
  };

  const disableAll = () => {
    let opt = document.getElementsByClassName("options");
    for (let i = 0; i < 4; i++) {
      opt[i].disabled = true;
    }
  };

  const Icon = (name) => {
    const i = document.createElement("i");
    i.classList.add("material-icons");
    i.style.width = "24px";
    i.innerText = name;
    i.onclick = (e) => e.stopPropagation();
    return i;
  };

  const checkAnswer = (e) => {
    e.stopPropagation();
    const optedAnswer = e.target.innerText;
    // document.getElementById("checkCircle").style.visibility = "visible";
    const corr = document.getElementsByClassName("options")[correctAnsIndex];
    corr.appendChild(Icon("check_circle_outlined"));
    if (optedAnswer === currentQue.name) {
      setCorrectCount((c) => c + 1);
      console.log(correctCount);
      setCorrect(true);
      getQuestion();
    } else {
      corr.style.background = " #60BF88";
      corr.style.borderColor = " #60BF88";
      corr.style.color = "#fff";
      e.target.style.background = "#EA8282";
      e.target.style.borderColor = "#EA8282";
      e.target.style.color = "#fff";
      e.target.appendChild(Icon("cancel_outlined"));
      disableAll();
      setCorrect(false);
    }
  };

  useEffect(getQuestion, []);

  return (
    <div>
      <H1>COUNTRY QUIZ</H1>
      <QuestionCard>
        {currentQue ? (
          <>
            <img
              src={svg}
              alt="logo"
              style={{
                width: "140px",
                position: "absolute",
                zIndex: 1,
                right: 0,
                top: "-75px",
                borderBottom: "1px solid black",
              }}
            />
            {/* Getting a random question out of 3 questions */}
            <Question>
              {random === 0 ? (
                `${currentQue.capital} is the capital of `
              ) : random === 1 ? (
                <>
                  <img
                    src={currentQue.flag}
                    alt="flag"
                    style={{ height: "3.5rem" }}
                  />
                  <br />
                  Which country does this flag belong to?
                </>
              ) : random === 2 ? (
                `${currentQue.topLevelDomain} is the Top-Level-Domain of `
              ) : null}
            </Question>

            {/* Displaying all options  */}
            {currentOptions.map((opt, i) => (
              <div key={i} style={{ position: "relative" }}>
                <OptionKey>
                  {String.fromCharCode("A".charCodeAt(0) + i)}
                </OptionKey>
                <Option className="options" onClick={(e) => checkAnswer(e)}>
                  {opt}
                </Option>
              </div>
            ))}
            {correct === false ? (
              <div style={{ textAlign: "right" }}>
                <NextBtn onClick={() => setcurrentQue(null)}>Next</NextBtn>
              </div>
            ) : null}
          </>
        ) : (
          <ResultDiv>
            <div>
              <img src={winnerSvg} alt="winner" height="120px" />
            </div>

            <h1>Results</h1>
            <p>
              You got <span>{correctCount}</span> correct answers
            </p>
            <button
              onClick={() => {
                setCorrect(true);
                getQuestion();
                setCorrectCount(0);
              }}
            >
              Try Again
            </button>
          </ResultDiv>
        )}
      </QuestionCard>
    </div>
  );
}

export default QuestionBox;
