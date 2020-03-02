import React from "react";
// Import the CSS file as a module.
import styles from "./CharacterList.module.css";
import Character from "../Character/Character";
import SearchBar from "../Search/Searchbar";

// Constant To store API url.
const API_URL = "https://rickandmortyapi.com/api/character/?count=100";

class CharacterList extends React.Component {
  // Initialize the State in Class Component.
  state = {
    initalCharacters: [],
    characters: [],
    text: ""
  };

  // Use ASYNC/AWAIT inside lifecycle method.
  async componentDidMount() {
    try {
      await fetch(API_URL)
        .then(resp => {
          return resp.json();
        })
        .then(data => {
          return data.results;
        })
        .then(data => {
          this.setState({ characters: data, initalCharacters: data });
        });
    } catch (e) {
      console.error(e);
    }
  }

  filterArray = name => {
    this.state.characters = this.state.initalCharacters;
    let filteredArray = this.state.characters.filter(char => {
      return char.name.toLowerCase().indexOf(name.toLowerCase()) !== -1;
    });
    this.setState({ characters: filteredArray });
  };
  // Required render() method in Class Component.
  render() {
    // Render MUST return valid JSX.
    return (
      <div>
        <h1 className='text-center mb-5'>Rick &amp; Morty</h1>
        <SearchBar onChange={this.filterArray} text={this.state.text} />
        <div className={styles.CharacterList}>
          {this.state.characters.map(char => (
            <Character char={char} key={char.id} />
          ))}
        </div>
      </div>
    );
  }
}

export default CharacterList;
