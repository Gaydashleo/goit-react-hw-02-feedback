
import React, { Component } from 'react';
import Section from 'components/Section/Section';
import Statistics from 'components/Statistics/Statistics';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Notification from 'components/Notification/Notification';

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
    return Math.round(percentage);
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

    const options = Object.keys(this.state);
    return (
      <>
        <Section title="Please leave feedback" >
          <FeedbackOptions
              options={options}
              onLeaveFeedback={this.onLeaveFeedback}
            />
        </Section>
        

        <Section title="Statistics">
          {totalFeedback > 0 ? 
            ( <Statistics
        good={good}
        neutral={neutral} 
        bad={bad}
        totalFeedback={totalFeedback}
        positiveFeedbackPercentage={positiveFeedbackPercentage} 
        /> ) :
          ( <Notification message='No feedback'/>)
       
          }
        
      </Section>
      
      
      </>
    );  
  }
}
  

