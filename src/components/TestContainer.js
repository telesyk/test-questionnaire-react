import { useState } from "react";
import Button from "./Button";
import Question from "./Question";

function TestContainer({question, onNextClick}) {
  const {title, options} = question;
  const [isActiveBtnNext, setIsActiveBtnNext] = useState(false);

  return (
    <>
      <Question title={title} options={options} classname={"mb-6"} />
      <Button handleClick={onNextClick} isActive={isActiveBtnNext}>Next</Button>
    </>
  );
}
  
export default TestContainer;
  