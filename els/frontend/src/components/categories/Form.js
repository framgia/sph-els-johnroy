import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addcategory } from '../../actions/categories';

export class Form extends Component {
  state = {
    name: '',
    message: '',
  };

  static propTypes = {
    addcategory: PropTypes.func.isRequired,
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    const { name, message } = this.state;
    const category = { name, message };
    this.props.addcategory(category);
    this.setState({
      name: '',
      message: '',
    });
    window.setTimeout(function () {
      location.href = '/';
    }, 750);
  };

  render() {
    const { name, message } = this.state;
    return (
      <div className="card card-body mt-4 mb-4">
        <h2>Add Category</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Title</label>
            <input
              className="form-control"
              type="text"
              name="name"
              onChange={this.onChange}
              value={name}
            />
          </div>
          <div className="form-group">
            <label>Description</label>
            <textarea
              className="form-control"
              type="text"
              name="message"
              onChange={this.onChange}
              value={message}
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

export default connect(null, { addcategory })(Form);
