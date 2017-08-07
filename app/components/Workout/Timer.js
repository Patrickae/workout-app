import React from "react";
import {Link} from "react-router-dom";

class Timer extends React.Component {
  constructor() {
    super();
    this.state = {
      secondsRemaining: 1,
      minutesRemaining: 1
    }

    this.componentDidMount = this.componentDidMount.bind(this);
    this.tick = this.tick.bind(this);
    this.componentWillUnmount = this.componentWillUnmount.bind(this);

  }
  componentDidMount() {
    var secs = this.props.exercise.rest;
    var mins = Math.floor(secs / 60);
    secs = secs % 60;
    this.setState({secondsRemaining: secs});
    this.setState({minutesRemaining: mins});
    this.interval = setInterval(this.tick, 1000);
  }
  //subtract one from seconds and clear interval when <= 0
  tick() {

    this.setState({
      secondsRemaining: this.state.secondsRemaining - 1
    });

    // if(this.state.secondsRemaining < 10){
    //   setState({secondsRemaining:this.state.secondsRemaining})
    // }

    if (this.state.secondsRemaining <= 0 && this.state.minutesRemaining <= 0) {
      clearInterval(this.interval);
    } else if (this.state.secondsRemaining <= 0) {
      this.setState({secondsRemaining: 59});
      this.setState({
        minutesRemaining: this.state.minutesRemaining - 1
      });
    }
  }
  //clear interval if unmount
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {

    var placeholder = "";
    if (this.state.secondsRemaining < 10) {
      placeholder = "0"
    } else {
      placeholder = ""
    };

    return (
      <div className="container">
        <div className="row text-center">
          <h1>Next Set Starts in:</h1>
          <hr/>
          <div className="row text-left">
            <div className="col-xs-5">
              <img src="../images/64px-icons/stopclock.png" alt="stopwatch" className="img-responsive"/>
            </div>
            <h1 className="col-xs-7">{this.state.minutesRemaining}:{placeholder}{this.state.secondsRemaining}</h1>
          </div>
        </div>
        <br/>
        <div className="row">
          <Link to="/workout/active/current" className="btn btn-info btn-lg btn-block">Start Next Set</Link>
        </div>
      </div>
    )
  }
};
export default Timer;
