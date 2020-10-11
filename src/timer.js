import React from "react";
import "./time.css";

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date().toLocaleTimeString(), isFullD: false };
  }
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 0);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  tick() {
    this.setState((state) => ({
      date:
        state.isFullD === true
          ? new Date().toString()
          : new Date().toLocaleTimeString(),
    }));
  }
  fullDate = () => {
    this.setState({
      isFullD: !this.state.isFullD,
    });
  };
  render() {
    let btnTxt =
      this.state.isFullD === true ? "show only time" : "show full date";

    return (
      <div>
        <p>it is {this.state.date}</p>
        <button onClick={this.fullDate}>{btnTxt}</button>
      </div>
    );
  }
}

export default Timer;
