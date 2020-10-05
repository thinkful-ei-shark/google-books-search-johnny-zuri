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
  };

  fetchApi(e) {
    e.preventDefault();
    this.setState({ loading: true });
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${this.state.search}&key=${apiKey}`
    )
      .then((response) =>
        response.ok ? response.json() : Promise.reject("Something went wrong")
      )
      .then((dataJson) => dataJson.items)
      .then((items) =>
        this.setState({
          books: items,
          loading: false,
          search: "",
        })
      )
      .catch((error) => this.setState({ error, loading: false }));
  }

  onChangeHandler(e) {
    this.setState({ search: e.target.value });
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <h1>Google Book Search</h1>
        <SearchForm
          onChangeHandle={(e) => this.onChangeHandler(e)}
          onSubmitHandler={(e) => this.fetchApi(e)}
        />
        <Cardlist />
      </div>
    );
  }
}
export default App;
