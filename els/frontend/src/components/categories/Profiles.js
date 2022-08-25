import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getprofiles } from '../../actions/profiles';

export class profiles extends Component {
  componentDidMount() {
    this.props.getprofiles();
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
              <th>Name</th>
              <th>Email</th>
              <th>Date Joined</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {this.props.profiles.map((profile) => (
              <tr key={profile.id}>
                <td>{profile.id}</td>
                <td>{profile.user.name}</td>
                <td className="d-flex align-items-center">
                  <button
                    // onClick={this.props.deleteprofile.bind(this, profile.id)}
                    className="btn btn-danger btn-sm"
                  >
                    {' '}
                    Delete
                  </button>
                </td>
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
  getprofiles,
})(profiles);
