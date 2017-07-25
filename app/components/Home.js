import React from "react";

class Home extends React.Component{
	constructor(){
		super();
		this.state = {
			state: true
		}
	}

  render(){
    return(
      <h1>This is the home component</h1>
    );
  }

};

export default Home;
