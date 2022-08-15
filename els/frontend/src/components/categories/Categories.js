import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getcategories, deletecategory } from '../../actions/categories';

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
      <Fragment>
        <h2>Category</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Message</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {this.props.categories.map((category) => (
              <tr key={category.id}>
                <td>{category.id}</td>
                <td>{category.name}</td>
                <td>{category.email}</td>
                <td>{category.message}</td>
                <td>
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

export default connect(mapStateToProps, { getcategories, deletecategory })(categories);
