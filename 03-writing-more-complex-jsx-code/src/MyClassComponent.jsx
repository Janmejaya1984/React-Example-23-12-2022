import React, { Component } from 'react'

export class MyClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: "Ford",
      model: "Mustang",
      color: "red",
      year: 1964
    };
  }
  changeColor = () => {
    this.setState({color: "blue"});
  }
  increment = ()=>{
    let y = this.state.year;
    this.setState({year:++y});
  }
  render() {
    return (
      <div>
        <h1>My {this.state.brand}</h1>
        <p>
          It is a {this.state.color}
          {this.state.model}
          from {this.state.year}.
        </p>
        <button
          type="button"
          onClick={this.changeColor}
        >Change color</button>
        <button
          type="button"
          onClick={this.increment}
        >Increment</button>
      </div>
    );
  }
}

export default MyClassComponent