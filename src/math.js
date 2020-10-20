import React from "react";

class Math extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      a: 0,
      b: 0,
      c: 0,
      answer: { x1: "", x2: "" },
    };
  }
  handleChange = (event) => {
    const name = event.target.name;
    this.setState({ [name]: event.target.value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    let a = this.state.a;
    let b = this.state.b;
    let c = this.state.c;
    let ac4 = a * 4 * c;
    let delta = b * b - ac4;
    let result = {};
    if (delta < 0) result = { x1: "imag.!", x2: "imag.!" };
    else {
      delta = delta ** (1 / 2);
      a = 2 * a;
      let x1 = (-b - delta) / a;
      let x2 = (-b + delta) / a;
      result = { x1, x2 };
    }

    this.setState({
      answer: result,
    });
  };
  render() {
    return (
      <div>
        a solution for "ax² + bx + c = 0" in real numbers while a &ne; 0
        <form onSubmit={this.handleSubmit}>
          <label>
            a:
            <input
              name="a"
              type="number"
              value={this.state.a}
              onChange={this.handleChange}
            />
          </label>
          <label>
            b:
            <input
              name="b"
              type="number"
              value={this.state.b}
              onChange={this.handleChange}
            />
          </label>
          <label>
            c :
            <input
              name="c"
              type="number"
              value={this.state.c}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <p>
          {"x1 =" + this.state.answer.x1}
          <br />
          {"x2 =" + this.state.answer.x2}
        </p>
      </div>
    );
  }
}

export default Math;
