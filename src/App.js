import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

const url = "https://course-api.com/react-tabs-project";

function App() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const getData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setJobs(data);
    setLoading(false);
    console.log(data);
  };

  useEffect(() => {
    getData();
  }, []);

  if (loading) {
    return (
      <section className="section loading">
        <h1>loading...</h1>
      </section>
    );
  }

  return <div className="App">
    <h1>jobs</h1>
  </div>;
}

export default App;
