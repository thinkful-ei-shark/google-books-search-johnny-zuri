import React, { useState } from "react";
import "./App.css";
import SearchForm from "./components/SearchForm/SearchForm";
import Cardlist from "./components/CardList/CardList";

export function App() {
  const [search, setSearch] = useState("");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [printType, setPrintType] = useState("all");
  const [filter, setFilter] = useState("partial");

  const fetchApi = (e) => {
    e.preventDefault();
    setLoading(true);
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${search}&filter=${filter}&printType=${printType}&key=AIzaSyDVWGglThk31c86Ty0NCsZgSLTrA0HsTGs`
    )
      .then((response) =>
        response.ok ? response.json() : Promise.reject("Something went wrong")
      )
      .then((dataJson) => dataJson.items)
      .then((items) => {
        setBooks(items);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        console.log(error);
        setLoading(false);
      });
  };

  const onChangeHandler = (e) => {
    setSearch(e.target.value);
  };
  const onPrintTypeChangeHandler = (e) => {
    setPrintType(e.target.value);
  };
  const onFilterChangeHandler = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div className="App">
      <h1>Google Book Search</h1>
      <SearchForm
        onChangeHandle={(e) => onChangeHandler(e)}
        onSubmitHandler={(e) => fetchApi(e)}
        printTypeChange={(e) => onPrintTypeChangeHandler(e)}
        filterChange={(e) => onFilterChangeHandler(e)}
      />
      <Cardlist books={books} />
    </div>
  );
}
export default App;
