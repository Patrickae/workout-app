import React from 'react'

class FriendElement extends React.Component {
  constructor() {
    super()
    this.state = {
      friend: '',
    }
    this.handleRequest = this.handleRequest.bind(this)
    this.deleteFriend = this.deleteFriend.bind(this)
  }

  handleRequest() {
    this.props.addFriend(this.props.id)
    console.log('clicked')
    this.setState({ friend: true })
  }

  deleteFriend() {
    this.props.deleteFriend(this.props.id)
    this.setState({ friend: false })
  }

  render() {
    var buttonSwitch
    if (this.props.currentUserFriends.indexOf(this.props.id) >= 0) {
      buttonSwitch = (
        <img
          src="./images/64px-icons/like-full.png"
          className="img-responsive"
          alt="friend"
          onClick={this.deleteFriend}
        />
      )
    } else {
      buttonSwitch = (
        <img
          src="./images/64px-icons/like.png"
          className="img-responsive"
          alt="not-friend"
          onClick={this.handleRequest}
        />
      )
    }

    if (this.state.friend === true) {
      buttonSwitch = (
        <img
          src="./images/64px-icons/like-full.png"
          className="img-responsive"
          alt="friend"
          onClick={this.deleteFriend}
        />
      )
    } else if (this.state.friend === false) {
      buttonSwitch = (
        <img
          src="./images/64px-icons/like.png"
          className="img-responsive"
          alt="not-friend"
          onClick={this.handleRequest}
        />
      )
    }

    return (
      <div className="well">
        <div className="row">
          <div className="col-xs-8">
            <h3>{this.props.name}</h3>
            <h4>{this.props.username}</h4>
            <h4>Workouts: {this.props.workouts.length}</h4>
          </div>
          <div className="col-xs-4">{buttonSwitch}</div>
        </div>
      </div>
    )
  }
}

export default FriendElement
