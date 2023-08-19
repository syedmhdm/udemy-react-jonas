import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  return (
    <div>
      {/* <Steps />
      <Steps /> */}
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(0);
  const [countDate, setCountDate] = useState({
    count: 0,
    date: new Date().toDateString(),
  });

  function minusStepHandler() {
    setStep((preStep) => preStep - 1);
  }
  function plusStepHandler() {
    setStep((preStep) => preStep + 1);
  }
  function minusCountHandler() {
    setCountDate((preCount) => {
      let dt = new Date(preCount.date);

      dt.setDate(dt.getDate() - step);

      const newCountDate = {
        count: preCount.count - step,
        date: dt.toDateString(),
      };

      return newCountDate;
    });
  }
  function plusCountHandler() {
    setCountDate((preCount) => {
      let dt = new Date(preCount.date);

      dt.setDate(dt.getDate() + step);

      const newCountDate = {
        count: preCount.count + step,
        date: dt.toDateString(),
      };

      return newCountDate;
    });
  }

  return (
    <div>
      <button onClick={minusStepHandler}>-</button>
      Step: {step}
      <button onClick={plusStepHandler}>+</button>
      <br />
      <button onClick={minusCountHandler}>-</button>
      Count: {countDate.count}
      <button onClick={plusCountHandler}>+</button>
      <br />
      {countDate.count} days {countDate.count > 0 ? "from now" : "ago"} was{" "}
      {countDate.date}
    </div>
  );
}

function Steps() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    if (step > 1) setStep((s) => s - 1);
  }
  function handleNext() {
    if (step < 3) {
      setStep((s) => s + 1);
      setStep((s) => s + 1);
    }
  }

  return (
    <div>
      <button className='close' onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>
      {isOpen && (
        <div className='steps'>
          <div className='numbers'>
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <p className='message'>
            Step {step}: {messages[step - 1]}
          </p>
          <div className='buttons'>
            <button
              onClick={handlePrevious}
              style={{ background: "#7950f2", color: "#fff" }}
            >
              Previous
            </button>
            <button
              onClick={handleNext}
              style={{ background: "#7950f2", color: "#fff" }}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
