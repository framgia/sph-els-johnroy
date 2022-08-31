import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getprofiles } from '../../actions/profiles';
import { Link } from 'react-router-dom';

export class dashboard extends Component {
  static propTypes = {
    profiles: PropTypes.array.isRequired,
    getprofiles: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getprofiles();
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
                <table className="table text-center" key={profile.id}>
                  <thead>
                    <tr>
                      <th>
                        <h3 className="text-center">{profile.user.username}</h3>
                      </th>
                      <th />
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Words Learned: {profile.wordslearned}</td>
                      <td>Lessons Learned:{profile.lessonslearned}</td>
                    </tr>
                  </tbody>
                </table>
              ))}
              <Link to="/editprofile">
                <button className="btn btn-primary btn-sm">Edit Profile</button>
              </Link>
            </div>
          </div>
          <div className="card" style={{ width: '50rem', height: '15rem' }}>
            <table className="table text-center" style={{ width: '50rem', height: '15rem' }}>
              <thead>
                <tr>
                  <th>
                    <h3>ACTIVITIES</h3>
                  </th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {this.props.profiles.map((profile) => (
                  <tr key={profile.id}>
                    <td>
                      {profile.user.username} has recently learned 1000 of 1000 words in
                      JapaneseJapaneseJapanese Earth Ichinisan Go level 5000000
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  profiles: state.profiles.profiles,
});

export default connect(mapStateToProps, {
  getprofiles,
})(dashboard);
