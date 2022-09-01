import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getuserlists } from '../../actions/profiles';

export class profiles extends Component {
  static propTypes = {
    profiles: PropTypes.array.isRequired,
    getuserlists: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getuserlists();
  }

  render() {
    return (
      <div>
        <div className="row mt-3">
          <h2 className="col-10">User Lists</h2>
        </div>
        <table className="table table-striped">
          <thead>
            <tr>
            <th>ID</th>
              <th>Avatar</th>
              <th>Username</th>
              <th>Email</th>
              <th>Date Joined</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {this.props.profiles.map((profile) => (
              <tr key={profile.id}>
                <td>{profile.id}</td>
                <td>AVATAR</td>
                <td>{profile.user.username}</td>
                <td>{profile.user.email}</td>
                <td>{profile.created_at}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  profiles: state.profiles.profiles
});

export default connect(mapStateToProps, {
    getuserlists,
})(profiles);