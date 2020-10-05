import React from "react";
import "./App.css";
import SearchForm from "./components/SearchForm/SearchForm";
import Cardlist from "./components/CardList/CardList";

const apiKey = "AIzaSyDVWGglThk31c86Ty0NCsZgSLTrA0HsTGs";

class App extends React.Component {
  state = {
    search: "",
    books: [],
    loading: false,
    error: null,
    printType: "all",
    filter: "partial",
  };

  fetchApi(e) {
    e.preventDefault();
    this.setState({ loading: true });
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${this.state.search}&filter=${this.state.filter}&printType=${this.state.printType}&key=${apiKey}`
    )
      .then((response) =>
        response.ok ? response.json() : Promise.reject("Something went wrong")
      )
      .then((dataJson) => dataJson.items)
      .then((items) =>
        this.setState({
          books: items,
          loading: false,
        })
      )
      .catch((error) => this.setState({ error, loading: false }));
  }

  onChangeHandler(e) {
    this.setState({ search: e.target.value });
  }
  onPrintTypeChangeHandler(e) {
    this.setState({ printType: e.target.value });
  }
  onFilterChangeHandler(e) {
    this.setState({ filter: e.target.value });
  }

  render() {
    console.log("this is state", this.state);
    return (
      <div>
        <h1>Google Book Search</h1>
        <SearchForm
          onChangeHandle={(e) => this.onChangeHandler(e)}
          onSubmitHandler={(e) => this.fetchApi(e)}
          printTypeChange={(e) => this.onPrintTypeChangeHandler(e)}
          filterChange={(e) => this.onFilterChangeHandler(e)}
        />
        <Cardlist books={this.state.books} />
      </div>
    );
  }
}
export default App;
