import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getquestions, editquestion } from '../../actions/question';
import { addactivitylogs } from '../../actions/activitylogs';
import { addresult } from '../../actions/results';
import { loadUser } from '../../actions/auth';

export class TakeLesson extends Component {
  state = {
    useranswer: '',
    correctanswer: '',
    category: '',
    question: '',
    iscorrect: '',
  };

  static propTypes = {
    auth: PropTypes.object.isRequired,
    questions: PropTypes.array.isRequired,
    getquestions: PropTypes.func.isRequired,
    addresult: PropTypes.func.isRequired,
    editquestion: PropTypes.func.isRequired,
    addactivitylogs: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getquestions();
  }

  onChange = (e) =>
    this.setState({
      useranswer: e.target.name,
      correctanswer: e.target.value,
      question: e.target.id,
    });

  onSubmit = (e) => {
    e.preventDefault();
    const category = this.props.match.params.id;
    const { useranswer, correctanswer, question } = this.state;
    const iscorrect = useranswer === correctanswer ? '1' : '0';
    const result = { useranswer, correctanswer, category, question, iscorrect };
    this.props.addresult(result);
    if (iscorrect == 1) {
      const message = `has learned the word "${correctanswer}"`;
      const name = useranswer;
      const log = { name, message };
      this.props.addactivitylogs(log);
    }
    const id = question;
    this.props.editquestion({ id });
    this.setState({
      useranswer: '',
      correctanswer: '',
      category: '',
      question: '',
      iscorrect: '',
    });
  };

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
          <tbody className="text-center">
            {this.props.questions.map((question) => (
              <tr key={question.id}>
                {`${question.categoryid}` === `${categoryid}` && (
                  <td>
                    <td>{question.name}</td>
                    <td className="d-flex align-items-center col-10">
                      <form onSubmit={this.onSubmit}>
                        <div className="radio">
                          <label>
                            <input
                              type="radio"
                              name={question.choiceA}
                              value={question.correct}
                              id={question.id}
                              onChange={this.onChange}
                            />
                            A. {question.choiceA}
                          </label>
                        </div>
                        <div className="radio">
                          <label>
                            <input
                              type="radio"
                              name={question.choiceB}
                              value={question.correct}
                              id={question.id}
                              onChange={this.onChange}
                            />
                            B. {question.choiceB}
                          </label>
                        </div>
                        <div className="radio">
                          <label>
                            <input
                              type="radio"
                              name={question.choiceC}
                              value={question.correct}
                              id={question.id}
                              onChange={this.onChange}
                            />
                            C. {question.choiceC}
                          </label>
                        </div>
                        <div className="radio">
                          <label>
                            <input
                              type="radio"
                              name={question.choiceD}
                              value={question.correct}
                              id={question.id}
                              onChange={this.onChange}
                            />
                            D. {question.choiceD}
                          </label>
                        </div>
                        <div className="form-group">
                          <button
                            type="submit"
                            className="btn btn-primary"
                          >
                            Submit
                          </button>
                        </div>
                      </form>
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
  auth: state.auth,
});

export default connect(mapStateToProps, { getquestions, addresult, editquestion, loadUser, addactivitylogs })(
  TakeLesson,
);
