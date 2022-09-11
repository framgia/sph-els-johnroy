import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getcategories, deletecategory } from '../../actions/categories';
import { Link } from 'react-router-dom';

export class categories extends Component {
  static propTypes = {
    categories: PropTypes.array.isRequired,
    getcategories: PropTypes.func.isRequired,
    deletecategory: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getcategories();
  }

  render() {
    return (
      <div>
        <div className="row mt-3">
          <h2 className="col-10">Category</h2>
          <Link to="/form">
            <button className="btn btn-success ml-3">Add Category</button>
          </Link>
        </div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Message</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {this.props.categories.map((category) => (
              <tr key={category.id}>
                <td>{category.name}</td>
                <td className="col-md-7">{category.message}</td>
                <td className="d-flex align-items-center">
                  <Link to={`/viewcategory/${category.id}`}>
                    <button className="btn btn-success btn-sm">View Category</button>
                  </Link>
                  <Link to={`/editcategory/${category.id}`}>
                    <button className="btn btn-warning btn-sm">Edit</button>
                  </Link>
                  <button
                    onClick={this.props.deletecategory.bind(this, category.id)}
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
  categories: state.categories.categories,
});

export default connect(mapStateToProps, { getcategories, deletecategory })(categories);
