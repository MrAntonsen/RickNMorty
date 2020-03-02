import React, { Component } from "react";

let Api_URL = "";
export default class CharacterDetails extends Component {
  state = {
    url: "",
    character: {}
  };
  async componentDidMount() {
    Api_URL = `https://rickandmortyapi.com/api/character/${this.props.match.params.id}`;

    try {
      await fetch(Api_URL)
        .then(resp => {
          return resp.json();
        })
        .then(data => {
          this.setState({ character: data });
          console.log(this.state.character);
        });
      // .then(data => {
      //   this.setState({ character: data });
      //   console.log(this.state.character);
      // });
    } catch (e) {
      console.error(e);
    }
  }
  render() {
    return (
      <div className='container text-center'>
        <section>
          <h1>
            <span>Character info</span>
          </h1>
          <div className='row'>
            <div className='col-md-8 offset-2'>
              <h1>{this.state.character.name}</h1>
            </div>
          </div>
          <div className='row text-center'>
            <div className='col-md-10 offset-1'>
              <div className='card'>
                <img
                  className='card-img-top'
                  src={this.state.character.image}
                  alt='Card image cap'
                />
                >
                <div className='card-body'>
                  <div className='col-sm-3'>
                    <span>
                      <h3>Status: </h3>
                      {this.state.character.status}
                    </span>
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
