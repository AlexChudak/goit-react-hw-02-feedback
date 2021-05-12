import React, {Component} from 'react';
// import Counter from './components/Counter';
// import Dropdown from './components/Dropdown'
// import ColorPicker from './components/ColorPicker'
// import TodoList from './components/TodoList';
import './Styles.css'
import Section from './components/Section'
import Statistics from './components/Statistics';
import FeedbackOptions from './components/FeedbackOptions'
import Notification from './components/Notification';

class App extends Component {
  
  state = {
  good: 0,
  neutral: 0,
  bad: 0
  };
  
  countClicker = name => {
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };
  
  countTotalFeedback() {
    // const arrayValue = Object.values(this.state);
    // const total = arrayValue.reduce((acc, value) => acc + value, 0);
    // return total
    return  this.state.good + this.state.neutral + this.state.bad;
    
  };
  countPositiveFeedbackPercentage() {
     if (!this.countTotalFeedback()) {
      return 0
    }
    return  Math.round((this.state.good / this.countTotalFeedback())*100);
  };


  render() {
    
    const { good, neutral, bad } = this.state;
    
  

   return (
    <>
      <div className="Feedback_window">
         <Section title="Please leave feedback">
           <FeedbackOptions options={Object.keys(this.state)}
             onLeaveFeedback={this.countClicker} />
         </Section>
         <Section title="Statistic">
           {this.countTotalFeedback() ? (
             <Statistics
               good={good}
               neutral={neutral}
               bad={bad}
               total={this.countTotalFeedback()}
               positivePercentage={this.countPositiveFeedbackPercentage()} />
           ) : (<Notification message="No feedback given" />)}
           
           </Section>
         </div>;
         </>
    )
  }
}


export default App;