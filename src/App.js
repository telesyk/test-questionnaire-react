import React, { useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import { fetchJson, getQuestion } from './helpers/index';
import Button from './components/Button';
import QuestionContainer from './components/QuestionContainer';
import { OptionContext } from './context';
import './styles.css';

function App({ conf }) {
  const { dataPath } = conf;
  const [data, setData] = useState([]);
  const [activeTest, setActiveTest] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState({});
  const [currentQuestionId, setCurrentQuestionId] = useState(0);

  useEffect(() => {
    fetchJson(dataPath).then((appData) => setData(appData));
  }, [dataPath]);

  const onStartTest = () => {
    setActiveTest((prevState) => !prevState);
    setCurrentQuestionId(1);
    setCurrentQuestion(getQuestion(data, 1));
  };

  const onNextQuestion = () => {
    // eslint-disable-next-line
    console.log('next question');
  };

  const optionsValue = useMemo(() => ({ currentQuestionId, currentQuestion }));

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
          <OptionContext.Provider value={optionsValue}>
            <div>
              {
                currentQuestionId > 0
                && activeTest
                && (
                  <QuestionContainer
                    question={currentQuestion}
                    onNext={onNextQuestion}
                  />
                )
              }
            </div>
          </OptionContext.Provider>
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
