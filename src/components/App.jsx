import { Component } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addFeedback = option => {
    this.setState(prevState => {
      return {
        [option]: prevState[option] + 1,
      };
    });
  };

  onLeaveFeedback = e => {
    const option = e.target.textContent;
    this.addFeedback(option);
  };

  getKeys = obj => {
    return Object.keys(obj);
  };

  getValues = obj => {
    return Object.values(obj);
  };

  getEntries = obj => {
    return Object.entries(obj);
  };

  countTotalFeedback = () => {
    const values = this.getValues(this.state);
    return values.reduce((total, value) => total + value, 0);
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    return parseInt((this.state.good / total) * 100);
  };

  render() {
    return (
      <div
        style={{
          minHeight: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          gap: '15px',
          fontSize: 40,
          color: '#010101',
          background: 'linear-gradient(45deg, #49a09d, #5f2c82',
        }}
      >
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.getKeys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          ></FeedbackOptions>
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() === 0 ? (
            <Notification message="There is no feedback"></Notification>
          ) : (
            <Statistics
              options={this.getEntries(this.state)}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            ></Statistics>
          )}
        </Section>
      </div>
    );
  }
}
