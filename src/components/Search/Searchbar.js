import React, { Component } from "react";
import styles from "./Searchbar.module.css";

export class Searchbar extends Component {
  state = {
    text: ""
  };

  onChange = e => {
    this.setState({ text: e.target.value });
    this.props.onChange(e.target.value);
  };
  render() {
    return (
      <form className='d-flex justify-content-around mb-5'>
        <input
          type='text'
          name='text'
          placeholder='Search users'
          value={this.text}
          onChange={this.onChange}
          className={styles.input}
        />
      </form>
    );
  }
}

export default Searchbar;
