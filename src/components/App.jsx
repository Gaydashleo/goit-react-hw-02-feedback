
import React, { Component } from 'react';
import Section from 'components/Section/Section';
import Statistics from 'components/Statistics/Statistics';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';


export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const sum = good + neutral + bad;
    return sum;
  };

  countPositiveFeedbackPercentage = () => {
    const result = this.countTotalFeedback();
    const { good } = this.state;
    const percentage = (good * 100) / result;
    return percentage;
  }

  	onLeaveFeedback = (e) => {
		const name = e.target.name;
		this.setState((prevState) => ({
			[name]: prevState[name] + 1
		}));
	};

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback();
    const positiveFeedbackPercentage = this.countPositiveFeedbackPercentage();

    
    return (
      <>
        <Section title="Please leave feedback" >
        </Section>
        <Section>

        </Section>

      
      <Section title="Statistics">
        <Statistics
        good={good}
        neutral={neutral} 
        bad={bad}
        totalFeedback={totalFeedback}
        positiveFeedbackPercentage={positiveFeedbackPercentage} 
        />  
      </Section>
      </>
    );  
  }
}
  

