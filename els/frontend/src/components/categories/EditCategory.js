import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editcategory } from '../../actions/categories';
import { withRouter } from 'react-router';

export class EditCategory extends Component {
  state = {
    id: '',
    name: '',
    message: '',
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });
  onSubmit = (e) => {
    e.preventDefault();
    const id = this.props.match.params.id;
    const { name, message } = this.state;
    const category = { id, name, message };
    this.props.editcategory(category);
    this.setState({
      id: '',
      name: '',
      message: '',
    })
    window.setTimeout(function () {
      location.href = '#/categories';
    }, 750);
  };

  render() {
    const { name, message } = this.state;
    return (
      <div className="card card-body mt-4 mb-4">
        <h2>Edit Category</h2>
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

export default connect(null, { editcategory, withRouter })(EditCategory);
