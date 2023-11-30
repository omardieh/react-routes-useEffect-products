import { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";

function App() {
  // const [username, setUsername] = useState("");
  // const [count, setCount] = useState(0);

  // // run on every render
  // useEffect(() => {
  //   console.log("inside useEffect");
  //   setUsername("Bob");
  // });

  //  // run only one time
  //  useEffect(() => {
  //   console.log("inside useEffect");
  //   setUsername("Bob");
  // },[]);

  const [product, setProduct] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [username, setUsername] = useState("");

  // run only when the currentPage value changes
  // useEffect(() => {
  //   const apiURL = "https://dummyjson.com/products/" + currentPage;
  //   axios.get(apiURL).then((resp) => setProduct(resp.data));
  // }, [currentPage, username]);

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
    console.log(currentPage);
  };

  return (
    <>
      {/* <button onClick={() => setCount(count + 1)}> increment </button>
      <h2> {username} </h2>
      {count} */}
      <h3>{product.title}</h3>
      <div>{product.description}</div>
      <button onClick={handleNextPage}> next </button>
    </>
  );
}

export default App;
