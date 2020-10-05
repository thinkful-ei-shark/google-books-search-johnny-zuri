import React from "react";
import "./App.css";


const apiKey = 'AIzaSyDVWGglThk31c86Ty0NCsZgSLTrA0HsTGs';

class App extends React.Component {

  state = {
    books: [],
    loading: false,
    error: null
  }

  componentDidMount() {
    this.setState({ loading: true })
    fetch(`https://www.googleapis.com/books/v1/volumes?q=quilting&key=${apiKey}`)
      .then(response => response.ok ? response.json() : Promise.reject('Something went wrong'))
      .then(dataJson => dataJson.items)
      .then(items => this.setState({
        books: items,
        loading: false
      }))
      .catch(error => this.setState({ error, loading: false }))


  }
  render() {
    console.log(this.state)
    return (
      <div></div>
    );
  }

}
export default App;
