import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getprofiles } from '../../actions/profiles';
import { getactivitylogs } from '../../actions/activitylogs';
import { Link } from 'react-router-dom';

export class dashboard extends Component {
  static propTypes = {
    profiles: PropTypes.array.isRequired,
    getprofiles: PropTypes.func.isRequired,
    activitylogs: PropTypes.func.isRequired,
    getactivitylogs: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getprofiles();
    this.props.getactivitylogs();
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
              {this.props.profiles.map((profile) => (
                <div className="text-center" key={profile.id}>
                  <h3 className="text-center">{profile.user.username}</h3>
                  <p>Words Learned: {profile.wordslearned}</p>
                  <Link to={`/editprofile/${profile.id}`}>
                    <button className="btn btn-primary btn-sm">Edit Profile</button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div className="card" style={{ width: '50rem', height: '15rem' }}>
            <div className="card-header text-center font-weight-bold">ACTIVITY LOG</div>
            <div className="card-body">
              {this.props.activitylogs.map((activitylog) => (
                <div key={activitylog.id}>
                  <h5 className="card-title text-center">
                    {activitylog.owner.username} {activitylog.message}
                  </h5>
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
  getprofiles,
  getactivitylogs,
})(dashboard);
