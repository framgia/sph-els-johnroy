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
    var questionaire = 0;
    {
      this.props.questions.map((question) => (
        <div className="col-md-8 offset-md-2 pl-5" key={question.id}>
          {(`${question.categoryid}` === `${categoryid}`) & (`${question.userid}` !== `${userid}`)
            ? (questionaire = question)
            : ''}
        </div>
      ));
    }
    return (
      <div>
        <div className="row mt-3">
          <h2 className="col-10">QUIZ {categoryid}</h2>
        </div>
        {console.log(questionaire)}
        {questionaire !== 0 ? (
          <div className="card mb-5 center" style={{ width: '30rem', height: '20rem' }}>
            <div className="card-header font-weight-bold">QUESTION</div>
            <div className="card-body">
              <h5 className="card-title">{questionaire.name}</h5>
              <form onSubmit={this.onSubmit}>
                <div className="radio">
                  <label>
                    <input
                      type="radio"
                      name={questionaire.id}
                      value={questionaire.correct}
                      id={questionaire.choiceA}
                      placeholder={questionaire.name}
                      onChange={this.onChange}
                    />
                    A. {questionaire.choiceA}
                  </label>
                </div>
                <div className="radio">
                  <label>
                    <input
                      type="radio"
                      name={questionaire.id}
                      value={questionaire.correct}
                      id={questionaire.choiceB}
                      placeholder={questionaire.name}
                      onChange={this.onChange}
                    />
                    B. {questionaire.choiceB}
                  </label>
                </div>
                <div className="radio">
                  <label>
                    <input
                      type="radio"
                      name={questionaire.id}
                      value={questionaire.correct}
                      id={questionaire.choiceC}
                      placeholder={questionaire.name}
                      onChange={this.onChange}
                    />
                    C. {questionaire.choiceC}
                  </label>
                </div>
                <div className="radio">
                  <label>
                    <input
                      type="radio"
                      name={questionaire.id}
                      value={questionaire.correct}
                      id={questionaire.choiceD}
                      placeholder={questionaire.name}
                      onChange={this.onChange}
                    />
                    D. {questionaire.choiceD}
                  </label>
                </div>
                <div className="form-group">
                  <button type="submit" className="btn btn-info btn-sm">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        ) : (
          <Link to={`/results/${categoryid}`}>
            <button className="btn btn-warning ml-5">End Quiz</button>
          </Link>
        )}
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
