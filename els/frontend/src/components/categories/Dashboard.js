import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getprofiles, getfollows } from '../../actions/profiles';
import { getactivitylogs } from '../../actions/activitylogs';
import { Link } from 'react-router-dom';

export class dashboard extends Component {
  static propTypes = {
    getprofiles: PropTypes.func.isRequired,
    activitylogs: PropTypes.array.isRequired,
    getactivitylogs: PropTypes.func.isRequired,
    getfollows: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getprofiles();
    this.props.getactivitylogs();
    this.props.getfollows();
  }

  render() {
    return (
      <div>
        <div className="row mt-3">
          <h2 className="col-10">Dashboard</h2>
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
                <h3 className="text-center">{this.props.profiles?.[0]?.user?.username}</h3>
                <p>Words Learned: {this.props.profiles?.[0]?.wordslearned}</p>
                <Link to={`/editprofile/${this.props.profiles?.[0]?.id}`}>
                  <button className="btn btn-primary btn-sm">Edit Profile</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="card" style={{ width: '50rem', height: '15rem' }}>
            <div className="card-header text-center font-weight-bold">ACTIVITY LOG</div>
            <div className="card-body">
              {this.props.activitylogs.map((activitylog) => (
                <div key={activitylog.id}>
                  {this.props.follows.map((follow) => (
                    <div key={follow.id}>
                      {(activitylog.owner.id === follow.following) ? (
                        <h5 className="card-title text-center">
                          {activitylog.owner.username} {activitylog.message}
                        </h5>
                      ) : (
                        ''
                      )}
                    </div>
                  ))}
                  {(activitylog.owner.username === this.props.profiles?.[0]?.user?.username) ? (
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
  follows: state.follows.follows,
});

export default connect(mapStateToProps, {
  getprofiles,
  getactivitylogs,
  getfollows,
})(dashboard);
