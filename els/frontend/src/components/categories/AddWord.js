import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addquestion } from '../../actions/question';
import { withRouter } from 'react-router';

export class AddWord extends Component {
  state = {
    name: '',
    choiceA: '',
    choiceB: '',
    choiceC: '',
    choiceD: '',
    correct: '',
    categoryid: '',
  };

  static propTypes = {
    addquestion: PropTypes.func.isRequired,
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    const categoryid = this.props.match.params.id;
    const { name, choiceA, choiceB, choiceC, choiceD, correct } = this.state;
    const question = { name, choiceA, choiceB, choiceC, choiceD, correct, categoryid };
    this.props.addquestion(question);
    this.setState({
      name: '',
      choiceA: '',
      choiceB: '',
      choiceC: '',
      choiceD: '',
      correct: '',
      categoryid: '',
    });
    window.setTimeout(function () {
      location.href = '#/categories';
    }, 750);
  };

  render() {
    const { name, choiceA, choiceB, choiceC, choiceD, correct } = this.state;
    return (
      <div className="card card-body mt-4 mb-4">
        <h2>Add Word</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Word</label>
            <input
              className="form-control"
              type="text"
              name="name"
              onChange={this.onChange}
              value={name}
            />
          </div>
          <div className="form-group">
            <label>A.</label>
            <input
              className="form-control"
              type="text"
              name="choiceA"
              onChange={this.onChange}
              value={choiceA}
            />
          </div>
          <div className="form-group">
            <label>B.</label>
            <input
              className="form-control"
              type="text"
              name="choiceB"
              onChange={this.onChange}
              value={choiceB}
            />
          </div>
          <div className="form-group">
            <label>C.</label>
            <input
              className="form-control"
              type="text"
              name="choiceC"
              onChange={this.onChange}
              value={choiceC}
            />
          </div>
          <div className="form-group">
            <label>D.</label>
            <input
              className="form-control"
              type="text"
              name="choiceD"
              onChange={this.onChange}
              value={choiceD}
            />
          </div>
          <div className="form-group">
            <label>Correct Answer</label>
            <input
              className="form-control"
              type="text"
              name="correct"
              onChange={this.onChange}
              value={correct}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(null, { addquestion })(AddWord);
