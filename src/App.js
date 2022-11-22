import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { fetchJson, getQuestion } from './helpers/index';
import Button from './components/Button';
import QuestionContainer from './components/QuestionContainer';
import './styles.css';

const INIT_QUESTION_ID = 0;
const START_QUESTION_ID = 1;

function App({ conf }) {
  const { dataPath } = conf;
  const [data, setData] = useState([]);
  const [isActiveTest, setIsActiveTest] = useState(false);
  const [isFinishedTest, setIsFinishedTest] = useState(false);
  const [lastAnswer, setLastAnswer] = useState(null);
  const [activeQuestion, setActiveQuestion] = useState({});
  const [activeQuestionId, setActiveQuestionId] = useState(INIT_QUESTION_ID);

  useEffect(() => {
    fetchJson(dataPath).then((appData) => setData(appData));
  }, [dataPath]);

  const onInitTest = () => {
    setIsActiveTest((prevState) => !prevState);
    setIsFinishedTest(false);
    setActiveQuestion(getQuestion(data, START_QUESTION_ID));
    setActiveQuestionId(START_QUESTION_ID);
  };

  const onFinishTest = () => {
    setIsActiveTest((prevState) => !prevState);
    setIsFinishedTest(false);
    setActiveQuestion({});
    setActiveQuestionId(INIT_QUESTION_ID);
  };

  const onNextQuestion = (option) => {
    const { next, answer } = option;
    const isAnswerString = typeof answer === 'string';
    const isNextNumber = typeof next === 'number';

    if (isNextNumber && !isAnswerString) {
      setActiveQuestion(getQuestion(data, next));
      return setActiveQuestionId(next);
    }

    setIsFinishedTest(true);
    setLastAnswer(answer);
    return setActiveQuestionId(INIT_QUESTION_ID);
  };

  const isStartButton = data.length && !isActiveTest;
  const showQuestion = activeQuestionId > INIT_QUESTION_ID && isActiveTest;

  return (
    <div className="h-screen py-3 bg-white dark:bg-slate-800 text-slate-900 dark:text-white">
      <div className="container h-screen mx-auto px-5 flex items-center justify-center">
        <div className="border border-2 rounded-lg py-5 basis-full">
          <h1 className="text-3xl py-3 text-center">Questionnaire</h1>
          <div className="py-5 mt-5">
            {
              !data.length && <p className="text-center">No data loaded</p>
            }
            {
              isStartButton && (
                <div className="py-3 text-center">
                  <Button handleClick={onInitTest}>Start test</Button>
                </div>
              )
            }
            <div className="px-5">
              {
                showQuestion && (
                  <QuestionContainer
                    question={activeQuestion}
                    onNext={onNextQuestion}
                  />
                )
              }
              {
                isFinishedTest && !showQuestion && (
                  <div className="flex flex-col justify-center items-center text-center">
                    <div className="mb-5">{lastAnswer}</div>
                    <Button handleClick={onFinishTest}>Finish</Button>
                  </div>
                )
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

App.propTypes = {
  conf: PropTypes.shape({
    dataPath: PropTypes.string,
  }).isRequired,
};

export default App;
