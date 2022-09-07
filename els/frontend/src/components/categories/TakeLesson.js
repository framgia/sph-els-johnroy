import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getquestions } from '../../actions/question';

export class TakeLesson extends Component {
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
          <h2 className="col-10">QUIZ {categoryid}</h2>
        </div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Question</th>
            </tr>
          </thead>
          <tbody className='text-center'>
            {this.props.questions.map((question) => (
              <tr key={question.id}>
                {`${question.categoryid}` === `${categoryid}` && (
                  <td>
                    <td>{question.name}</td>
                    <td className="d-flex align-items-center col-10">
                      <button className="btn btn-danger btn-sm mx-5">A. {question.choiceA}</button>
                      <button className="btn btn-danger btn-sm mx-5">B. {question.choiceB}</button>
                      <button className="btn btn-danger btn-sm mx-5">C. {question.choiceC}</button>
                      <button className="btn btn-danger btn-sm mx-5">D. {question.choiceD}</button>
                    </td>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  questions: state.questions.questions,
});

export default connect(mapStateToProps, { getquestions })(TakeLesson);
