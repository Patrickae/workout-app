import React from "react";

class FollowingModal extends React.Component {
  constructor(){
    super();
    this.state={

    }
  }
  render(){
    return(
      <div className="modal fade" id={this.props.user._id + "modal"} tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 className="modal-title" id="myModalLabel">{this.props.user.username}</h4>
          </div>
          <div className="modal-body">
            ...
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>

          </div>
        </div>
      </div>
    </div>
    )
  }
}
export default FollowingModal;
