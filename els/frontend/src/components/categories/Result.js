import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getresults } from '../../actions/results';
import { Link } from 'react-router-dom';

export class Lessons extends Component {
  static propTypes = {
    results: PropTypes.array.isRequired,
    getresults: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getresults();
  }

  render() {
    const categoryid = this.props.match.params.id;
    return (
      <div>
        <div className="row mt-3">
          <h2 className="col-10">RESULTS</h2>
        </div>
        {this.props.results.map((result) => (
          <div key={result.id}>
            {`${result.category}` === `${categoryid}` && (
              <div>
                {result.iscorrect ? (
                  <div className="card text-white bg-success mb-3">
                    <div className="card-header">CORRECT ANSWER</div>
                    <div className="card-body">
                      <h5 className="card-title">{result.name}</h5>
                      <p className="card-text">Your answer: {result.useranswer}</p>
                      <p className="card-text">Correct answer: {result.correctanswer}</p>
                    </div>
                  </div>
                ) : (
                  <div className="card text-white bg-danger mb-3">
                    <div className="card-header">WRONG ANSWER</div>
                    <div className="card-body">
                      <h5 className="card-title">{result.name}</h5>
                      <p className="card-text">Your answer: {result.useranswer}</p>
                      <p className="card-text">Correct answer: {result.correctanswer}</p>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  results: state.results.results,
});

export default connect(mapStateToProps, { getresults })(Lessons);
