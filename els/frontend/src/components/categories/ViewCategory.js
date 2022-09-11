import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getquestions, editquestion, deletequestion } from '../../actions/question';
import { Link } from 'react-router-dom';

export class ViewCategory extends Component {
  static propTypes = {
    questions: PropTypes.array.isRequired,
    getquestions: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getquestions();
  }

  render() {
    const categoryid = this.props.match.params.id;
    return (
      <div>
        <div className="row mt-3">
          <h2 className="col-10">QUIZ {categoryid} | ADMIN</h2>
          <Link to={`/addquestion/${categoryid}`}>
            <button className="btn btn-success btn-sm">Add Questionnaire</button>
          </Link>
        </div>
        {this.props.questions.map((question) => (
          <div className="col-md-8 offset-md-2 pl-5" key={question.id}>
            {`${question.categoryid}` === `${categoryid}` ? (
              <div className="card mb-5 center" style={{ width: '30rem', height: '20rem' }}>
                <div className="card-header font-weight-bold">
                  QUESTION{' '}
                  <Link to={`/editquestion/${question.id}`}>
                    <button className="btn btn-warning btn-sm float-right">Edit</button>
                  </Link>
                  <button
                    onClick={this.props.deletequestion.bind(this, question.id)}
                    className="btn btn-danger btn-sm float-right"
                  >
                    {' '}
                    Delete
                  </button>
                </div>
                <div className="card-body">
                  <h5 className="card-title">{question.name}</h5>
                  <p className="card-body text-right">
                    <div>
                      <div className="radio">
                        <label>
                          <input
                            type="radio"
                            name={question.id}
                            value={question.correct}
                            id={question.choiceA}
                            placeholder={question.name}
                            onChange={this.onChange}
                          />
                          A. {question.choiceA}
                        </label>
                      </div>
                      <div className="radio">
                        <label>
                          <input
                            type="radio"
                            name={question.id}
                            value={question.correct}
                            id={question.choiceB}
                            placeholder={question.name}
                            onChange={this.onChange}
                          />
                          B. {question.choiceB}
                        </label>
                      </div>
                      <div className="radio">
                        <label>
                          <input
                            type="radio"
                            name={question.id}
                            value={question.correct}
                            id={question.choiceC}
                            placeholder={question.name}
                            onChange={this.onChange}
                          />
                          C. {question.choiceC}
                        </label>
                      </div>
                      <div className="radio">
                        <label>
                          <input
                            type="radio"
                            name={question.id}
                            value={question.correct}
                            id={question.choiceD}
                            placeholder={question.name}
                            onChange={this.onChange}
                          />
                          D. {question.choiceD}
                        </label>
                      </div>
                      <div className="form-group">
                        <button type="submit" className="btn btn-info btn-sm">
                          Submit
                        </button>
                      </div>
                    </div>
                  </p>
                </div>
              </div>
            ) : (
              ''
            )}
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  questions: state.questions.questions,
});

export default connect(mapStateToProps, {
  getquestions,
  editquestion,
  deletequestion,
})(ViewCategory);
