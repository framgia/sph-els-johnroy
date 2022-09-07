import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editprofile } from '../../actions/profiles';
import { withRouter } from 'react-router';

export class EditProfile extends Component {
  state = {
    id: '',
    username: '',
    email: '',
    password: '',
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });
  onSubmit = (e) => {
    e.preventDefault();
    const id = this.props.match.params.id;
    const { username, email, password } = this.state;
    const profile = { id, username, email, password };
    this.props.editprofile(profile);
    this.setState({
      id: '',
      username: '',
      email: '',
      password: '',
    });
    // window.setTimeout(function () {
    //   location.href = '/';
    // }, 750);
  };

  render() {
    const { username, email, password } = this.state;
    return (
      <div className="card card-body mt-4 mb-4">
        <h2>Edit Profile</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              className="form-control"
              name="username"
              onChange={this.onChange}
              value={username}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              onChange={this.onChange}
              value={email}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              onChange={this.onChange}
              value={password}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(null, { editprofile, withRouter })(EditProfile);
