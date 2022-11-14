import { useState, useEffect } from "react";
import { fetchJson } from "./helpers/index";
import Button from "./components/Button";
import TestContainer from "./components/TestContainer";
import { getQuestion } from "./helpers/index";
import "./styles.css";

function App({ conf }) {
  const { dataPath } = conf;
  const [data, setData] = useState([]);
  const [activeTest, setActiveTest] = useState(false);
  const [activeQuestion, setActiveQuestion] = useState({});
  const [activeQuestionId, setActiveQuestionId] = useState(0);

  useEffect(() => {
    fetchJson(dataPath).then((data) => setData(data));
  }, [dataPath]);

  const onStartTest = () => {
    setActiveTest((prevState) => !prevState);
    setActiveQuestionId(1);
    setActiveQuestion(getQuestion(data, 1));
  };

  const isStartButton = data.length && !activeTest;

  return (
    <div className="h-screen py-3 bg-white dark:bg-slate-800 text-slate-900 dark:text-white">
      <div className="container mx-auto px-5">
        <h1 className="text-3xl py-3 text-center">Questionnaire</h1>
        <div className="py-5">
          {
            !data.length && <p className="text-center">No data loaded</p>
          }
          {
            isStartButton && (
              <div className="py-3 text-center">
                <Button handleClick={onStartTest}>Start test</Button>
              </div>
            )
          }
          {
            activeQuestionId > 0 && activeTest && <TestContainer question={activeQuestion} />
          }
        </div>
      </div>
    </div>
  );
}

export default App;
