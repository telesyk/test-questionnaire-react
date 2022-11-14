import { useState, useEffect } from "react";
import { fetchJson } from "./helpers/index";
import Button from "./components/Button";
import "./styles.css";

function App({ conf }) {
  const { dataPath } = conf;
  const [data, setData] = useState([]);
  const [startTest, setStartTest] = useState(Boolean(data.length));

  useEffect(() => {
    fetchJson(dataPath).then((data) => setData(data));
  }, [dataPath]);

  return (
    <div className="h-screen py-3 bg-white dark:bg-slate-800 text-slate-900 dark:text-white">
      <div className="container mx-auto px-5">
        <h1 className="text-2xl text-center">Questionnaire</h1>
        <div className="py-5">
          {!data.length && <p>No data</p>}
          {startTest && <Button />}
        </div>
      </div>
    </div>
  );
}

export default App;
