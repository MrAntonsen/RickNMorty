import React from "react";
// Import the CSS file as a module.
import styles from "./CharacterList.module.css";
import Character from "../Character/Character";
import SearchBar from "../Search/Searchbar";

// Constant To store API url.
const API_URL = "https://rickandmortyapi.com/api/character/?page=";

class CharacterList extends React.Component {
  // Initialize the State in Class Component.
  state = {
    initalCharacters: [],
    characters: [],
    text: "",
    index: 1
  };

  // Use ASYNC/AWAIT inside lifecycle method.
  async componentDidMount() {
    try {
      await fetch(`${API_URL}${this.state.index}`)
        .then(resp => {
          return resp.json();
        })
        .then(data => {
          return data.results;
        })
        .then(data => {
          this.setState({
            characters: data,
            initalCharacters: data,
            index: this.state.index + 1
          });
        });
    } catch (e) {
      console.error(e);
    }
  }

  filterArray = name => {
    // this.state.characters = this.state.initalCharacters;

    let filteredArray = this.state.initalCharacters.filter(char => {
      return char.name.toLowerCase().indexOf(name.toLowerCase()) !== -1;
    });
    this.setState({ characters: filteredArray });
  };

  fetchMore = () => {
    try {
      fetch(`${API_URL}${this.state.index}`)
        .then(resp => {
          return resp.json();
        })
        .then(data => {
          return data.results;
        })
        .then(data => {
          this.setState({
            characters: [...this.state.characters, ...data],
            initalCharacters: [...this.state.characters, ...data],
            index: this.state.index + 1
          });
        });
    } catch (e) {
      console.error(e);
    }
  };
  render() {
    return (
      <div className={styles.background}>
        <h1 className='text-center mb-5 text-light'>Rick &amp; Morty</h1>
        <SearchBar onChange={this.filterArray} text={this.state.text} />
        <div className={styles.CharacterList}>
          {this.state.characters.map(char => (
            <Character char={char} key={char.id} />
          ))}
        </div>
        <button className='btn btn-light btn-lg' onClick={this.fetchMore}>
          Load more characters
        </button>
      </div>
    );
  }
}
export default CharacterList;
