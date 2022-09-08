import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { viewprofile } from '../../actions/profiles';
import { getactivitylogs } from '../../actions/activitylogs';

export class ViewProfile extends Component {
  static propTypes = {
    viewprofile: PropTypes.func.isRequired,
  };
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.viewprofile(id);
    this.props.getactivitylogs();
  }

  render() {
    return (
      <div>
        <div className="row mt-3">
          <h2 className="col-10">User Profile</h2>
        </div>
        <div className="row">
          <div className="card mr-5" style={{ width: '18rem' }}>
            <img
              className="card-img-top"
              src="https://th.bing.com/th/id/OIP.uF0qJ_YJu51rNAsvMii1lAHaHa?pid=ImgDet&rs=1"
              alt="Card image"
            ></img>
            <div className="card-body">
              <div className="text-center">
                <h3 className="text-center">{this.props.profiles?.user?.username}</h3>
                <p>Words Learned: {this.props.profiles?.wordslearned}</p>
                <button className="btn btn-primary btn-sm">Follow</button>
              </div>
            </div>
          </div>
          <div className="card" style={{ width: '50rem', height: '15rem' }}>
            <div className="card-header text-center font-weight-bold">ACTIVITY LOG</div>
            <div className="card-body">
              {this.props.activitylogs.map((activitylog) => (
                <div key={activitylog.id}>
                  {activitylog.owner.username === this.props.profiles?.user?.username ? (
                    <h5 className="card-title text-center">
                      {activitylog.owner.username} {activitylog.message}
                    </h5>
                  ) : (
                    ''
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  profiles: state.profiles.profiles,
  activitylogs: state.activitylogs.activitylogs,
});

export default connect(mapStateToProps, {
  viewprofile,
  getactivitylogs,
})(ViewProfile);
