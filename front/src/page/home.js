import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [result, setResult] = useState();
  const fetchData = async () => {
   const response = await axios.get("http://localhost:8910/users");   
    const json = await response.data;
    setResult(json);
  };
  console.log( " json ", result.key)
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div>home!</div>
      <span>{result.value}</span>
    </>
  );
};

export default Home;
