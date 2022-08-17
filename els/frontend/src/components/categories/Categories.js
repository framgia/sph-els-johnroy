import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getcategories, editcategory, deletecategory } from '../../actions/categories';
import { Link } from 'react-router-dom';

export class categories extends Component {
  static propTypes = {
    categories: PropTypes.array.isRequired,
    getcategories: PropTypes.func.isRequired,
    editcategory: PropTypes.func.isRequired,
    deletecategory: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getcategories();
  }

  render() {
    return (
      <Fragment>
        <div className="row mt-3">
          <h2 className="col-10">Category</h2>
          <Link to="/form">
            <button className="btn btn-success">Add Category</button>
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
                <td>{category.message}</td>
                <td className="d-flex align-items-center">
                  <button className="btn btn-danger btn-sm"> Add Word</button>
                  <button
                    //TODO: onClick={this.props.editcategory.bind(this, category.id)}
                    className="btn btn-danger btn-sm"
                  >
                    {' '}
                    Edit
                  </button>
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
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  categories: state.categories.categories,
});

export default connect(mapStateToProps, { getcategories, editcategory, deletecategory })(
  categories,
);
