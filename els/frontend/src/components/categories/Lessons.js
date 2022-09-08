import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getcategories } from '../../actions/categories';
import { Link } from 'react-router-dom';

export class Lessons extends Component {
  static propTypes = {
    categories: PropTypes.array.isRequired,
    getcategories: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getcategories();
  }

  render() {
    return (
      <div>
        <div className="row mt-3">
          <h2 className="col-10">Lessons</h2>
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
                  <Link to={`/takelesson/${category.id}`}>
                    <button className="btn btn-danger btn-sm">Take Lesson</button>
                  </Link>
                  <Link to={`/results/${category.id}`}>
                    <button className="btn btn-success btn-sm">Result</button>
                  </Link>
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

export default connect(mapStateToProps, { getcategories })(Lessons);
