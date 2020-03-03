import React, { Component } from "react";
import styles from "./CharacterDetails.css";

let Api_URL = "";
export default class CharacterDetails extends Component {
  state = {
    url: "",
    character: {},
    origin: ""
  };
  async componentDidMount() {
    Api_URL = `https://rickandmortyapi.com/api/character/${this.props.match.params.id}`;

    try {
      await fetch(Api_URL)
        .then(resp => {
          return resp.json();
        })
        .then(data => {
          this.setState({ character: data, origin: data.origin.name });
        });
    } catch (e) {
      console.error(e);
    }
  }
  render() {
    return (
      <div className='container text-center'>
        <section>
          <h1 className='CharTitle'>Character info</h1>
          <div className='row justify-content-around '>
            <div className='col-xs-6'>
              <h1 className='charName'>{this.state.character.name}</h1>
            </div>
          </div>
          <div className='row text-center'>
            <div className='col-xs-10 col-sm-10 offset-1'>
              <div className='container'>
                <div className='row text-center'>
                  <div className='col-xs-6 col-sm-6 col-md-6 offset-3'>
                    <img
                      className='card-img-top text-center mb-5'
                      src={this.state.character.image}
                      alt='Character'
                    />
                  </div>
                </div>
              </div>
              <div className='card text-center'>
                <div className='card-body'>
                  <div className='container-fluid'>
                    <div className='row'>
                      <div className='col-sm-3'>
                        <span>
                          <h3 className='status'>Status: </h3>
                          {this.state.character.status}
                        </span>
                      </div>
                      <div className='col-sm-3'>
                        <span>
                          <h3 className='gender'>Gender: </h3>
                          {this.state.character.gender}
                        </span>
                      </div>
                      <div className='col-sm-3'>
                        <span>
                          <h3 className='origin'>Origin: </h3>
                          {this.state.origin}
                        </span>
                      </div>
                      <div className='col-sm-3'>
                        <span>
                          <h3 className='species'>Species: </h3>
                          {this.state.character.species}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
