import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getquestions, editquestion } from '../../actions/question';
import { addactivitylogs } from '../../actions/activitylogs';
import { addresult } from '../../actions/results';
import { getprofiles, updatelearned } from '../../actions/profiles';
import { Link } from 'react-router-dom';

export class TakeLesson extends Component {
  state = {
    useranswer: '',
    correctanswer: '',
    category: '',
    question: '',
    iscorrect: '',
    name: '',
  };

  static propTypes = {
    questions: PropTypes.array.isRequired,
    getquestions: PropTypes.func.isRequired,
    addresult: PropTypes.func.isRequired,
    editquestion: PropTypes.func.isRequired,
    addactivitylogs: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getquestions();
    this.props.getprofiles();
  }

  onChange = (e) =>
    this.setState({
      useranswer: e.target.id,
      correctanswer: e.target.value,
      question: e.target.name,
      name: e.target.placeholder,
    });

  onSubmit = (e) => {
    e.preventDefault();
    const category = this.props.match.params.id;
    const { useranswer, correctanswer, question, name } = this.state;
    const iscorrect = useranswer === correctanswer ? '1' : '0';
    const result = { useranswer, correctanswer, category, question, iscorrect, name };
    this.props.addresult(result);
    if (iscorrect == 1) {
      const message = `has learned the word "${correctanswer}"`;
      const name = useranswer;
      const log = { name, message };
      this.props.addactivitylogs(log);
      const id = this.props.profiles[0].id;
      const wordslearned = this.props.profiles[0].wordslearned + 1;
      const profile = { id, wordslearned };
      this.props.updatelearned({ id, wordslearned });
    }
    const id = question;
    this.props.editquestion({ id });
    this.props.history.push(`/results/${category}`);
    this.setState({
      useranswer: '',
      correctanswer: '',
      category: '',
      question: '',
      iscorrect: '',
      name: '',
    });
  };

  render() {
    const categoryid = this.props.match.params.id;
    const userid = this.props.profiles[0].id;
    return (
      <div>
        <div className="row mt-3">
          <h2 className="col-10">QUIZ {categoryid}</h2>
          <Link to="/">
            <button className="btn btn-warning ml-5">End Quiz</button>
          </Link>
        </div>
        {this.props.questions.map((question) => (
          <div className="col-md-8 offset-md-2 pl-5" key={question.id}>
            {(`${question.categoryid}` === `${categoryid}`) &
            (`${question.userid}` !== `${userid}`) ? (
              <div className="card mb-5 center" style={{ width: '30rem', height: '20rem' }}>
                <div className="card-header font-weight-bold">QUESTION</div>
                <div className="card-body">
                  <h5 className="card-title">{question.name}</h5>
                  <p className="card-body text-right">
                    <form onSubmit={this.onSubmit}>
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
                    </form>
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
  profiles: state.profiles.profiles,
});

export default connect(mapStateToProps, {
  getquestions,
  addresult,
  editquestion,
  addactivitylogs,
  getprofiles,
  updatelearned,
})(TakeLesson);
